
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore } from '@mastra/libsql';
import { peakaAgent } from './agents/peaka-agent';
import { VercelDeployer } from '@mastra/deployer-vercel';

const vercelDeployer = new VercelDeployer({
  teamSlug: 'ramamatars-projects',
  projectName: 'peaka-mastra-ai-agent-main',
  token: process.env.VERCEL_API_KEY ?? ""
});


export const mastra = new Mastra({
  deployer: vercelDeployer,
  agents: { peakaAgent },
  storage: new LibSQLStore({
    url: ":memory:",
  }),
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
