import express from "express";

import {
  getBranches,
  createBranch,
  updateBranch,
  deleteBranch,
} from "../../controllers/branchControllers.js";
const router = express.Router();

router.get("/", getBranches);
router.post("/", createBranch);
router.patch("/:id", updateBranch);
router.delete("/:id", deleteBranch);
export default router;
