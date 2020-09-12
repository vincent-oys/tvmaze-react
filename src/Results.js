import React, { Component } from 'react'
// import { results } from "./resultsData.js"
const axios = require("axios")

export default class Results extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
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

    onChange = (e) => {
        switch (e.target.value) {
            case "asc-score":
                this.setState((prevState) => ({
                    movies: prevState.movies.sort((a, b) => a.score - b.score),
                }))
                break
            case "dsc-score":
                this.setState((prevState) => ({
                    movies: prevState.movies.sort((a, b) => b.score - a.score),
                }))
                break
            case "asc-name":
                this.setState((prevState) => ({
                    movies: prevState.movies.sort((a, b) => (a.show.name < b.show.name) ? -1 : (a.show.name > b.show.name) ? 1 : 0),
                }))
                break
            case "dsc-name":
                this.setState((prevState) => ({
                    movies: prevState.movies.sort((a, b) => (b.show.name < a.show.name) ? -1 : (b.show.name > a.show.name) ? 1 : 0),
                }))
                break
            default:
                this.setState((prevState) => ({
                    movies: prevState.movies,
                }))
                break
        }
    }


    render() {
        let { reset } = this.props

        let movie = this.state.movies.map((item, index) => {
            return (
                <div key={index} style={{ margin: "5px" }}>
                    {item.show.image ? <img src={item.show.image.medium} alt="" /> : <p style={{ width: "210px", height: "295px", margin: "0", boxSizing: "border-box", border: "1px solid black", display: "flex", justifyContent: "center", alignItems: "center" }}>Image Not Available</p>}
                    <p>{item.show.name}</p>
                    <p>{item.score}</p>
                </div>
            )
        })

        return (
            <div>
                <button onClick={(e) => { reset(e) }}>Search Again</button><br />
                <label>Sort by:</label>
                <select onChange={(e) => { this.onChange(e) }}>
                    <option value="">Please Select</option>
                    <option value="asc-score">Score(Ascending)</option>
                    <option value="dsc-score">Score(Descending)</option>
                    <option value="asc-name">Name(Ascending)</option>
                    <option value="dsc-name">Name(Descending)</option>
                </select>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>{movie}</div>
            </div>
        )
    }
}
