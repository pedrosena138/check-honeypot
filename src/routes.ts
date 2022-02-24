import { HoneypotService } from "@services/HoneypotService";
import { Router, query } from "express";

const router = Router();

router.get("/honeypot", async (req, res) => {
  try {
    const { token, chain }: any = req.query;
    const service = new HoneypotService();
    const data = await service.isHoneypot(token, chain);
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res
      .status(err.status || 500)
      .json({ error: err.message || "Unexpected error" });
  }
});

export default router;
