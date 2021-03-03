import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import "./main.css";
import AvailablePeople from "../AvailablePeople";
import SelectedPeople from "../SelectedPeople";

import {
	fetchPeople,
	togglePersonSelection,
	removePerson,
} from "../../Redux/actions/main";

export const Main = ({ mappedList, ...rest }) => {
	useEffect(() => {
		rest.fetchPeople();
	}, []);

	return (
		<Fragment>
			<div className="container">
				<div className="main-container d-flex justify-content-between">
					<AvailablePeople
						mappedList={mappedList}
						togglePersonSelection={rest.togglePersonSelection}
					/>
					<SelectedPeople
						mappedList={mappedList}
						removePerson={rest.removePerson}
					/>
				</div>
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		mappedList: state.main.mappedList,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchPeople: (...props) => dispatch(fetchPeople(...props)),
		togglePersonSelection: (...props) =>
			dispatch(togglePersonSelection(...props)),
		removePerson: (...props) => dispatch(removePerson(...props)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
