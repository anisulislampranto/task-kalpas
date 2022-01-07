import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NewsCards from '../NewsCards/NewsCards';


const Home = () => {
    return (
        <div className='row'>
            <div className='col-md-3 sidebar'>
                <Sidebar/>
            </div>
            <div className='col-md-9 news-card' style={{position:'absolute', right:0}}>
                <NewsCards/>
            </div>
        </div>
    );
};

export default Home;