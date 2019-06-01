import React from 'react';
import ShowErros from './ShowErrors';

class Checkout extends React.Component {
    state = { name: '' }
    emailRef = null;
    nameValues = {
        required: true, minlength: { length: 5 }
    }
    submitData(e) {
        e.preventDefault();
        console.log('form submitted', this.state, this.emailRef.value);
    }
    render() {
        return (
            <form onSubmit={(e) => this.submitData(e)}>
                <label>Name</label>
                <input
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.currentTarget.value })}
                    type="text" /> {/* Controlled */}
                <ShowErros value={this.state.name} validators={this.nameValues} />
                <label>Email</label>
                <input type="text" ref={(r) => this.emailRef = r} /> {/* Un Controlled */}
                <button>Submit</button>
            </form>
        );
    }
}

export default Checkout;