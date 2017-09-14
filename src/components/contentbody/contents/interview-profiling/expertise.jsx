import React from 'react';
import './expertise.css';
/**
 * Redux Imports
 *
 */
import {connect} from 'react-redux';
import {fetchExpertises} from '../../../../redux/actions/rest_service_actions/fetch_expertises';

class Expertise extends React.Component {

	componentDidMount() {
		this.props.fetchExpertises();
	}

	render() {
		let optionsToRender = [];
		if (this.props.expertises.items.content) {
			this.props.expertises.items.content.map((expertise) =>  {
				optionsToRender.push(
					<option value={expertise.name} key={expertise.id}>{expertise.name}</option>
				);
			});
		}

		return (
			<select>
				{optionsToRender}
			</select>
		);
	}
}

const mapStateToProps = (state) => ({
	expertises : state.expertises
});

export default connect (mapStateToProps, {fetchExpertises})(Expertise);
