import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './NewsCardGrid.css'

const NewsCardGrid = (props) => {
    const {title, body} = props.newsCard;

    const handleDelete = e => {
        e.target.parentNode.style.display = 'none'
    }

    return (
        <div className='col-md-3 grid-card my-4'>
            <button onClick={(e)=> handleDelete(e)} className='delete-btn-grid'><FontAwesomeIcon icon={faTimesCircle}/></button>
            <div className='grid'> 
                <h6><strong>{title}</strong></h6>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default NewsCardGrid;