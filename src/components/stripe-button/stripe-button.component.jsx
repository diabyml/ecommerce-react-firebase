import React from "react";
import "./stripe-button.styles.scss";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButn = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51ITjFOC30inLvklaQLZBdGKG9RqJNqgq84otuPR2VCvvDY0PCaaVegLWiq2sHhniLDVoafao2mSuWibzIYuoXOYT00x6A9jjbQ";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successfull !");
  };
  return (
    <StripeCheckout
      name="Saxa"
      label="Pay Now"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButn;
