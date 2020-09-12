import React, { Component } from 'react'
// import { results } from "./resultsData.js"
const axios = require("axios")

export default class Results extends Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        let searchKeyWord = this.props.searchTitle;
        let url = `http://api.tvmaze.com/search/shows?q=${searchKeyWord}`
        axios.get(url)
            .then((res) => {
                const results = res.data;
                this.setState({
                    movies: results
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        let { reset } = this.props

        let movie = this.state.movies.map((item, index) => {
            return (
                <div key={index}>
                    {item.show.image ? <img src={item.show.image.medium} alt="" /> : <p>{item.show.name}'s Image Not Available</p>}
                    <p>{item.show.name}</p>
                    <p>{item.score}</p>
                </div>
            )
        })

        return (
            <div>
                <button onClick={(e) => { reset(e) }}>Search Again</button>
                <div>{movie}</div>
            </div>
        )
    }
}
