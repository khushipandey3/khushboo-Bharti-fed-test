import React from 'react';
import axios from 'axios';
import "./App.css";

export default class App extends React.Component {
	state = {
		cards: [],
		loadingData: false,

	}

	componentDidMount() {
		axios.get('https://randomuser.me/api')
			.then(res => {
				console.log(res);
				const cards = res.data.results;
				console.log(cards);
				this.setState({ cards });
			});
	}
	load = async () => {
		//setLoadingData(true);
		const loadingData = true;
		this.setState({loadingData});
		axios.get('https://randomuser.me/api/?results=5')
			.then(res => {
				this.setState({loadingData: false});
				console.log(res);
				const cards = res.data.results;
				console.log(cards);
				this.setState({ cards });
			});
		
	  };
	_createCardsUI() {
		var data = this.state.cards;
		return data.map(el => (
			<div className= "container-fluid">
				<h2>FED-TEST</h2>
				{!this.state.loadingData && <button className= "btn" onClick={this.load}>Load More</button>}
                {this.state.loadingData && <span>Loading...</span>}
				
			<div className="card">
				<img src={el.picture.large} alt="Avatar" />
				<div className="container">
		            <h4><b>{el.name.title} {el.name.first} {el.name.last}</b></h4>
		           <h4>{el.location.country}, {location.city}</h4>
		            <p>Age : {el.dob.age}</p>
		            <p>{el.email} & {el.phone}/{el.cell}</p>
				</div>
			</div>
			</div>
		))
	}

	render() {
		return (
			<div>
				{this._createCardsUI()}
			</div>
		)
	}
}
