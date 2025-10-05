  import { useEffect, useState } from "react";
  import { useInView } from "react-intersection-observer";
  import report from "../assets/report.json";
  import "../Report.css";

  export default function Report() {
    const categories = report.categories;
    const [animatedScores, setAnimatedScores] = useState({});
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
      if (inView) {
        Object.entries(categories).forEach(([key, category], index) => {
          const target = Math.round(category.score * 100);
          const duration = 1000;
          const startDelay = index * 125;

          setTimeout(() => {
            const startTime = performance.now();

            const animate = (now) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const current = Math.round(target * progress);

              setAnimatedScores((prev) => ({ ...prev, [key]: current }));

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }, startDelay);
        });
      }
    }, [inView, categories]);

    return (
      <div className="container">
        <div className="container-description">
          <h1>
            Audit metrics
          </h1>
          <p>
            Providing performant, compliant, and accessible user experiences across numerous devices including desktops, mobile devices, tablets, and more.
          </p>
        </div>
        <div className="category-scores" ref={ref}>
          {Object.entries(categories).map(([key, category]) => {
            const animatedValue = animatedScores[key] || 0;
            return (
              <div className="category" key={key}>
                <h2>{category.title}</h2>
                <div className="score-bar-container">
                  <div
                    className="score-bar"
                    style={{
                      width: `${animatedValue}%`,
                      backgroundColor: getScoreColor(category.score),
                    }}
                  />
                  <span className="score-text">{animatedValue}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  function getScoreColor(score) {
    return "#2496ED";
  }
