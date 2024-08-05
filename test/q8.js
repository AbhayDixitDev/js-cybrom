const productCardContainer = document.querySelector('.product-card-container');

const products = [
    {
        id: 1,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
        name: 'Sport Shoes',
        price: '$19.99',
        review: '4.5/5 stars',
        brand: 'Nike'
    },
    {
        id: 2,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
        name: 'Sport Shoes',
        price: '$29.99',
        review: '4.2/5 stars',
        brand: 'Nike'
    },
    {
        id: 3,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
        name: 'Sport Shoes',
        price: '$39.99',
        review: '4.8/5 stars',
        brand: 'Nike'
    }
];

products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.className = 'product-image';
    productCard.appendChild(productImage);

    const productInfo = document.createElement('div');
    productInfo.className = 'product-info';

    const productName = document.createElement('h2');
    productName.className = 'product-name';
    productName.textContent = product.name;
    productInfo.appendChild(productName);

    const productPrice = document.createElement('p');
    productPrice.className = 'product-price';
    productPrice.textContent = product.price;
    productInfo.appendChild(productPrice);

    const productReview = document.createElement('p');
    productReview.className = 'product-review';
    productReview.textContent = product.review;
    productInfo.appendChild(productReview);

    const productBrand = document.createElement('p');
    productBrand.className = 'product-brand';
    productBrand.textContent = product.brand;
    productInfo.appendChild(productBrand);

    productCard.appendChild(productInfo);
    productCardContainer.appendChild(productCard);
});