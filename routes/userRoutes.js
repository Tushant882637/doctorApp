const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDocotrsController,
  bookeAppointmnetController,
  bookAvilablityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//routes
//login || post
router.post("/login", loginController);

//REgister || Post

router.post("/register", registerController);

//Auth || Post

router.post("/getUserData", authMiddleware, authController);
//Apply Doctors
router.post("/apply-doctor", authMiddleware, applyDoctorController);
//Notification  Doctor || Post
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
//Notification  Doctor || Post
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);
//GET ALL DOC
router.get("/getAllDoctors", authMiddleware, getAllDocotrsController);
//BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookeAppointmnetController);
//Booking Avilablity
router.post("/booking-avilablity", authMiddleware, bookAvilablityController);
//Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);
module.exports = router;
