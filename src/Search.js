import React, { Component } from 'react'

export default class Search extends Component {

    render() {
        let { onChange, onSubmit, value } = this.props
        return (
            <div>
                <form onSubmit={(e) => {
                    e.persist()
                    e.preventDefault()
                    onSubmit(e)
                }}>
                    <input type="text"
                        placeholder="Enter a Movie Title..."
                        onChange={(e) => { onChange(e) }}
                        value={value} />
                    <input type="submit" value="Search" />
                </form>

            </div>
        )
    }
}
