import React from 'react';
import ShowProduct from '../Components/CartItem';
import Card from '../Components/Card';
import { removeFromCart } from '../_store/actions/cartActions';
import { connect } from 'react-redux';

class Cart extends React.Component {

    localRemoveFromCart(productId) {
        this.props.removeItem(productId);
    }
    render() {
        const { CartList } = this.props;
        let TotalAmount = 0;
        CartList.forEach(element => {
            TotalAmount += element.productPrice;
        });
        return (
            <Card size={12}>
                {
                    CartList.map(
                        (prod) => <ShowProduct key={prod.productId} pData={prod} curCode={this.props.curCode}
                            btnClick={() => this.localRemoveFromCart(prod.productId)} />
                    )
                }

                <div className="row">
                    <div className="col-md-6">
                        <div className="text-right">
                            <h5>Total Amount : </h5>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-right">
                            <h5>{TotalAmount} </h5>
                        </div>
                    </div>
                </div>
            </Card >
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeItem: (productId) => dispatch(removeFromCart(productId))
});
const mapStateToProps = state => ({
    CartList: state.cart
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart);