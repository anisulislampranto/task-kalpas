import React, { useEffect, useState } from 'react';

const NewsCards = () => {
    const [newsCards, setNewsCards] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setNewsCards(data))
    },[])

    console.log(newsCards);

    return (
        <div>
            <h2>News Card</h2>
        </div>
    );
};

export default NewsCards;