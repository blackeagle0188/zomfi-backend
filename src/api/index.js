const express = require('express');
const router = express.Router();
const PetCtrl = require("../ctrls/PetCtrl");
const LandCtrl = require("../ctrls/LandCtrl");

router.post('/pets', PetCtrl.restoreNfts);
router.post("/pets/fetch-nfts", PetCtrl.fetchByTokenIds);
router.get("/pets/:id", PetCtrl.fetchByTokenId);

router.post("/lands", LandCtrl.restoreNfts);
router.post("/lands/fetch-nfts", LandCtrl.fetchByTokenIds);
router.get("/lands/:id", LandCtrl.fetchByTokenId);

module.exports = router;
