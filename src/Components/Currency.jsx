import React from 'react';
import { connect } from 'react-redux';
import { updateCurrency } from '../_store/actions/currencyActions';

class Currency extends React.Component {

    render() {
        const currencies = ['INR', 'USD', 'CAD', 'GBP']
        return (
            <select className="form-control" onChange={(e) => this.props.changeCurrency(e.currentTarget.value)}>
                {currencies.map(
                    code => <option key={code}>{code}</option>
                )}
            </select>
        );
    }
}

//connect(how to connect)(what to connect)
const mapDispatchProps = dispatch => ({
    changeCurrency: (c) => dispatch(updateCurrency(c))
});

export default connect(null, mapDispatchProps)(Currency);