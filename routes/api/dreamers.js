const express = require("express");
const router = express.Router();
const dreamersCtrl = require("../../controllers/api/dreamers");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/", dreamersCtrl.index);
router.post("/", ensureLoggedIn, dreamersCtrl.create);
router.get("/:id", dreamersCtrl.show);
router.put("/:id", ensureLoggedIn, dreamersCtrl.update);
router.delete("/:id", ensureLoggedIn, dreamersCtrl.delete);

module.exports = router;
