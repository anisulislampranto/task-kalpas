import React from 'react';
import './NewsCardList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const NewsCardList = (props) => {
    const {title, body} = props.newsCard
    return (
        <div className='d-flex container list-card'>
            <div className='list'>
                <h6><strong>{title}</strong></h6>
                <p>{body}</p>
            </div>
            <button className='delete-btn-list'> <FontAwesomeIcon icon={faTimesCircle} /> </button>
        </div>
        
    );
};

export default NewsCardList;