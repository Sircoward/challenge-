import React from 'react';

class Movies extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cardmovie: []
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=3b35e8b15a0c59c01dff8e1c5e8af97f&language=en-US&page=1')
        .then((response) => {return response.json()})
        .then((data) =>  {this.setState({cardmovie: data.results}); console.log(data);})
    }

    render(){
        const cardMovie = this.state.cardmovie.map((data, i) => <div key={i}><img src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} /><p>{data.title}</p></div>)
        return(
            <main className="wrapper" >
                {cardMovie}
            </main>
        )
    }
}

export default Movies;