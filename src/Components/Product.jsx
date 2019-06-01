import React from 'react';
import Card from './Card';
import ErrorBoundary from './ErrorBoundary';

class Product extends React.Component {
    CheckStock() {
        if (this.props.pData.productStock) {
            return (
                <button>Add To Cart</button>
            );
        }
        return (
            <p>Out Of Stock</p>
        );
    }
    render() {
        const { pData, curCode } = this.props;
        return (
            <ErrorBoundary>
                <Card>
                    <img src={pData.productImage} />
                    <h4>{pData.productName}</h4>
                    <h5>{curCode} {pData.productPrice}</h5>
                    {this.CheckStock()}
                </Card>
            </ErrorBoundary>
        );
    }
}

export default Product;