import React from 'react';
import Product from '../Components/Product';
import * as dataService from '../Core/dataService';
import { environment } from '../Config/env.dev';
import { connect } from 'react-redux';
import { addToCart } from '../_store/actions/cartActions';

class ProductList extends React.Component {
    state = {
        ProductsList: []
    };
    componentDidMount() {
        this.getProductsData();
    }
    getProductsData() {
        dataService.get(environment.PRODUCTS_API)
            .then(
                res => {
                    console.log('response', res);
                    this.setState({ ProductsList: res.data });
                }
            )
            .catch(
                err => {
                    console.log('error', err);
                }
            );
    }
    localAddToCart(item) {
        console.log('button clicked', this.props);
        this.props.addItem(item);
        this.props.history.push('/cart');
    }
    render() {
        const { ProductsList } = this.state;
        return (
            <div className="row">
                {
                    ProductsList.map(
                        (prod) => <Product key={prod.productId} pData={prod} curCode={this.props.curCode}
                            btnClick={() => this.localAddToCart(prod)} />
                    )
                }
            </div>
        );
    }
}
//connect(how to connect)(what to connect)
const mapStateToProps = (state) => ({
    curCode: state.currency
})

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addToCart(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);