const Razorpay = require('razorpay');

apiKey="rzp_test_K2wIm4rYKhN8EK"
apiSecret="AZdkN5KtUZm7mCnCsUyRHv90"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;