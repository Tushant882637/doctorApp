const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { getAllUserController } = require("../controllers/adminController");
const {
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminController");
//GEt Method || Users
router.get("/getAllUsers", authMiddleware, getAllUserController);
//GEt Method || Dpctors
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);
//POSt Account || STatus
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

module.exports = router;
