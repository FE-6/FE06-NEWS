import NewsDetailCard from "../components/NewsDetailCard";
import Navbar from "../components/Navbar";
import axios from "axios";
import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const URL = "https://6353739ca9f3f34c3752aeb7.mockapi.io/ayf/article/"

function NewsDetail () {
    // const [articleId, setarticleId] = useState(true);
    // const params = useParams();
    // const {name} = params
    const [news, setNews] = useState([]);
    
    
    useEffect(() => {
    axios.get(URL).then((response) => {
      setNews(response.data);
    //   setarticleId(false);
    });
  }, []);

  console.log(news);

    return (
        <>
        <Navbar/>
        {
            news.map ((article) => (
                <div className="container mt-3" key={article.id}>
                <div className="berita-body container mx-5 mt-4">
                    <NewsDetailCard
                        title={article.title}
                        name={article.name}
                        createdAt={article.createdAt}
                        image={article.image}
                        content={article.content}
                    />
                </div>
            </div>
            ))
        
        }
        </>
    )
}

export default NewsDetail;