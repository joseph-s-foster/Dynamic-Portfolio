import { useState, useEffect } from "react";
import dayjs from "dayjs";
import green from "../assets/green.svg";
import red from "../assets/red.svg";
import blue from "../assets/blue.svg"
import "../Trending.css";

const BASE_URL = "https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/";

const EXCLUDED_ARTICLES = new Set([
  "Main_Page",
  "Special:Search",
  "Wikipedia:Featured_pictures",
  "Pornhub",
  "Porno_y_helado",
  ".xxx",
  "XNXX",
  "wiki.phtml",
  "Module:Wd",
  "File:Icons8_flat_missed_call.svg",
  "Fuck",
  "Category:Redirects_from_moves",
]);

const fetchTopHitsForDate = async (date) => {
  const url = `${BASE_URL}${date.format("YYYY/MM/DD")}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Fetch error for ${date.format("YYYY-MM-DD")}:`, error);
    return null;
  }
};

const sortTopHits = async () => {
  const today = dayjs();
  const getArticles = async ([a, b]) => {
    const [yesterday, dayBefore] = await Promise.all([
      fetchTopHitsForDate(today.subtract(a, "day")),
      fetchTopHitsForDate(today.subtract(b, "day")),
    ]);

    if (!yesterday?.items?.[0]?.articles) return null;

    const map = new Map();
    yesterday.items[0].articles.forEach(({ article, views, rank }) => {
      map.set(article, { views, rank, previousRank: null });
    });

    dayBefore?.items?.[0]?.articles.forEach(({ article, rank }) => {
      if (map.has(article)) map.get(article).previousRank = rank;
    });

    return Array.from(map)
      .filter(([title]) => !EXCLUDED_ARTICLES.has(title))
      .map(([article, data]) => ({ article, ...data }))
      .sort((a, b) => a.rank - b.rank)
      .slice(0, 10);
  };

  return (await getArticles([1, 2])) || (await getArticles([3, 4])) || [];
};

const cleanTitle = (title) => title.replace(/\(.*?\)/g, "").replace(/_/g, " ");
const truncateTitle = (title, length) => title.length > length ? title.slice(0, length).trimEnd() + "..." : title;

function Trending() {
  const [topArticles, setTopArticles] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const load = async () => setTopArticles(await sortTopHits());
    load();

    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTrendIcon = (article, index) => {
    const { rank, previousRank } = article;
    if (previousRank == null) return <img src={blue} className="trend-icon new" aria-hidden="true" />;
    if (rank < previousRank) return <img src={green} className="trend-icon up" aria-hidden="true" />;
    if (rank > previousRank && index !== 0) return <img src={red} className="trend-icon down" aria-hidden="true" />;
    return null;
  };

  return (
    <div className="apiarticles">
      <ul>
        {topArticles.map((article, index) => {
          const title = cleanTitle(article.article);
          const displayTitle = isMobile ? truncateTitle(title, 42) : title;

          return (
            <li key={index}>
              <div className="indicator">
                {getTrendIcon(article, index)}
                <div className="rank">{index + 1}</div>
              </div>
              <div className="data">
                <a
                  href={`https://en.wikipedia.org/wiki/${encodeURIComponent(article.article)}`}
                  className="articles"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {displayTitle}
                </a>
                <div className="views">{article.views.toLocaleString()}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Trending;
