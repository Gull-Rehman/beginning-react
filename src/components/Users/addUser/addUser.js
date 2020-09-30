
import React, { Component } from 'react';
import axios from 'axios';
import styles from './addUser.module.css';

class addUser extends Component {

    state = {
        name: '',
        email: '',
        gender: ''
    }

    userPost = () => {
        const postData = {
            name: this.state.name,
            email: this.state.email,
            gender: this.state.gender
        }
        
        axios.post('https://jsonplaceholder.typicode.com/users', postData)
            .then(resp => {
                console.log(resp);
            })
    }

    render(){
        return (
            <div className={styles.addUser}>
                <h2>Add New User</h2>
                <div>
                    <h4>UserName:</h4>
                    <input type='text' value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                </div>
                <div>
                    <h4>Email:</h4>
                    <input type='email' value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} />
                </div>
                <div>
                    <h4>Gender:</h4>
                    <input type='gender' value={this.state.gender} onChange={(event) => this.setState({gender: event.target.value})} />
                </div>
                <button onClick={this.userPost}>Add User</button>
            </div>
        )
    }
}

export default addUser;