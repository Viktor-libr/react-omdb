import {Film} from './Film';

function Movies(props) {
    const {movies = ''} = props;
    return(
        <div className='movies'>
            {movies.length ? movies.map( (film) => (<Film key={film.imdbID} {...film} />
            )) : <h3>Nothing found</h3>}
        </div>
    )
}

export {Movies}