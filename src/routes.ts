import { searchHoneypotController } from "@useCases/SearchHoneypot";
import { Router } from "express";

const router = Router();

router.get("/honeypot", (req, res) =>
  searchHoneypotController.handle(req, res)
);

export default router;
