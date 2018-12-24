import React, { Component } from 'react';

class AddUser extends Component {
		
	handleSubmit= (event) => {
        event.preventDefault();
        let name = this.refs.name.value;
        let addr = this.refs.address.value;
        const data = {
            "name": name,
            "address": addr
        }
        const addAPI = "http://137.116.147.69:8001/AddUser"
        fetch(addAPI, {
           method: "POST",
           mode: "cors", 
           headers : {
             Accept: "application/json",
             "Content-Type": "application/json",
           },
           body: JSON.stringify(data)
        }).then(function (response) {
            return response.json();
        }).then(function (responseData) {
            console.log(responseData);
            console.log(data)
            window.location.href="/";
        });
        window.location.href="/";
        //console.log(data)
	}

  
	render() {
		return (
			<div className='col-10 container formEditKornea'>                    
                    <h1>Add User</h1>
					<form className="form">
						<fieldset className="form-group">
							<label className="bmd-label-static"><b>Name</b></label>
							<input type="text" name='name' className="form-control" ref="name" />                                  
						</fieldset>
                        <fieldset className="form-group">
							<label className="bmd-label-static"><b>Address</b></label>
							<input type="text" name='address' className="form-control" ref="address" />                                  
						</fieldset>
						<button type='submit' className='btn btn-primary' onClick={this.handleSubmit.bind(this)}>Add User</button>
					</form>
            </div>
		);
	}
}
export default AddUser;

