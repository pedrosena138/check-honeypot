import axios, { AxiosInstance, AxiosResponse } from "axios";

import { UnexpectedException } from "@config/exceptions";
import { HONEYPOT_URL } from "@config/variables";
export class HoneypotService {
  private api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: HONEYPOT_URL,
    });
  }

  async isHoneypot(
    token: string,
    chain = "bsc2" //default chain
  ): Promise<AxiosResponse> {
    try {
      const response = await this.api.get(
        `/IsHoneypot?chain=${chain}&token=${token}`
      );
      return response;
    } catch (err) {
      throw new UnexpectedException("Unexpected error");
    }
  }
}
