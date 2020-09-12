import React, { Component } from 'react'
import { results } from "./resultsData.js"

export default class Results extends Component {

    render() {
        let { searchTitle, reset } = this.props

        let movie = results.map((item, index) => {
            if (item.show.name.toLowerCase().includes(searchTitle.toLowerCase())) {
                return (
                    <div>
                        <img src={item.show.image.medium} alt="movie image" />
                        <p>{item.show.name}</p>
                        <p>{item.score}</p>
                    </div>
                )
            }
        })

        return (
            <div>
                <button onClick={(e) => { reset(e) }}>Search Again</button>
                <div>{movie}</div>
            </div>

        )

    }
}
