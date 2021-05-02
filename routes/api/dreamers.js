const express = require("express");
const router = express.Router();
const dreamersCtrl = require("../../controllers/api/dreamers");

router.get("/", dreamersCtrl.index);
router.post("/", dreamersCtrl.create);
router.get("/:id", dreamersCtrl.show);
router.put("/:id", dreamersCtrl.update);
router.delete('/:id', dreamersCtrl.delete);

module.exports = router;
