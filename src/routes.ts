import { Router } from "express";

import { searchHoneypotController } from "@useCases/SearchHoneypot";

const router = Router();

router.get("/honeypot", (req, res) =>
  searchHoneypotController.handle(req, res)
);

export default router;
