function Film(props) {
    
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;
    
    return (
        <div className="card" id={id}>
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={poster === 'N/A' ? `https://via.placeholder.com/200x310?text=${title}` : poster} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{title}</span>
          <p>{type} <span className='right'>{year}</span></p>
        </div>
        
      </div>
    )
}

export { Film }