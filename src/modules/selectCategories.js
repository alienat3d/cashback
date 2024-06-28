// import NiceSelect from "nice-select2";

export const selectCategoriesFunc = () => {
	const selects = document.querySelectorAll("select");

	selects.forEach(select => NiceSelect.bind(select));
}