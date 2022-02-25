import { HoneypotService } from "@services/HoneypotService";

import { SearchHoneypotUseCase } from "./SearchHoneypotUseCase";

describe("SearchHoneypotUseCase", () => {
  let honeypotService: HoneypotService;
  let sut: SearchHoneypotUseCase;

  beforeEach(() => {
    honeypotService = new HoneypotService();
    sut = new SearchHoneypotUseCase(honeypotService);
  });

  it("should be defined", () => {
    expect(sut).toBeDefined();
    expect(honeypotService).toBeDefined();
  });
});
