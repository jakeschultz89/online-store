import "./cart.css";

const Cart = () => {

    return (
        <div className="cart-page">
            
            <div className="header">
                <h3>Reader to order?</h3>
            </div>

            <div className="row">
                <div className="col-9">
                    <h4>Your items:</h4>
                </div>

                <div className="col-3 col-total">
                    <h4>Your total:</h4>
                    <h3>$9,999.00</h3>

                    <hr />

                    <div className="coupon-form">
                        <input type="text" placeholder="have a coupon?" />
                        <button className="btn btn-sm btn-dark">Apply</button>
                    </div>

                    <hr />
                    
                    <button className="btn btn-section btn-primary">Proceed to payment</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;