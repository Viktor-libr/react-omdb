import React from 'react';
import { Movies } from '../component/Movies';
import { Preloader } from '../component/Preloader';
import { Search } from '../component/Search';

const API_KEY = process.env.REACT_REPOSITORY_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        // console.log(process.env)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
            .catch((err) => {
                console.error(err);
                this.setState({loading: false})
            })
    }

    searchRequest = (e, type = 'All') => {
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${e}${type !== 'All' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
            .catch((err) => {
                console.error(err);
                this.setState({loading: false})
            })
    }
    
   
    render() {
        const { movies, loading } = this.state;

        return <main className='container content'>
            <Search searchRequest={this.searchRequest} />

            {loading ? <Preloader /> : <Movies movies={movies} />}
        </main>

    }
}

export { Main };