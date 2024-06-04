import { useState, useEffect } from "react";
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import "../Trending.css";

const BASE_URL = "https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/";

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
    console.error(`Error fetching Wikipedia data for ${date.format("YYYY-MM-DD")}:`, error);
    return null;
  }
};

// Sort top hits
const sortTopHits = async () => {
  const today = dayjs();
  const dates = [1, 2, 3].map((i) => today.subtract(i, "day"));
  const results = await Promise.all(dates.map(fetchTopHitsForDate));

  const articlesMap = new Map();
  results.filter(Boolean).forEach((dayData, dayIndex) => {
    if (dayData?.items?.[0]?.articles) {
      dayData.items[0].articles.forEach(({ article, rank }) => {
        if (!articlesMap.has(article)) {
          articlesMap.set(article, {
            totalRank: rank,
            count: 1,
            daysInTop1000: 1,
            previousRank: { [dayIndex]: rank },
          });
        } else {
          const existing = articlesMap.get(article);
          articlesMap.set(article, {
            totalRank: existing.totalRank + rank,
            count: existing.count + 1,
            daysInTop1000: existing.daysInTop1000 + 1,
            previousRank: { ...existing.previousRank, [dayIndex]: rank },
          });
        }
      });
    }
  });

  const articlesArray = Array.from(articlesMap, ([article, data]) => ({
    article,
    averageRank: data.totalRank / data.count,
    daysInTop1000: data.daysInTop1000,
    previousRank: data.previousRank,
  })).filter(({ article }) =>
    !["Main_Page", "Special:Search", "Wikipedia:Featured_pictures", "Pornhub", "Porno_y_helado", ".xxx"].includes(article)
  ).sort((a, b) =>
    b.daysInTop1000 - a.daysInTop1000 || a.averageRank - b.averageRank
  ).slice(0, 10);

  return articlesArray;
};

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

  const removeParentheses = (str) => str.replace(/\(.*?\)/g, "");

  // Trend icon logic
  const getTrendIcon = (article, index) => {
    const { previousRank } = article;
    const rankKeys = Object.keys(previousRank);
    if (rankKeys.length < 2) return null; // Not enough data to compare

    const [previousDay, recentDay] = rankKeys.map(Number).sort((a, b) => a - b);
    const previousRankVal = previousRank[previousDay];
    const recentRankVal = previousRank[recentDay];

    if (index === 0 && recentRankVal >= previousRankVal) return null; // Top article shouldn't have a down arrow

    if (recentRankVal < previousRankVal) {
      return <ArrowTrendingUpIcon className="trend-icon up" />;
    } else if (recentRankVal > previousRankVal) {
      return <ArrowTrendingDownIcon className="trend-icon down" />;
    }
    return null;
  };

  return (
    <div className="apiarticles">
      <ul>
        {topArticles.map((article, index) => (
          <li key={index}>
            <a
              href={`https://en.wikipedia.org/wiki/${encodeURIComponent(article.article)}`}
              className="articles"
              target="_blank"
              rel="noopener noreferrer"
            >
              {removeParentheses(article.article.replace(/_/g, " "))}
            </a>
            <span className="trend-icon">{getTrendIcon(article, index)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trending;
