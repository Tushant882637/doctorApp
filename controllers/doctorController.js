const appointmentModel = require("../models/appointmentModel");
const doctorModel = require("../models/doctorModel");
const userModel = require("../models/userModels");
const getDoctorInfoController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: "doctor data fetch success",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fetching Doctor Details",
    });
  }
};
const updateProfileController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    res.status(200).send({
      message: "updated doctorProfile successfully",
      success: "true",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "updated doctor error",
      success: "false",
      error,
    });
  }
};
const getDoctorByIdController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ _id: req.body.doctorId });
    res.status(200).send({
      message: "Doctor info data successfully",
      success: "true",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "error in single doc info",
      success: "false",
      error,
    });
  }
};
const doctorAppointmentsController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ userId: req.body.userId });
    const appointment = await appointmentModel.find({
      doctorId: doctor._id,
    });
    res.status(200).send({
      message: "Doctor appointement fetch  successfully",
      success: "true",
      data: appointment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in Doc Appointments",
      success: "false",
      error,
    });
  }
};
const updateStatusController = async (req, res) => {
  try {
    const { appointmentId, status } = req.body;
    const appointment = await appointmentModel.findByIdAndUpdate(
      appointmentId,
      { status }
    );
    const user = await userModel.findOne({ _id: appointment.userId });
    const notification = user.notification;
    notification.push({
      type: "status-updated",
      message: `Your Appointment has been updated ${status}`,
      onClickPath: "/doctor-appointments",
    });
    await user.save();
    res.status(200).send({
      message: "Doctor appointement status fetch  successfully",
      success: "true",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in Status Appointments",
      success: "false",
      error,
    });
  }
};
module.exports = {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
};
