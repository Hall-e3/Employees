import express from "express";
import mongoose from "mongoose";
import Employee from "../models/Employee/Employee.js";
export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createEmployee = async (req, res) => {
  const employee = req.body;
  const newEmployee = new Employee(employee);
  try {
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateEmployee = async (req, res) => {
  const { id: _id } = req.params;
  const employee = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`Employee with ${_id} does not exist`);
  const updatedEmployee = await Employee.findByIdAndUpdate(_id, employee, {
    new: true,
  });
  console.log('updated')
  res.json(updatedEmployee);
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`Employee with ${id} does not exist`);
  await Employee.findByIdAndRemove(id);

  res.json({ message: "Employee deleted successfully" });
};
