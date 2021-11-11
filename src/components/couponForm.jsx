import "./couponForm.css";
import { useState } from "react";
import DataService from "../services/dataService";

const CouponForm = () => {

    const handleSave = () => {
        console.log("Saving discount")
    }
    return (
        <div className="coupon-form">
            <h1>Manage your coupons</h1>
            <div className="my-control">
                <label htmlFor="">Code</label>
                <input type="text" />
            </div>
            <div className="my-control">
                <label htmlFor="">Discount</label>
                <input type="number" />
            </div>
            <div className="my-control">
                <button onClick={handleSave} className="btn btn-dark">Register Coupon</button>
            </div>
        </div>
    )
}

export default CouponForm;