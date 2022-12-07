const API_LINK = process.env.API_URL;
const Base_URL = process.env.NODE_ENV=='development' ? 'http://127.0.0.1:3000' : 'https://thehandover.com';
const Stripe_Keys = {
    'production': {
        Secret_Key : process.env.STRIPE_LIVE_SECRET,
        Publishable_Key : process.env.STRIPE_LIVE_PUBLISHABLE_KEY
    },
    'development': {
        Secret_Key : process.env.STRIPE_TEST_SECRET,
        Publishable_Key : process.env.STRIPE_TEST_PUBLISHABLE_KEY
    },
    'test': {
        Secret_Key : process.env.STRIPE_TEST_SECRET,
        Publishable_Key : process.env.STRIPE_TEST_PUBLISHABLE_KEY
    },
}

// reusable constants

const currency_symbol = 'AED'

export { API_LINK, Base_URL, Stripe_Keys, currency_symbol }