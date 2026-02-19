const express = require("express");
const router = express.Router();

const myController = require("./../controllers/myController")

// index

router.get("/", myController.index);

// show

// router.get("/:id", myController.show);

// // store 

// router.post("/", myController.store);

// // update

// router.put("/:id", myController.update);

// // modify

// router.patch("/:id", myController.modify);

// // destroy 

// router.delete("/:id", myController.destroy);


module.exports = router;

