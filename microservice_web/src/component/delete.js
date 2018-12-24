import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Delete extends Component {
		
	handleSubmit= (event) => {
        const editAPI = "http://104.215.189.208:8001/delete/"
		const name = this.props.match.params.name;
        fetch(editAPI+name, {
		   method: "POST",
		   mode: "cors",
           headers : {
             Accept: "application/json",
             "Content-Type": "application/json"
           },
           
        }).then(function (response) {
            return response.json(); 
        }).then(function (responseData) {
            console.log(responseData);
            window.location.href = '/';
		});
		window.location.href = '/';
	}

  
	render() {
		return (
			<div className='col-10 container formEditKornea'>                    
                    <h1>Delete user{this.props.match.params.name}</h1>
					<button type='submit' className='btn btn-primary' onClick={this.handleSubmit.bind(this)}>Delete user</button>
					
            </div>
		);
	}
}

Delete.propTypes = {
	match : PropTypes.shape({
		params : PropTypes.shape({
			name : PropTypes.string
		})
	})
};

export default Delete;

