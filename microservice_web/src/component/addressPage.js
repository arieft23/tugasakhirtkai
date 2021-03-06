import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonURL from './buttonURL';


class AddressPage extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
            details: {}
		};
	}
	
	componentDidMount(){
		const API = 'http://104.215.189.208:8001/details/'
		const name = this.props.match.params.name;
		console.log(name);
		const urlFetch = fetch(API+name) 
		urlFetch.then(res => {
			if( res.status === 200 )
				return res.json()
		}).then( resJson => {
			console.log("Mengatur State.data")
			console.log(resJson)
			console.log(name)
			this.setState({
				details: resJson 
			})
			console.log(this.state.details)
		})
		console.log(this.state.details)
	}


	handleSubmit(event) {
        let addr = this.refs.address.value;
        const data = {
            "address": addr
        }
		const editAPI = "http://104.215.189.208:8001/edit/"
		const name = this.props.match.params.name;
        fetch(editAPI+name, {
           method: "POST",
           headers : {
             Accept: "application/json",
             "Content-Type": "application/json"
           },
           body: JSON.stringify(data)
        }).then(function (response) {
            return response.json(); 
        }).then(function (responseData) {
            console.log(responseData);
            window.location.reload();
        });
		
	}

	render() {
		return (
			<div className='col-10 container'>
					<h1>User Address {this.props.match.params.name}</h1>
                    <table className='table table-hover table-striped tableKornea'>
							<thead className='thead-dark'>
								<tr>
									<th scope='col'>Name</th>
									<th scope='col'>Address</th>
                                    <th scope='col'>Action</th>
								</tr>
							</thead>
						<tbody>
						    	
									
											<tr >
											   <td >{this.state.details.name}</td>
                                               <td >{this.state.details.address}</td>
											   <td ><ButtonURL to={'/delete/'+this.state.details.name} name="delete"/></td>
											</tr>
											
									    
								    
							     
						</tbody>
					</table>
                    <h1>Edit Address</h1>
					<form className="form">
						<fieldset className="form-group">
							<label className="bmd-label-static"><b>New Address</b></label>
							<input type="text" name='address' className="form-control" ref="address" />                                  
						</fieldset>
						<button type='submit' className='btn btn-primary' onClick={this.handleSubmit.bind(this)}>Update Address</button>
					</form>
            </div>
		);
	}
}

AddressPage.propTypes = {
	match : PropTypes.shape({
		params : PropTypes.shape({
			name : PropTypes.string
		})
	})
};

export default AddressPage;
