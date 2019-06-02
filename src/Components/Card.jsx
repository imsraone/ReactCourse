import React from 'react';

function Card(props) {
    return (
        <div style={{ border: "1px solid #eee", padding: "10px" }}
            className={`col-md-${props.size} text-center shadow-sm my-4 p-2`}>
            {props.children}
        </div>
    );
}

export default Card;