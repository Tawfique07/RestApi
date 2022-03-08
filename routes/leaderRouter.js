/**
 * Title: Leader Router
 * Description: Router for handling leader
 * Author: Toufiqul Islam
 * Date: 07 March 2022
 *
 */

//External imports
const express = require("express");

//Initializing express Router Object
const leaderRouter = express.Router();

//Get Router
leaderRouter.get("/", (req, res) => {
  res.send(`will send all leaders`);
});

leaderRouter.get("/:leaderId", (req, res) => {
  res.send(`Will send leader of id: ${req.params.leaderId}`);
});

//post Router
leaderRouter.post("/", (req, res) => {
  res.send(
    `This will add leader: ${req.body.name} with details: ${req.body.description}`
  );
});

leaderRouter.post("/:leaderId", (req, res) => {
  res
    .status(403)
    .send(`Post request not supported on /leaders/${req.params.leaderId}`);
});

//Put Router
leaderRouter.put("/:leaderId", (req, res) => {
  res.write(`Updating the leader: ${req.params.leaderId}`);
  res.end(
    `will update the leader: ${req.body.name} with details: ${req.body.description}`
  );
});

leaderRouter.put("/", (req, res) => {
  res.status(403).send(`put request not supported on /leaders`);
});

//Delete Router
leaderRouter.delete("/", (req, res) => {
  res.send(`will delete all leaders`);
});

leaderRouter.delete("/:leaderId", (req, res) => {
  res.send(`will delete the leader of id: ${req.params.leaderId}`);
});

//Export leaderRouter
module.exports = leaderRouter;
