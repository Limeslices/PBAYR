// This is your test secret API key.
const stripe = require("stripe")('sk_test_51LH8qnEuupSx6N55OawFDZ2jx1R4qzX0kQ9zDdmwGwG8W9VLpVphdxpnJJ7pv9mpwCoYFOHwb9X8stYhPlRzXsuE0060gC23Pq');

export default async function handler(req, res) {
    const { price } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: price,
        currency: "usd",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
};