import React, { Component } from 'react';

import styles from  './Posts.module.css';

class posts extends Component {

    state = {
        allPosts: [],
        pgLoad: false
    }

    componentDidMount() {
        fetch('https://gorest.co.in/public-api/posts')
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    pgLoad: true,
                    allPosts: json.data,
                })
                console.log(json, typeof json);
            });
    }
    

    render() {
        let {pgLoad, allPosts} = this.state;

        if (!pgLoad) {
            return <div>Loading Posts....</div>
        } else {
            return (
                <div className={styles.allPosts}>
                    <h1>All Post</h1>

                    { allPosts && allPosts.map(post => (
                        <div className={styles.posts} key={post.id}>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                            <h5>{post.created_at}</h5>
                        </div>
                    ))}
                </div>
            )
        }
    }
    
};

export default posts;