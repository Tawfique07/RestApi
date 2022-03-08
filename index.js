/**
 * Title: Rest API
 * Description: A Rest api app
 * Author: Toufiqul Islam
 * Date: 07 March 2022
 *
 */

//External Imports
const express = require("express");

//Router Imports
const dishRouter = require("./routes/dishRouter");
const promoRouter = require("./routes/promoRouter");
const leaderRouter = require("./routes/leaderRouter");

//creating express app
const app = express();

//body Parser setup
app.use(express.json());

//Setup Routers
app.use("/dishes", dishRouter);
app.use("/promotions", promoRouter);
app.use("/leaders", leaderRouter);

//Listening
app.listen(3000, () => {
  console.log("Listening on port 3000....");
});
