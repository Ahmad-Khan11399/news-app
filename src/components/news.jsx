import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import NewsCard from "./newsCard";
import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import "../App.css";
import newsCategories from "./const";

const News = () => {
  const [category, setCategory] = useState("");
  const [newsData, setNewsData] = useState([]);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log(apiKey);
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${apiKey}`
        );
        console.log(response.data);
        setNewsData(response.data.articles);
      } catch (error) {
        console.log(error.code);
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category, apiKey]);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      window.location.reload();
      // Perform any additional actions after successful logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <Button onClick={handleLogout} className="log-out-btn" variant="danger">
        Log Out
      </Button>
      <div className="container">
        <h1 className="text-center">News App</h1>
        <div className="category-dropdown">
          <label htmlFor="category">Select a category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {newsCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="news-container">
          {newsData.map((article, index) => (
            <NewsCard key={index} index={index} article={article} />
          ))}
        </div>
      </div>
    </>
  );
};
export default News;
