import { HoneypotService } from "@services/HoneypotService";
import { SearchHoneypotUseCase } from "./SearchHoneypotUseCase";

describe("SearchHoneypotUseCase", () => {
  it("should be ok", () => {
    const service = new HoneypotService();
    const sut = new SearchHoneypotUseCase(service);

    expect(sut).toBeDefined();
    expect(service).toBeDefined();
  });
});
