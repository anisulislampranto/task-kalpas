import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsCardGrid from '../NewsCardGrid/NewsCardGrid';
import NewsCardList from '../NewsCardList/NewsCardList';
import Sidebar from '../Sidebar/Sidebar';

const NewsCards = () => {
    const [newsCards, setNewsCards] = useState([]);
    const {style} = useParams();
    console.log(style);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setNewsCards(data))
    },[])

    console.log(newsCards);

    return (
        <div className='row home-page'>
            <div className='col-md-3 sidebar'>
                <Sidebar/>
            </div>

            {
                style === 'grid' && 
                <div className='container col-md-9 news-card my-4 row' style={{position:'absolute', right:0}}>
                {
                    newsCards.map(newsCard => <NewsCardGrid newsCard={newsCard} key={newsCard.id}></NewsCardGrid>)
                }
                </div>         
            }
            {
                style === 'list' && 
                <div className=' container col-md-9 news-card my-4' style={{position:'absolute', right:0}}>
                {
                    newsCards.map(newsCard => <NewsCardList newsCard={newsCard} key={newsCard.id}></NewsCardList>)
                }
                </div> 
            }
            
        </div>     
    );
};

export default NewsCards;