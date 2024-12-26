import React, { useEffect, useState } from "react";
import axios from "axios";
import "../src/css/dep.css";
import "../src/css/upi.css";
import "../src/Load";
import Load from "../src/Load";
import { loadStripe } from "@stripe/stripe-js";
function Dep() {
  const [amount, setamount] = useState();
  const [upi, setupi] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setmessage] = useState();
  const [stripePromise, setStripePromise] = useState(null);
  useEffect(() => {
    const loadStripePromise = loadStripe(
      "pk_test_51OXnenSC6UDJ5EILprhrs88tyup0P7XW3uwL9YzCWnCkftJLjA8ZYoHqa5UjvK5WBiFQOe5or1UwwVtAPn75rP8p00RVLGCHcH"
    );
    setStripePromise(loadStripePromise);
  }, []);
  const upipayment = async () => {
    setLoading(true);
    try {
      const stripe = await stripePromise;
      const un = sessionStorage.getItem("un");
      const response = await axios.post(
        "https://gaminghubsever.onrender.com/payment",
        {
          amount: amount,
          username: un,
        }
      );

      const sessionId = response.data.sessionId;
      if (!sessionId) {
        setLoading(false);
        setmessage("Session ID not received");
        return;
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });

      if (error) {
        setmessage("Payment Failed");
      }
    } catch (error) {
      setLoading(false);
      setmessage(error.message);
    }
  };
  const twenty = () => {
    setupi(true);
    setamount(20);
  };
  const fifty = () => {
    setupi(true);
    setamount(50);
  };
  const hundred = () => {
    setupi(true);
    setamount(100);
  };
  const fivehundred = () => {
    setupi(true);
    setamount(500);
  };
  const thousand = () => {
    setupi(true);
    setamount(1000);
  };
  const twothousand = () => {
    setupi(true);
    setamount(2000);
  };
  const uclose = () => {
    setupi(false);
  };
  return upi ? (
    <div className="upi">
      {loading ? (
        <Load />
      ) : (
        <div className="iupi">
          <div id="upia">
            AMOUNT : <span>{amount}</span>
          </div>
          <div className="uss" id="upit">
            ARE YOU SURE TO DEPOSIT ?
          </div>
          <div>
            <button
              type="submit"
              className="uss"
              id="upisubmit"
              onClick={upipayment}
              disabled={loading}
            >
              YES
            </button>
            <button className="uss" id="upiclose" onClick={uclose}>
              NO
            </button>
          </div>
          <div id="upis" className="uss">
            {message}
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="dmain">
      <div className="dbody">
        <div className="dh">DEPOSIT</div>
        <br />
        <button onClick={twenty} className="mdb">
          20
        </button>

        <button className="db" onClick={fifty}>
          50
        </button>
        <button className="db" onClick={hundred}>
          100
        </button>
        <br />
        <button onClick={fivehundred} className="mdb">
          500
        </button>
        <button className="db" onClick={thousand}>
          1000
        </button>
        <button className="db" onClick={twothousand}>
          2000
        </button>
      </div>
    </div>
  );
}
export default Dep;
