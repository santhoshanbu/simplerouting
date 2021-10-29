import React from 'react';
import { BrowserRouter as Router,Switch,Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <Router>
                <Link to='/home' >home</Link>
            </Router>
        </div>
    );
}

export default Home;