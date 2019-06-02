import React from 'react';
import Card from './Card';
import ErrorBoundary from './ErrorBoundary';

class Product extends React.Component {
    CheckStock() {
        if (this.props.pData.productStock) {
            return (
                <button className="btn btn-sm btn-primary" onClick={() => this.props.btnClick()}>Add To Cart</button>
            );
        }
        return (
            <p className="alert alert-danger">Out Of Stock</p>
        );
    }
    render() {
        const { pData, curCode } = this.props;
        return (
            <ErrorBoundary>
                <Card size={3}>
                    <img className="img-thumbnail" src={pData.productImage} />
                    <h4>{pData.productName}</h4>
                    <h5>{curCode} {pData.productPrice}</h5>
                    {this.CheckStock()}
                </Card>
            </ErrorBoundary>
        );
    }
}

export default Product;