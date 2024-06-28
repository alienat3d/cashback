// import NiceSelect from "nice-select2";

export const selectCategoriesFunc = () => {
	const selects = document.querySelectorAll('select');
	const cards = document.querySelectorAll('.cashback__card');
	const changeBtn = document.querySelector('#btn');
	const categoryOptions = selects[1].querySelectorAll('option');

	let categories = [];

	const options = {
		placeholder: 'select categories',
		selectedtext: 'selected'
	}

	categoryOptions.forEach(option => {
		categories.push(option.textContent);
	});
	// Styling selects with Nice Select 2 lib
	selects.forEach(select => {
		NiceSelect.bind(select, options);
		select.addEventListener('select', (evt) => {
			console.log(evt.target.value);
		})
	});
	changeBtn.addEventListener('click', () => {
		const bankIndex = selects[0].options.selectedIndex;
		const categoryIndex = selects[1].options.selectedIndex;
		// console.log(bankIndex);
		// console.log(categoryIndex);
		console.dir(selects[1]);
		
		// const selectedOptions = categoryOptions.filter(option => option.selected === true)});
		// console.log(selectedOptions);
}