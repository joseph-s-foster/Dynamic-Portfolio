import { useState, useEffect } from "react";
import dayjs from "dayjs";
import "../Trending.css";

async function sortTopHits() {
  const baseUrl =
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/";
  const today = dayjs();
  const promises = [];

  for (let i = 0; i < 7; i++) {
    const date = today.subtract(i, "day");
    const year = date.format("YYYY");
    const month = date.format("MM");
    const day = date.format("DD");

    const url = `${baseUrl}${year}/${month}/${day}`;
    promises.push(fetch(url).then((response) => response.json()));
  }

  try {
    const results = await Promise.all(promises);
    const articlesMap = new Map();

    results.forEach((dayData, index) => {
      if (dayData.items && dayData.items[0] && dayData.items[0].articles) {
        dayData.items[0].articles.forEach((article) => {
          const { article: articleName, rank } = article;
          if (!articlesMap.has(articleName)) {
            articlesMap.set(articleName, {
              totalRank: rank,
              count: 1,
              daysInTop1000: 1,
            });
          } else {
            const existing = articlesMap.get(articleName);
            articlesMap.set(articleName, {
              totalRank: existing.totalRank + rank,
              count: existing.count + 1,
              daysInTop1000: existing.daysInTop1000 + 1,
            });
          }
        });
      }
    });

    const articlesArray = Array.from(
      articlesMap,
      ([articleName, { totalRank, count, daysInTop1000 }]) => ({
        article: articleName,
        averageRank: totalRank / count,
        daysInTop1000: daysInTop1000,
      })
    );

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
        article.article !== "Wikipedia:Featured_pictures"
    );

    // Take top 10 articles after filtering
    const top10Articles = filteredArticles.slice(0, 3);

    return top10Articles;
  } catch (error) {
    console.error("Error fetching Wikipedia data:", error);
    return null;
  }
}

function Trending() {
  const [topArticles, setTopArticles] = useState([]);

  useEffect(() => {
    const fetchTopArticles = async () => {
      const articles = await sortTopHits();
      setTopArticles(articles);
    };

    fetchTopArticles();
  }, []);

  return (
    <div
      style={{
        paddingLeft: "1%",
        paddingRight: "1%",
      }}
      className="apitrend"
    >
      <h3>Trending Now</h3>
      <ul>
        {topArticles.map((article, index) => (
          <li key={index}>
            <span className="numbers">{index + 1}. </span>
            <a
              href={`https://en.wikipedia.org/wiki/${encodeURIComponent(
                article.article
              )}`}
              className="articles"
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.article.replace(/_/g, " ")}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trending;
