/**
 * Title: Promo Router
 * Description: Router for handling promo
 * Author: Toufiqul Islam
 * Date: 07 March 2022
 *
 */

//External imports
const express = require("express");

//Initializing express Router Object
const promoRouter = express.Router();

//Get Router
promoRouter.get("/", (req, res) => {
  res.send(`Will Send All the promotions`);
});

promoRouter.get("/:promoId", (req, res) => {
  res.send(`will send promotion of id : ${req.params.promoId}`);
});

//post Router
promoRouter.post("/", (req, res) => {
  res.send(
    `This will add promotion: ${req.body.name} with details : ${req.body.description}`
  );
});

promoRouter.post("/:promoId", (req, res) => {
  res
    .status(403)
    .send(`Post request not supported on /promotions/${req.params.promoId}`);
});

//put Router
promoRouter.put("/:promoId", (req, res) => {
  res.write(`Updating the promotion: ${req.params.promoId} \n`);
  res.end(
    `will Update the promotion: ${req.body.name} with details: ${req.body.description}`
  );
});

promoRouter.put("/", (req, res) => {
  res.status(403).send(`put request not supported on /promotions`);
});

//Delete Router
promoRouter.delete("/", (req, res) => {
  res.send(`will delete all promotions`);
});

promoRouter.delete("/:promoId", (req, res) => {
  res.send(`will delete the promotion of Id: ${req.params.promoId}`);
});

//Export Promo Router
module.exports = promoRouter;
