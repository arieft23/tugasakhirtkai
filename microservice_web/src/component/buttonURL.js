import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


class ButtonURL extends Component{
	render(){
		return(
			<button type='button' className='btn btn-primary'><Link to={this.props.to}>{this.props.name}</Link></button>
		);
	}
}

export default ButtonURL;

ButtonURL.propTypes = {
	to: PropTypes.string,
	name: PropTypes.string,
};
