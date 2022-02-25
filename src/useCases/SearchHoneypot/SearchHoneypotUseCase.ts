import { NotFoundException } from "@config/exceptions";
import { HoneypotService } from "@services/HoneypotService";

import { ISearchHoneypotDTO } from "./SearchHoneypotDTO";

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

export class SearchHoneypotUseCase {
  constructor(private honeypotService: HoneypotService) {}

  async execute(data: ISearchHoneypotDTO): Promise<HoneypotData> {
    const response = await this.honeypotService.isHoneypot(
      data.token,
      data.chain
    );

    if (response.status !== 200 || response.data["Error"]) {
      throw new NotFoundException("Honeypot not found");
    }
    return response.data;
  }
}
