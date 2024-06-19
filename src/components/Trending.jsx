import { useState, useEffect } from "react";
import dayjs from "dayjs";
import green from "../assets/project/green.svg";
import red from "../assets/project/red.svg";
import "../Trending.css";

const BASE_URL =
  "https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/";

// Fetch data for a single date
const fetchTopHitsForDate = async (date) => {
  const url = `${BASE_URL}${date.format("YYYY/MM/DD")}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) {
        console.warn(`Data unavailable for ${date.format("YYYY-MM-DD")}`);
        return null;
      } else {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
    }
    return await response.json();
  } catch (error) {
    console.error(
      `Error fetching Wikipedia data for ${date.format("YYYY-MM-DD")}:`,
      error
    );
    return null;
  }
};

const sortTopHits = async () => {
  const today = dayjs();

  // defines data range
  const dates = [1, 2].map((i) => today.subtract(i, "day"));
  const [yesterdayData, dayBeforeYesterdayData] = await Promise.all(
    dates.map(fetchTopHitsForDate)
  );

  // returns empty array for unavailable items
  if (!yesterdayData || !yesterdayData.items?.[0]?.articles) {
    return [];
  }

  const articlesMap = new Map();

  if (yesterdayData?.items?.[0]?.articles) {
    yesterdayData.items[0].articles.forEach(({ article, rank }) => {
      articlesMap.set(article, { rank, previousRank: null });
    });
  }

  if (dayBeforeYesterdayData?.items?.[0]?.articles) {
    dayBeforeYesterdayData.items[0].articles.forEach(({ article, rank }) => {
      if (articlesMap.has(article)) {
        articlesMap.get(article).previousRank = rank;
      }
    });
  }

  const articlesArray = Array.from(articlesMap, ([article, data]) => ({
    article,
    rank: data.rank,
    previousRank: data.previousRank,
  }))

    // removes unwanted articles from results
    .filter(
      ({ article }) =>
        ![
          "Main_Page",
          "Special:Search",
          "Wikipedia:Featured_pictures",
          "Pornhub",
          "Porno_y_helado",
          ".xxx",
        ].includes(article)
    )

    // sorts articles by rank in descending order for the top 10 results
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 10);

  return articlesArray;
};

// Helper function to clean titles
const cleanTitle = (title) => {
  return title.replace(/\(.*?\)/g, "").replace(/_/g, " ");
};

// Helper function to truncate titles
const truncateTitle = (title, length) => {
  let truncated = title.slice(0, length).trimEnd();
  return title.length > length ? `${truncated}...` : title;
};

// Trending component
function Trending() {
  const [topArticles, setTopArticles] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 724);

  useEffect(() => {
    const fetchTopArticles = async () => {
      const articles = await sortTopHits();
      setTopArticles(articles || []);
    };

    fetchTopArticles();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 724);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Trend icon logic
  const getTrendIcon = (article) => {
    const { rank, previousRank } = article;

    // show no arrow if rank remains the same
    if (rank === previousRank) return null;

    // show up arrow if article is higher in rank than the day before
    if (rank < previousRank || previousRank === null) {
      return <img src={green} className="trend-icon up" aria-hidden="true" />;
    }

    // show down arrow if the article is still the top 10 but lower in rank than the day before
    if (rank > previousRank) {
      return <img src={red} className="trend-icon down" aria-hidden="true" />;
    }

    // return null if the conditions above are not met
    return null;
  };

  return (
    <div className="apiarticles">
      <ul>
        {topArticles.map((article, index) => {
          const cleanedTitle = cleanTitle(article.article);
          const displayTitle = isMobile
            ? truncateTitle(cleanedTitle, 32)
            : cleanedTitle;

          return (
            <li key={index}>
              <a
                href={`https://en.wikipedia.org/wiki/${encodeURIComponent(
                  article.article
                )}`}
                className="articles"
                target="_blank"
                rel="noopener noreferrer"
              >
                {displayTitle}
              </a>
              <span className="trend-icon">{getTrendIcon(article)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Trending;
