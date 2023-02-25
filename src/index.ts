import "./loadEnv.js";
import startServer from "./server/startServer.js";
import "./server/index.js";
import { startDatabase } from "./database/connectDatabase.js";

const port = process.env.PORT ?? 4000;

const url = process.env.DATABASE_URL!;
await startDatabase(url);
startServer(+port);
