import axios, { AxiosInstance, AxiosError } from "axios";
import { HONEYPOT_URL } from "@config/variables";
import { UnexpectedException } from "@config/exceptions";

interface HoneypotData {
  IsHoneypot: boolean;
  Error: unknown;
  MaxTxAmount: number;
  MaxTxAmountBNB: number;
  BuyTax: number;
  SellTax: number;
  BuyGas: number;
  SellGas: number;
}

export class HoneypotService {
  private api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: HONEYPOT_URL,
    });
  }

  async isHoneypot(
    token: string,
    chain: string = "bsc2"
  ): Promise<HoneypotData> {
    try {
      const response = await this.api.get(
        `/IsHoneypot?chain=${chain}&token=${token}`
      );
      return response.data;
    } catch (err) {
      throw new UnexpectedException("Unexpected error");
    }
  }
}
