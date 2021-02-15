import React from 'react';

function NewsCard({article}) {
  let date = (article.publishedAt.split("T",1)[0]);
  return (
    <div className="m-4 max-w rounded overflow-hidden shadow-lg mb-2">

        {article.urlToImage == null ? <img src="https://via.placeholder.com/580x450/0000FF/808080"/> : <img className="cursor-pointer" src={article.urlToImage} /> }
        <p><span className="mt-1 p-1 font-bold">{article.source.name} </span>{date}<span></span></p>
        <div className="p-2">
          <h1 className="text-2xl">{article.title}</h1>
          <p className="mt-3">{article.description}</p>
          <a className="hover:text-white flex justify-center bg-gradient-to-r from-green-400 to-blue-500 rounded mt-2 p-2 font-bold" href={article.url} target="_blank">Read More</a>
        </div>
  </div>
  );
}

export default NewsCard;


//Image
//title
//description
//data and source , author
//url
//var res = str.split(" ", 1);
