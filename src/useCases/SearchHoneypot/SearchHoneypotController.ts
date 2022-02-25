import { Request, Response } from "express";

import { SearchHoneypotUseCase } from "./SearchHoneypotUseCase";

export class SearchHoneypotController {
  constructor(private searchHoneypotUseCase: SearchHoneypotUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { token, chain }: any = req.query;
      const honeypot = await this.searchHoneypotUseCase.execute({
        token,
        chain,
      });
      return res.status(200).json(honeypot);
    } catch (err) {
      console.error(err);
      return res.status(err.status).json({ error: err.message });
    }
  }
}
