import React, { Component } from 'react'
import Search from "./Search.js"
import Results from "./Results.js"

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            title: "",
            defaultValue: "",
            result: false
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            defaultValue: e.target.value
        })
    }

    onSubmitHandler = () => {
        this.setState({
            title: this.state.defaultValue,
            defaultValue: "",
            result: true
        })
    }

    resetHandler = () => {
        this.setState({
            title: "",
            defaultValue: "",
            result: false
        })
    }

    render() {

        return (
            <div>
                <h1>TVMaze React</h1>
                {this.state.result ?
                    <Results
                        searchTitle={this.state.title}
                        reset={this.resetHandler} />
                    : <Search
                        onChange={this.onChangeHandler}
                        onSubmit={this.onSubmitHandler}
                        value={this.state.defaultValue} />}
            </div>
        )
    }
}
