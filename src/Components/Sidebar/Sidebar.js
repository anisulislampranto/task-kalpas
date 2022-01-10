import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTh, faThList } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar-info my-5 container'>
            <div className='d-flex justify-content-center my-2 user-card'>
                <img src="" alt="" />
                <div>
                    <h4><strong>Hi Reader</strong></h4>
                    <p>Here's your news!</p>
                </div>
            </div>
            <div className='toggle-card my-3 py-3'>
                <h3><strong>View Toggle</strong></h3>
                <div className='toggle-icon my-4'>
                        <Link to={'/news/grid'}>
                            <button style={{borderRadius: '5px 0px 0px 5px'}} className='icon' > 
                                <FontAwesomeIcon icon={faTh} />
                            </button>
                        </Link>
                        <Link to={'/news/list '}>
                            <button style={{borderRadius: '0px 5px 5px 0px'}} className='icon' > 
                                <FontAwesomeIcon icon={faThList} />
                            </button>
                        </Link>
                </div>
            </div>
            <div className='feedback-card py-4 px-4'>
                <h3><strong>Have a Feedback?</strong></h3>
                <button><strong>We're Listening</strong></button>
            </div>
        </div>
    );
};


export default Sidebar;