import { SET_MAPPED_DATA } from "./actionTypes";

export const fetchPeople = () => {
	const { PEOPLE, COUNTRIES } = require("../../data");
	const LIST = {};
	let id = 1;
	COUNTRIES.forEach((country) => {
		let peopleInCountry = [];
		LIST[country] = peopleInCountry;
		PEOPLE.forEach((person) => {
			if (person.country === country) {
				let personObj = {
					id: id,
					name: person.name,
					selected: false,
				};
				LIST[country].push(personObj);
				id++;
			}
		});
	});
	return (dispatch) => {
		dispatch(setMappedData(LIST));
	};
};

const setMappedData = (mappedList) => {
	return {
		type: SET_MAPPED_DATA,
		mappedList,
	};
};

const updateMappedList = (mappedList, country, id, operation) => {
	let updatedMappedList = Object.assign({}, mappedList);
	updatedMappedList[country].forEach((person) => {
		if (person.id === id) {
			person.selected = operation === "remove" ? false : !person.selected;
		}
	});
	return (dispatch) => {
		dispatch(setMappedData(updatedMappedList));
	};
};

export const togglePersonSelection = (mappedList, country, id) => {
	return (dispatch) => {
		dispatch(updateMappedList(mappedList, country, id, "toggle"));
	};
};

export const removePerson = (mappedList, country, id) => {
	return (dispatch) => {
		dispatch(updateMappedList(mappedList, country, id, "remove"));
	};
};
