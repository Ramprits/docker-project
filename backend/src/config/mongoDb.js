const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(`mongodb://api_mongo:27017/ecommerceApp`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`connected to mongo database`.bgGreen);
  } catch (error) {
    console.error("ERROR: ", `${error.message}`.bgRed);
  }
};
