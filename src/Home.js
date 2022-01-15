import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import "./Home.css"
import { useStateValue } from './StateProvider';
import Profile from './Profile';
import Test from './Test';





class Home extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length-1]}`
		} else {
			 url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
		}
	}


	render() {
		return (
			<div className="container2">
				{console.log("home se ",localStorage.getItem('isauth'))}
				
				<div className="home__Title">
					<h1 style={{ fontSize: "45px" }}>Meet ME</h1>
					<p style={{ fontWeight: "200" }}>Video conference website that lets you stay in touch with all your friends.</p>
				<Profile/>
				</div>
				
				<Test a={"hi"}/>
				<div style={{
					background: "white", borderRadius:"10px", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
					textAlign: "center", margin: "auto", marginTop: "100px"
				}}>
					<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Start or join a meeting</p>
					{/* <Input placeholder="URL" value={this.props.name} onChange={e => this.handleChange(e)} /> */}
					<Input placeholder="URL" onChange={e => this.handleChange(e)} />
					<Button variant="contained" color="primary" onClick={this.join} style={{ margin: "20px" }}>Go</Button>
				</div>
			</div>
		)
	}
}

export default Home;