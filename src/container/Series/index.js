import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';

class Series extends Component{
state = {
    series: [],
    seriesName: '',
    isFetching: false
    }
    
    componentDidMount(){

    }

    onSeriesInputChange = (e) => {
        this.setState({seriesName: e.target.value, isFetching: true});

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then( (response) => response.json() )
        .then(json => { this.setState({ series: json, isFetching: false })})

        console.log(e);
        console.log(e.target.value);
    }

    render(){
        const { series, seriesName, isFetching } = this.state;
        return(
            <div>
                <div>
                <Intro message="Here's a list of your most loved series"/>
                    <input 
                    placeholder="Search Series"
                    value={seriesName}
                    type="text" 
                    onChange={this.onSeriesInputChange}/>
                </div>
                {
                    series.length === 0 && seriesName.trim() === '' && isFetching === false
                    &&
                    <p>Please enter series name into the input</p>                
                }
                {
                    series.length === 0 && seriesName !== '' && isFetching === false
                    &&
                    <p>No series has been found</p>
                }
                {
                    isFetching === true
                    &&
                    <Loader />

                }
                {
                    isFetching === false
                    &&
                    <SeriesList list={this.state.series}/>
                }

            </div>

        )
    }
}

export default Series;