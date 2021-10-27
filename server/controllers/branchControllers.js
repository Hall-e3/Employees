import express from "express";
import Branch from "../models/Branch/Branch.js";
import mongoose from "mongoose";
export const getBranches = async (req, res) => {
  try {
    const branches = await Branch.find();
    res.status(200).json(branches);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBranch = async (req, res) => {
  const branch = req.body;
  const newBranch = new Branch(branch);
  try {
    await newBranch.save();
    res.status(201).json(newBranch);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateBranch = async (req, res) => {
  const { id: _id } = req.params;
  const branch = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`Branch with ${_id} does not exist`);
  const updatedBranch = await Branch.findByIdAndUpdate(_id, branch, {
    new: true,
  });

  res.json(updatedBranch);
};

export const deleteBranch = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`Branch with ${id} does not exist`);
  await Branch.findByIdAndRemove(id);

  res.json({ message: "Branch deleted successfully" });
};
