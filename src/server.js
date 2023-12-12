import { app } from "./app.js";

import { config } from "./database/index.js";

app.listen(process.env.PORT || 3000);
