const mongoose = require("mongoose");

const DBconnection = async () => {
  const conn = await mongoose
    .connect(process.env.MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    })
    .catch((err) => {
      console.log(`Check your code, you've written nonsense.😠`.red, err);
    });
  // : ${conn.connection.host}
  console.log(`Way to go! 👍🏽: `.black.bgYellow);
};

module.exports = DBconnection;
