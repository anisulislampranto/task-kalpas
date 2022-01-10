import React from 'react';
import './NewsCardGrid.css'

const NewsCardGrid = (props) => {
    const {title, body} = props.newsCard;


    return (
        <div className='container'>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default NewsCardGrid;