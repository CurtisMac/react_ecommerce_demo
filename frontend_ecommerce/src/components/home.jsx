import React, { Component } from 'react'

class Home extends Component {
    validateName = () => {
        let name = this.name.value
        if (name === '') {
            return
        } else { this.props.addUsername(name) }
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <div>
                    Enter your name:
                    <input type='text' ref={(input) => { this.name = input }}></input>
                    <button type='button' onClick={this.validateName}>Submit</button>
                </div>
            </div>
        )
    }
}

export default Home
