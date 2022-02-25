import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";
import { HONEYPOT_URL } from "@config/variables";
import { UnexpectedException } from "@config/exceptions";
export class HoneypotService {
  private api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: HONEYPOT_URL,
    });
  }

  async isHoneypot(
    token: string,
    chain: string = "bsc2" //default chain
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
