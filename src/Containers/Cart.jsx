import React from 'react';
import CartItem from '../Components/CartItem';
import Card from '../Components/Card';
import { removeFromCart, updateCart } from '../_store/actions/cartActions';
import { connect } from 'react-redux';

class Cart extends React.Component {

    state = { items: [] };

    updateState(qty, i) {
        let { items } = this.state;
        let index = items.findIndex(x => x.productId === i.productId);
        if (index >= 0) {
            items[index].qty = qty;
        } else {
            items.push({ ...i, qty });
        }
        this.setState(items);
    }

    render() {
        const { CartList } = this.props;
        if (CartList.length <= 0) {
            return <div className="alert alert-info"> Your cart is empty</div>
        }

        let TotalAmount = 0;
        CartList.forEach(element => {
            TotalAmount += element.productPrice;
        });

        return (
            // <Card size={12}>
            //     {
            //         CartList.map(
            //             (prod) => <CartItem key={prod.productId} pData={prod} curCode={this.props.curCode}
            //                 btnClick={() => this.localRemoveFromCart(prod.productId)} />
            //         )
            //     }

            //     <div className="row">
            //         <div className="col-md-6">
            //             <div className="text-right">
            //                 <h5>Total Amount : </h5>
            //             </div>
            //         </div>
            //         <div className="col-md-3">
            //             <div className="text-right">
            //                 <h5>{TotalAmount} </h5>
            //             </div>
            //         </div>
            //     </div>
            // </Card >
            <div>
                <table className="table table-bordered">
                    <tbody>
                        {
                            CartList.map(
                                item => <CartItem item={item}
                                    code={this.props.code}
                                    key={item.productId}
                                    notifyChange={(v) => this.updateState(v, item)}
                                    btnClick={() => this.props.removeItem(item.productId)} />
                            )
                        }
                    </tbody>
                </table>
                <button onClick={() => this.props.localUpdateCart(this.state.items)}>
                    Update Cart
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeItem: (productId) => dispatch(removeFromCart(productId)),
    localUpdateCart: (items) => dispatch(updateCart(items))
});
const mapStateToProps = state => ({
    CartList: state.cart,
    code: state.currency
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart);