export const selectCategoriesFunc = () => {
	let selects = document.querySelectorAll('select');
	const cards = document.querySelectorAll('.cashback__card');
	const changeBtn = document.querySelector('#btn');
	const categoryOptions = selects[1].querySelectorAll('option');

	const categoryOptionsArr = [...categoryOptions];

	let selectedOptions = [];

	const filterOptions = () => {
		selectedOptions = categoryOptionsArr.filter(option => {
			if (option.selected) return option;
		});
	}

	selects[1].addEventListener('change', filterOptions);

	const options = {
		placeholder: 'Select categories',
		selectedtext: 'Selected'
	}

	// Styling selects with Nice Select 2 lib
	selects.forEach(select => {
		NiceSelect.bind(select, options);
		select.addEventListener('select', (evt) => {
			console.log(evt.target.value);
		})
	});

	changeBtn.addEventListener('click', () => {
		const bankIndex = selects[0].options.selectedIndex;
		
		let newCategoriesArr = [];

		selectedOptions.forEach(category => {
			const newCategory = document.createElement('div');
			newCategory.textContent = category.textContent;
			newCategory.classList.add('cashback__categories');
			newCategoriesArr.push(newCategory);
		});

		cards.forEach((card, idx) => {
			if (idx === bankIndex) {
				const categoriesInner = card.querySelector('.cashback__card-categories');
				categoriesInner.innerHTML = '';
				newCategoriesArr.forEach(category => categoriesInner.insertAdjacentElement('beforeend', category));
			}
		});
	});
}