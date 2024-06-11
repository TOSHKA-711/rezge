// // PaymentForm.js
// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const PaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [clientSecret, setClientSecret] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     });

//     if (error) {
//       console.error(error);
//     } else {
//       // إرسال طلب لإنشاء نية الدفع
//       const response = await fetch('/create-payment-intent', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ amount: 1000 }), // المبلغ بالسنت
//       });

//       const paymentIntentData = await response.json();

//       // تأكيد الدفع باستخدام clientSecret
//       const confirmCardPayment = await stripe.confirmCardPayment(paymentIntentData.clientSecret, {
//         payment_method: {
//           card: cardElement,
//           billing_details: {
//             name: 'Customer Name',
//           },
//         },
//       });

//       if (confirmCardPayment.error) {
//         console.error(confirmCardPayment.error);
//       } else {
//         console.log('Payment successful!', confirmCardPayment.paymentIntent);
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// };

// export default PaymentForm;
