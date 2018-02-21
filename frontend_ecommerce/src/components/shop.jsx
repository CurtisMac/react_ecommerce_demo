import React, { Component } from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import axios from 'axios'
import Hats from './products/hats'
import Shoes from './products/shoes'

class Shop extends Component {
    constructor() {
        super()
        this.state = {
            products: [{
                name: 'High Top Sneaker',
                price: 15,
                picture: './../public/imgs/shoe3.png',
                type: 'shoe'
            }, {
                name: 'Leather Boot',
                price: 80,
                picture: './../public/imgs/shoe3.png',
                type: 'shoe'
            }, {
                name: 'Sandal',
                price: 12,
                picture: './../public/imgs/shoe3.png',
                type: 'shoe'
            }, {
                name: 'Ball cap',
                price: 8,
                picture: './../public/imgs/shoe3.png',
                type: 'hat'
            }, {
                name: 'Top hat',
                price: 75,
                picture: './../public/imgs/hat3.png',
                type: 'hat'
            }, {
                name: 'Posh hat',
                price: 105,
                picture: './../public/imgs/hat3.png',
                type: 'hat'
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
        const shoes = this.state.products.filter((product) => {
            return product.type === 'shoe'
        })

        const hats = this.state.products.filter((product) => {
            return product.type === 'hat'
        })

        const cart = this.state.cart.map((product, i) => { return <li key={i}>{product.name}</li> })

        return (
            <div>
                <h1>Shop</h1>
                <h3>{this.props.username}</h3>
                <h2>Cart</h2>
                <ul>{cart}</ul>
                <nav>
                    <Link to={this.props.match.url + '/shoes'}>Check out our shoes</Link>
                    <Link to={this.props.match.url + '/hats'}>Check out our hats</Link>
                </nav>
                <Switch>
                    <Route path={this.props.match.url + '/shoes'} render={() => <Shoes shoes={shoes} toCart={this.toCart} />} />
                    <Route path={this.props.match.url + '/hats'} render={() => <Hats hats={hats} toCart={this.toCart} />} />
                </Switch>
            </div>
        )
    }
}

export default Shop
