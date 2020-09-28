import React from 'react';


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            imagemovies: {},
            imageseries: {}
        }

    }

         componentDidMount = () => {
         fetch('https://api.themoviedb.org/3/movie/539885?api_key=3b35e8b15a0c59c01dff8e1c5e8af97f&language=en-US/539885')
         .then((response) => {return response.json()})
         .then((data) =>  {this.setState({imagemovies: data}); console.log(data);})
         fetch('https://api.themoviedb.org/3/tv/48866?api_key=3b35e8b15a0c59c01dff8e1c5e8af97f&language=en-US/48866')
         .then((response) => {return response.json()})
         .then((data) =>  {this.setState({imageseries: data}); console.log(data);})
     }
    
    render = () => {
        return(
            <main>
            <div id="home_wrapper">
            <div>
                <img src={`https://image.tmdb.org/t/p/w300${this.state.imageseries.poster_path}`} onClick={() => this.props.history.push('/series')} />
                <p>Popular Series</p>
            </div>
            <div>
            <img src={`https://image.tmdb.org/t/p/w300${this.state.imagemovies.poster_path}`} onClick={() => this.props.history.push('/movies')}/>
            <p>Popular Movies</p>
            </div>
            </div>
            </main>
        )
    }
}


export default Home;