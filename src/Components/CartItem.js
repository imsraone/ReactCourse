import React from 'react';

class Product extends React.Component {

    render() {
        const { pData, curCode } = this.props;
        return (
            <div className="row">
                <div className="col-md-3">
                    <img className="img-thumbnail cart-img" src={pData.productImage} />
                </div>
                <div className="col-md-3 text-right">
                    <h4>{pData.productName}</h4>
                </div>
                <div className="col-md-3 text-right">
                    <h5>{curCode} {pData.productPrice}</h5>
                </div>
                <div className="col-md-3 text-right">
                    <button onClick={() => this.props.btnClick()} className="btn btn-danger">Remove</button>
                </div>
            </div>
        );
    }
}

export default Product;