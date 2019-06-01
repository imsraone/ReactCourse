import React from 'react';

class Demo extends React.Component {
    ShowAlert() {
        alert('Hello');
    }
    render() {
        const name = "Mike"
        return (
            <div>
                <p> Hello from {name}</p>
                <p>{5 + 10}</p>
                <button onClick={this.ShowAlert}>Click Me</button>
            </div>
        );
    }
}

export default Demo;