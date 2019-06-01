import React from 'react';

class Currency extends React.Component {

    render() {
        const currencies = ['INR', 'USD', 'CAD', 'GBP']
        return (
            <select onChange={(e) => this.props.changeCurrency(e.currentTarget.value)}>
                {currencies.map(
                    code => <option key={code}>{code}</option>
                )}
            </select>
        );
    }
}

export default Currency;