import React from 'react';
import Product from '../Components/Product';
import * as dataService from '../Core/dataService';
import { environment } from '../Config/env.dev';

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
    render() {
        const { ProductsList } = this.state;
        return (
            <div>
                {
                    ProductsList.map(
                        (prod) => <Product key={prod.productId} pData={prod} curCode={this.props.curCode} />
                    )
                }
            </div>
        );
    }
}

export default ProductList;