import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Stat with get method");
});
export default router;
