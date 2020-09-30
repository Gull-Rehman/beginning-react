
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';


const navbar = () => {

    return (
        <div className={styles.navbar}>
            <span>First React</span>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/users">users</Link></li>
                <li><Link to="/posts">posts</Link></li>
                <li><Link to="/products">products</Link></li>
            </ul>
        </div>
    )
}

export default navbar;