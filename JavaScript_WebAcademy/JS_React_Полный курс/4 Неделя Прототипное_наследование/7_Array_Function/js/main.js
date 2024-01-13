import products from "./products.js";

/* forEach */
// products.forEach(function (item, index) {
//     console.log(item, index);
//     // item.price += 100;
// })

// products.forEach(function (item) {
//   const html = `<section>
// 			<h3>${item.title}</h3>
// 			<p><strong>${item.price}</strong></p>
// 			<img width="200" src="./img/products/${item.img}" alt="${item.title}" />
// 		</section>
// 		<hr />`;

//   document.body.insertAdjacentHTML("beforeend", html);
// });

/* Find */
// const product40 = products.find(function (item, index) {
// 	return item.price === 40;
// });
// console.log(product40);
// const product190 = products.find((item) => item.price === 190);
// console.log(product190);

// /* FindIndex */
// const product = products.findIndex(function (item) {
// 	if (item.id === 40) {
// 		return true;
// 	}
// });

// console.log(product);
// console.log(products[3]);

// /* filter */
// const moreThan50 = products.filter(function (item) {
// 	if (item.price > 50) {
// 		return true;
// 	}
// });
// console.log(moreThan50);

// const moreThan50Arr = products.filter((item) => item.price > 50);
// console.log(moreThan50Arr);

// /* map */
// const productsWithNewPrice = products.map(function (item) {
// 	const newItem = {
// 		id: item.id,
// 		img: item.img,
// 		title: item.title,
// 		price: item.price * 1.5,
// 	};
// 	return newItem;
// });

// console.log(products);
// console.log(productsWithNewPrice);

// const productsHTML = products.map((item) => {
// 	const htmlProduct = `<section>
//                 <h3>${item.title}</h3>
//                 <p><strong>${item.price}</strong></p>
//                 <img width="200" src="./img/products/${item.img}" alt="${item.title}" />
// 				<hr>
// 			</section>`;
// 	return htmlProduct;
// });

// document.body.insertAdjacentHTML('beforeend', productsHTML.join(''));

// /* reduce */
// const totalCost = products.reduce(function (prev, item) {
// 	return prev + item.price;
// }, 0);

// console.log(`Общая стоимость товаров: ${totalCost}`);
