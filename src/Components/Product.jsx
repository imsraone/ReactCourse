import React from 'react';

class Product extends React.Component {
    render() {
        const ProductData = {
            productid: 10, productName: "Product 1", productPrice: 100, productStock: true, productImage: ''
        };
        return (
            <div>
                <img src={ProductData.productImage} />
                <h4>{ProductData.productName}</h4>
                <h5>{ProductData.productPrice}</h5>
                <button>Add To Cart</button>
            </div>
        );
    }
}

export default Product;