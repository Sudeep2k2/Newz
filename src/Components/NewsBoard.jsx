// import { useEffect, useState } from "react";
// import { useInsertionEffect } from "react";
// import {NewsItem} from  './NewsItem';

// export const NewsBoard = ({category}) => {

//     const [articles, setArticles] = useState([]);

//     useEffect(() => {
//         let url = `https://newsapi.org/v2/everything?q=${category}&from=2024-09-10&sortBy=publishedAt&apiKey=5e8a1514563247b8a34d44353e5eaa04`;

//         fetch(url).then((response) => response.json()).then((data) => setArticles(data.articles));

//     }, [category])

//     console.log(articles);

//     return (
//         <div>
//             <h2 className="text-center">Latest <span className="badge bg-danger ">NEWS</span></h2>
//             {
//                 articles.map((news, index) => {
//                 return news.title!=="[Removed]"&&<NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
//             })
//             }
//         </div>
//     )
// }

import { useEffect, useState } from "react";
import { NewsItem } from './NewsItem';

export const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            setIsLoading(true);
            setError(null);

            // Hardcoded API key (for testing - not recommended for production)
            const apiKey = '5e8a1514563247b8a34d44353e5eaa04'; 
            const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category.toLowerCase()}&apiKey=${apiKey}`;

            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
                }

                const data = await response.json();

                if (data && Array.isArray(data.articles)) {
                    setArticles(data.articles);
                } else {
                    throw new Error("Invalid response structure");
                }
            } catch (error) {
                console.error("Error fetching articles:", error);
                setError(`Failed to fetch news articles: ${error.message}`);
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticles();
    }, [category]);

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">{category} NEWS</span></h2>
            {isLoading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-danger">{error}</p>}
            {!isLoading && !error && articles.length > 0 ? (
                <div className="d-flex flex-wrap justify-content-center">
                    {articles.map((news, index) => (
                        news.title !== "[Removed]" && (
                            <NewsItem
                                key={index}
                                title={news.title}
                                description={news.description}
                                src={news.urlToImage}
                                url={news.url}
                            />
                        )
                    ))}
                </div>
            ) : (
                !isLoading && !error && <p className="text-center text-muted">No news articles available for this category.</p>
            )}
        </div>
    );
};