import React from 'react';

class Series extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cardserie: [],
            error: '',
            loading: true
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=3b35e8b15a0c59c01dff8e1c5e8af97f&language=en-US&page=1')
        .then((response) => {
            if(response.status === 200){
                return response.json();     
            }else if(response.status === 404){
                this.setState({ error: true })
            }
        })
        .then((data) => {
            this.setState({cardserie: data.results, loading: false})
        })
        .catch((error) => {
            this.setState({ error: true })
        })
    }

    render(){
        const cardSerie = this.state.cardserie.map((data, i) => <div key={i}><img src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} /><p>{data.name}</p></div>)
        if(this.state.error){ 
            return (
            <p>Ooops, something went wrong</p>
            ) 
       }else if(this.state.loading){
           return(
               <p>Loading...</p>
           )
       }else{
       return(
           
           <main className="wrapper" >
               {cardMovie}
           </main>
       )
       }
    }
}

export default Series;