
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Users.module.css';
import userImage from '../../assets/img/person.png';

class users extends Component {

    state = {
        userList: [],
        pgLoad: false
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    pgLoad: true,
                    userList: json,
                })
                console.log(json, typeof json);
            });
    }


    render() {

        let { pgLoad, userList } = this.state;

        if (!pgLoad) {
            return (
                <div>Loading...</div>
            )
        }
        
        else {
            return (
                <div>
                    <div className={styles.users}>
                        <h1>Users List</h1>
                        {userList && userList.map((user) => (
                            <div className={styles.userProfile} key={user.id}>
                                <img alt='user profile' src={userImage} />
                                <h4>{user.name}</h4>
                                <p>{user.email}</p>
                                <p>{user.username}</p>
                            </div>
                        ))}
                        <div className={styles.addUser}>
                            <button><Link to='/addUser'>Add New User</Link></button>
                        </div>
                    </div>
                </div>
            )
        }


    }
}

export default users;