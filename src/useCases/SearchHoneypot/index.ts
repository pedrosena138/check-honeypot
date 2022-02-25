import { HoneypotService } from "@services/HoneypotService";
import { SearchHoneypotController } from "./SearchHoneypotController";
import { SearchHoneypotUseCase } from "./SearchHoneypotUseCase";

const honeypotService = new HoneypotService();
const searchHoneypotUseCase = new SearchHoneypotUseCase(honeypotService);
const searchHoneypotController = new SearchHoneypotController(
  searchHoneypotUseCase
);

export { searchHoneypotUseCase, searchHoneypotController };
