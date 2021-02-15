import React, {useState, useEffect } from 'react';
import Header from './components/Header';
import NewsCard from './components/NewsCard';

function App() {
  let index = 0;
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <Header />
        {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading News</h1> : <div className="grid grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <NewsCard key={index+1} article={article} />
          ))}
        </div>}
    </div>
  );
}

export default App;
