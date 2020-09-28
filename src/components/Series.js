import React from 'react';

class Series extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cardserie: []
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=3b35e8b15a0c59c01dff8e1c5e8af97f&language=en-US&page=1')
        .then((response) => {return response.json()})
        .then((data) =>  {this.setState({cardserie: data.results}); console.log(data);})
    }

    render(){
        const cardSerie = this.state.cardserie.map((data, i) => <div key={i}><img src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} /><p>{data.name}</p></div>)
        
        return(
            <main  className="wrapper">
                {cardSerie}
            </main>
        )
    }
}

export default Series;