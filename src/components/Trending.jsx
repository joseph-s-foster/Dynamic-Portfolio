import { useState, useEffect } from "react";
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import "../Trending.css";

// Function to fetch data for a single date
async function fetchTopHitsForDate(baseUrl, date) {
  const year = date.format("YYYY");
  const month = date.format("MM");
  const day = date.format("DD");

  const url = `${baseUrl}${year}/${month}/${day}`;
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
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      `Error fetching Wikipedia data for ${date.format("YYYY-MM-DD")}:`,
      error
    );
    return null;
  }
}

// Function to sort top hits
async function sortTopHits() {
  const baseUrl =
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/";
  const today = dayjs();
  const promises = [];

  // Fetch data for the past week
  for (let i = 1; i < 7; i++) {
    const date = today.subtract(i, "day");
    promises.push(fetchTopHitsForDate(baseUrl, date));
  }

  try {
    const results = await Promise.all(promises);

    // Filter out null results
    const validResults = results.filter((result) => result !== null);

    const articlesMap = new Map();

    // Process valid results
    validResults.forEach((dayData, dayIndex) => {
      if (dayData.items && dayData.items[0] && dayData.items[0].articles) {
        dayData.items[0].articles.forEach((article) => {
          const { article: articleName, rank } = article;
          if (!articlesMap.has(articleName)) {
            articlesMap.set(articleName, {
              totalRank: rank,
              count: 1,
              daysInTop1000: 1,
              previousRank: { [dayIndex]: rank },
            });
          } else {
            const existing = articlesMap.get(articleName);
            articlesMap.set(articleName, {
              totalRank: existing.totalRank + rank,
              count: existing.count + 1,
              daysInTop1000: existing.daysInTop1000 + 1,
              previousRank: { ...existing.previousRank, [dayIndex]: rank },
            });
          }
        });
      }
    });

    // Convert map to array and calculate average rank
    const articlesArray = Array.from(
      articlesMap,
      ([articleName, { totalRank, count, daysInTop1000, previousRank }]) => ({
        article: articleName,
        averageRank: totalRank / count,
        daysInTop1000: daysInTop1000,
        previousRank: previousRank,
      })
    );

    // Sort articles
    articlesArray.sort((a, b) => {
      if (a.daysInTop1000 !== b.daysInTop1000) {
        return b.daysInTop1000 - a.daysInTop1000;
      } else {
        return a.averageRank - b.averageRank;
      }
    });

    // Filter out specific articles
    const filteredArticles = articlesArray.filter(
      (article) =>
        article.article !== "Main_Page" &&
        article.article !== "Special:Search" &&
        article.article !== "Wikipedia:Featured_pictures" &&
        article.article !== "Pornhub" &&
        article.article !== "Porno_y_helado" &&
        article.article !== ".xxx"
    );

    // Take top 10 articles after filtering
    const top10Articles = filteredArticles.slice(0, 10);

    return top10Articles;
  } catch (error) {
    console.error("Error processing Wikipedia data:", error);
    return null;
  }
}

// Trending component
function Trending() {
  const [topArticles, setTopArticles] = useState([]);

  useEffect(() => {
    const fetchTopArticles = async () => {
      const articles = await sortTopHits();
      setTopArticles(articles || []);
    };

    fetchTopArticles();
  }, []);

  const removeParentheses = (str) => {
    return str.replace(/\(.*?\)/g, "");
  };

  const getTrendIcon = (article) => {
    const yesterdayIndex = 0;
    const todayIndex = 1;

    // Trend icon logic
    if (
      article.previousRank[yesterdayIndex] &&
      article.previousRank[todayIndex]
    ) {
      const yesterdayRank = article.previousRank[yesterdayIndex];
      const todayRank = article.previousRank[todayIndex];

      if (todayRank < yesterdayRank) {
        return <ArrowTrendingUpIcon className="trend-icon up" />;
      } else if (todayRank > yesterdayRank) {
        return <ArrowTrendingDownIcon className="trend-icon down" />;
      }
    }
    return null;
  };

  return (
    <div className="apiarticles">
      <ul>
        {topArticles.map((article, index) => (
          <li key={index}>
            {/* <span className="numbers">{index + 1}. </span> */}
            <a
              href={`https://en.wikipedia.org/wiki/${encodeURIComponent(
                article.article
              )}`}
              className="articles"
              target="_blank"
              rel="noopener noreferrer"
            >
              {removeParentheses(article.article.replace(/_/g, " "))}
            </a>
            <span className="trend-icon">{getTrendIcon(article)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trending;
