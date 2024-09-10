import { useEffect, useState } from "react";
import { useInsertionEffect } from "react";
import { NewsItem } from  './NewsItem';

export const NewsBoard = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-08-10&sortBy=publishedAt&apiKey=623ee87c748a4aedb79c8beceb175f32`;

        fetch(url).then((response) => response.json()).then((data) => setArticles(data.articles));

    }, [])

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger ">NEWS</span></h2>
            {articles.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })}
        </div>
    )
}