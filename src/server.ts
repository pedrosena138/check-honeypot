import { PORT } from "@config/variables";

import app from "./app";

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
