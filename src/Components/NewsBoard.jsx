import { useEffect, useState } from "react";
import { useInsertionEffect } from "react";
import {NewsItem} from  './NewsItem';

export const NewsBoard = ({category}) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/everything?q=${category}&from=2024-09-10&sortBy=publishedAt&apiKey=5e8a1514563247b8a34d44353e5eaa04`;

        fetch(url).then((response) => response.json()).then((data) => setArticles(data.articles));

    }, [category])

    console.log(articles);

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger ">NEWS</span></h2>
            {
                articles.map((news, index) => {
                return news.title!=="[Removed]"&&<NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })
            }
        </div>
    )
}