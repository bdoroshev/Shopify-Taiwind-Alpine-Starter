const Functions = {
	changeQuantity(line, quantity){
		fetch('/cart/change.js', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ quantity: quantity, line: line })
		})
		.then(response => response.json())
		.then(data => {
			window.dispatchEvent(new CustomEvent('update-cart', { detail: data }))
		})
		.catch(errror => console.error('Error:', error));
	},
	addToCart(form){
		let formData = new FormData(form);
		fetch('/cart/add.js', {
				method: 'POST',
				body: formData
			})
			.then(response => {
				return response.json();
			})
			.then(response => {
				window.dispatchEvent(new CustomEvent('update-cart'))
				window.dispatchEvent(new CustomEvent('toggle-cart'))
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}
}

window.Functions = Functions