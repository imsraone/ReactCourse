import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Demo from './demo';
import ProductList from './Containers/ProductList';
import CheckOut from './Components/Checkout';
import ErrorPage from './Components/ErrorPage';
import Cart from './Containers/Cart';

class AppRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Demo} exact />
                <Route path="/products" component={ProductList} />
                <Route path="/checkout/:orderId" component={CheckOut} />
                <Route path="/cart" component={Cart} />
                <Route component={ErrorPage} />
            </Switch>
        );
    }
}

export default AppRouter;