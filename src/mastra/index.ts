import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { peakaAgent } from "./agents/peaka-agent";
import { VercelDeployer } from "@mastra/deployer-vercel";
import { LibSQLStore } from "@mastra/libsql";

export const mastra = new Mastra({
  deployer: new VercelDeployer(),
  agents: { peakaAgent },
  storage: new LibSQLStore({
    url: ":memory:",
  }),
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
});
