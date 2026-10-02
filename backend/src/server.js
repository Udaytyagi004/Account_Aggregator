require("dotenv").config();

const app = require("./app.js");

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Server is Up and Runnig on port : ${PORT}`);
});
