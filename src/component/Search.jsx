import React from 'react';


class Search extends React.Component {
    state = {
        search: '',
        radio: 'All',
    }

    handleSearch = (e) => {
        if (e.key === 'Enter') {
            this.props.searchRequest(this.state.search, this.state.radio)
        }
    }

    handleTypeFilter = (e) => {
        this.setState(
            () => ({radio: e.target.dataset.type}), 
            () => (this.props.searchRequest(this.state.search, this.state.radio)) )
    }

    render() {
        return (
            <div className="row search-inp">

                <input id="password"
                    type="search"
                    placeholder='Search'
                    className="validate"
                    value={this.state.search}
                    onChange={(e) => this.setState({ search: e.target.value })}
                    onKeyDown={this.handleSearch} />
                <button
                    className='btn search-btn'
                    onClick={() => this.props.searchRequest(this.state.search, this.state.radio)}>Search</button>

                <div className='radio-btn'>
                    <label>
                        <input
                            className="with-gap"
                            name="group3"
                            type="radio"
                            data-type ='All'
                            onChange={this.handleTypeFilter}
                            checked= {this.state.radio === 'All'} />
                        <span>All</span>
                    </label>

                    <label>
                        <input
                            className="with-gap"
                            name="group3"
                            type="radio"
                            data-type ='movie'
                            onChange={this.handleTypeFilter}
                            checked= {this.state.radio === 'movie'} />
                        <span>Movies</span>
                    </label>

                    <label>
                        <input
                            className="with-gap"
                            name="group3"
                            type="radio"
                            data-type ='series'
                            onChange={this.handleTypeFilter}
                            checked= {this.state.radio === 'series'} />
                        <span>Series</span>
                    </label>

                    <label>
                        <input
                            className="with-gap"
                            name="group3"
                            type="radio"
                            data-type ='game'
                            onChange={this.handleTypeFilter}
                            checked= {this.state.radio === 'game'} />
                        <span>Game</span>
                    </label>

                </div>
            </div>
        )

    }
}

export { Search }