
import React, { Component } from 'react';
import styles from './Products.module.css';

class products extends Component {

    state = {
        prodList: [],
        pgLoad: false
    }

    componentDidMount() {
        fetch('https://gorest.co.in/public-api/products')
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    pgLoad: true,
                    prodList: json.data,
                })
                console.log(json, typeof json);
            });
    }
    
    render() {

        let { pgLoad, prodList } = this.state;

        if (!pgLoad) {
            return <div>Page is Loading....</div>;
        }
        else {
            return (
                <div className={styles.products}>
                    <h1>Our Products</h1>

                    {prodList && prodList.map(prod => (
                        <div className={styles.singleProduct} key={prod.id}>
                            <img alt='product preview' src={prod.image} />
                            <h3>{prod.name}</h3>
                            <p>{prod.price}</p>
                        </div>
                    ))}
                    
                </div>
            )
        }
    }
}

export default products;