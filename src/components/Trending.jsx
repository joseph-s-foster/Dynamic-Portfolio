import { useState, useEffect } from "react";
import { MinusIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import green from "../assets/project/green.svg";
import red from "../assets/project/red.svg";
import "../Trending.css";

const BASE_URL =
  "https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/";

// Fetch data
const fetchTopHitsForDate = async (date) => {
  const url = `${BASE_URL}${date.format("YYYY/MM/DD")}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) {
        console.warn(`Data unavailable for ${date.format("YYYY-MM-DD")}. Displaying data for ${date.subtract(1, 'day').format("YYYY-MM-DD")}.`);
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
  
  // Function to fetch and process data for a date range
  const getArticlesForDateRange = async (range) => {
    const dates = range.map((i) => today.subtract(i, "day"));
    const [yesterdayData, dayBeforeYesterdayData] = await Promise.all(
      dates.map(fetchTopHitsForDate)
    );

    if (!yesterdayData || !yesterdayData.items?.[0]?.articles) {
      return null;
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
      .filter(
        ({ article }) =>
          ![
            "Main_Page",
            "Special:Search",
            "Wikipedia:Featured_pictures",
            "Pornhub",
            "Porno_y_helado",
            ".xxx",
            "XNXX",
            "wiki.phtml",
            "Module:Wd"
          ].includes(article)
      )
      .sort((a, b) => a.rank - b.rank)
      .slice(0, 10);

    return articlesArray;
  };

  // Try the primary date range
  let articles = await getArticlesForDateRange([1, 2]);
  if (!articles || articles.length === 0) {
    // Fallback to the secondary date range if primary fails
    articles = await getArticlesForDateRange([2, 3]);
  }

  return articles || [];
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  useEffect(() => {
    const fetchTopArticles = async () => {
      const articles = await sortTopHits();
      setTopArticles(articles || []);
    };

    fetchTopArticles();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // trend icon logic
  const getTrendIcon = (article, index) => {
    const { rank, previousRank } = article;

    // show up arrow if rank is higher than the day before
    if (rank < previousRank || previousRank === null) {
      return <img src={green} className="trend-icon up" aria-hidden="true" />;
    }

    // show minus if rank remains unchanged between days
    if ((rank > previousRank && index === 0) || (rank === previousRank)) {
      return <MinusIcon className="trend-icon hold" aria-hidden="true" />;
    }

    // show down arrow if rank is lower than the day before
    if (rank > previousRank) {
      return <img src={red} className="trend-icon down" aria-hidden="true" />;
    }

    // default case
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
              <span className="trend-icon">{getTrendIcon(article, index)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Trending;
