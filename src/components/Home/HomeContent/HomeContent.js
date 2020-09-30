
import React from 'react';
import styles from './HomeContent.module.css';

function homeContent() {
    return (
        <div>
            <div className={styles.banner}>
                <div>
                    <h1>WELCOME</h1>
                    <p>Commodo sit veniam officia commodo amet occaecat excepteur cillum.</p>
                </div>
            </div>
            <div className={styles.aboutUs}>
                <h1>About Us</h1>
                <p>Elit culpa eiusmod id irure non id eu enim aute.Sit culpa incididunt 
                    dolor id commodo officia velit id commodo eu nisi irure.
                    Consequat anim minim in nostrud commodo nostrud enim minim cupidatat nostrud aliqua.</p>
            </div>
        </div>
)}

export default homeContent;