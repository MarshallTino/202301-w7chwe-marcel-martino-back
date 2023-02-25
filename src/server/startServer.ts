import app from "./index.js";
import createDebug from "debug";

const debug = createDebug("users:server");

const startServer = (port: number) => {
  debug(`Server started at http://localhost:${port}`);

  app.listen(port);
};

export default startServer;
