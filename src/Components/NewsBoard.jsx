import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&pageSize=10&apiKey=${import.meta.env.VITE_API_KEY}`;
        
        // If there is a search query, add it to the URL
        if (searchQuery) {
          url = `https://newsapi.org/v2/everything?q=${searchQuery}&page=${page}&pageSize=10&apiKey=${import.meta.env.VITE_API_KEY}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
        setTotalResults(data.totalResults);
      } catch (error) {
        console.error('Error fetching news articles:', error);
      }
    };

    fetchNews();
  }, [category, page, searchQuery]);

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page * 10 < totalResults) setPage(page + 1);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setPage(1); // Reset page to 1 when performing a new search
    // Get the value from the input field and set the searchQuery state
    setSearchQuery(event.target.search.value);
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">
        <span className="badge bg-light text-dark badge-dark-border">Latest</span> <span className="badge bg-danger">News</span>
      </h2>
      <form onSubmit={handleSearch} className="mb-4">
        <div className="input-group">
          <input type="text" className="form-control" name="search" placeholder="Search for news..." />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
      <div className="d-flex flex-wrap justify-content-center">
        {articles.map((news, index) => (
          <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        ))}
      </div>
      <div className="pagination my-4 d-flex justify-content-center">
        <button className="btn btn-secondary mx-2" onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <span className="align-self-center">Page {page}</span>
        <button className="btn btn-secondary mx-2" onClick={handleNextPage} disabled={page * 10 >= totalResults}>
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsBoard;