import React, { useState } from 'react';

function Cartitem(props) {
    const [qty, changeQty] = useState(props.item.qty);
    return (
        // <div className="row">
        //     <div className="col-md-3">
        //         <img className="img-thumbnail cart-img" src={props.item.productImage} />
        //     </div>
        //     <div className="col-md-3 text-right">
        //         <h4>{props.item.productName}</h4>
        //     </div>
        //     <div className="col-md-3 text-right">
        //         <h5>{curCode} {props.item.productPrice}</h5>
        //     </div>
        //     <div className="col-md-3 text-right">
        //         <button onClick={() => this.props.btnClick()} className="btn btn-danger">Remove</button>
        //     </div>
        // </div>
        <tr>
            <td>
                <img height="100" width="100" className="img-thumbnail cart-img" src={props.item.productImage} />
            </td>
            <td>{props.item.productName}</td>
            <td>{props.code} {props.item.productPrice}</td>
            <td>
                <input className="form-control" type="number" value={qty} onChange={(e) => {
                    changeQty(e.currentTarget.value);
                    props.notifyChange(e.currentTarget.valueAsNumber);
                }} />
            </td>
            <td>{props.code}{props.item.productPrice * props.item.qty}</td>
            <td>
                <div>
                    <button onClick={() => props.btnClick()} className="btn btn-danger">Remove</button>
                </div>
            </td>
        </tr>
    );
}

export default Cartitem;