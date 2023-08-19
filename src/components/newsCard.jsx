import "../styles.css";
const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="article-thumbnail"
      />
      <h2 className="article-title">{article.title}</h2>
      <p className="article-description">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="article-link"
      >
        Read more
      </a>
    </div>
  );
};
export default NewsCard;
