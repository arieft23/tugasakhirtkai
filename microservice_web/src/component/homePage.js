import React, { Component } from 'react';
import ButtonURL from './buttonURL';

const API = 'http://137.116.147.69:8001/ListOfUser'

class HomePage extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
		  users: []
		};
	}
	
	componentDidMount(){
		const urlFetch = fetch(API) 
		urlFetch.then(res => {
			if( res.status === 200 )
				return res.json()
		}).then( resJson => {
			console.log("Mengatur State.data")
			this.setState({
				users: resJson 
			})
		})
	}

	UserAdd(event) {
		window.location.href = '/adduser';
	}
	render() {
		return (
			<div className='wrap'>
				<div className='jumbotron'>
					<div className='wrap'>
						<center><h1>TKAI</h1> </center><br></br>
						<center><h3>Selamat Datang di Sistem Informasi Alamat</h3></center>
						<br></br>
						<input type="button" onClick={this.UserAdd.bind(this)} value="Add User" />					
						<br></br><br></br>
						<table className='table table-hover table-striped tableKornea'>
							<thead className='thead-dark'>
								<tr>
									<th scope='col'>Name</th>
									<th scope='col'>Detail</th>
									<th scope='col'>Action</th>
								</tr>
							</thead>
							<tbody>
								{
									this.state.users.map((user) => {
										
										return(
											<tr key={user}>
												<td >{user}</td>						
												<td ><ButtonURL to={'/showaddress/:'+user} name="View"/></td>
												<td ><ButtonURL to={'/delete/:'+user} name="delete"/></td>
											</tr>
										);
									})
								}  
							</tbody>
						</table>
						<br></br>
					</div>
				</div>
			</div>
		);
	}
}
export default HomePage;
