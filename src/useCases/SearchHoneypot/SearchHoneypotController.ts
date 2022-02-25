import { Request, Response } from "express";

import { BadRequestException } from "@config/exceptions";

import { SearchHoneypotUseCase } from "./SearchHoneypotUseCase";

export class SearchHoneypotController {
  constructor(private searchHoneypotUseCase: SearchHoneypotUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { token, chain }: any = req.query;

      if (!token) {
        throw new BadRequestException("Token param is required");
      }
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
