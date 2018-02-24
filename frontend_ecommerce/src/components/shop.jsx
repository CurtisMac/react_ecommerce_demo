import React, { Component } from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import axios from 'axios'
import ProductList from './products/ProductList'
import Cart from './Cart'

class Shop extends Component {
    constructor() {
        super()
        this.state = {
            products: [{
                name: 'Beans',
                price: 2,
                picture: '/images/beans.jpg',
                type: 'veg'
            }, {
                name: 'Beer',
                price: 8,
                picture: '/images/beer.jpg',
                type: 'veg'
            }, {
                name: 'Corn',
                price: 1,
                picture: '/images/corn.jpg',
                type: 'veg'
            }, {
                name: 'Pickles',
                price: 4,
                picture: '/images/pickles.jpeg',
                type: 'veg'
            }, {
                name: 'Chips',
                price: 3,
                picture: '/images/chips.jpg',
                type: 'veg'
            }, {
                name: 'Spam',
                price: 2,
                picture: '/images/spam.jpg',
                type: 'meat'
            },{
                name: 'Bacon',
                price: 2,
                picture: '/images/bacon.jpg',
                type: 'meat'
            },{
                name: 'Ham',
                price: 8,
                picture: '/images/ham.jpg',
                type: 'meat'
            }, {
                name: 'Sardines',
                price: 8,
                picture: '/images/sardines.jpg',
                type: 'meat'
            }, {
                name: 'C-Dog',
                price: 8,
                picture: '/images/corn_dog.jpg',
                type: 'meat'
            }, {
                name: 'Tuna',
                price: 8,
                picture: '/images/tuna.jpg',
                type: 'meat'
            },],
            cart: []
        }
    }

    toCart = (product) => {
        axios.post('http://localhost:8080', {
            product
        })
            .then((response) => {
                this.setState({
                    cart: response.data
                })
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    componentWillMount() {
        axios.get('http://localhost:8080')
            .then((response) => {
                this.setState({
                    cart: response.data
                })
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    render() {
        const meats = this.state.products.filter((product) => {
            return product.type === 'meat'
        })

        const veg = this.state.products.filter((product) => {
            return product.type === 'veg'
        })

        return (
            <div className='container'>
                <nav>
                    <ul className='storeNav'>
                        <li><Link className='button' to={this.props.match.url + '/meats'}>View Meats</Link></li>
                        <li><Link className='button' to={this.props.match.url + '/veg'}>View Veggies</Link></li>
                    </ul>
                </nav>
                <div className='row'>
                    <div className='three columns'>
                        <Cart cart={this.state.cart} />
                    </div>
                    <div className='nine columns'>
                        <Switch>
                            <Route path={this.props.match.url + '/meats'} render={() => <ProductList item={meats} toCart={this.toCart} />} />
                            <Route path={this.props.match.url + '/veg'} render={() => <ProductList item={veg} toCart={this.toCart} />} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shop
