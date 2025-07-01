import { MCPClient } from "@mastra/mcp";

process.env.HOME = "/tmp";
console.log("PEAKA_API_KEY" + process.env.PEAKA_API_KEY);

export const mcp = new MCPClient({
  servers: {
    peaka: {
      command: "npx",
      args: ["-y", "@peaka/mcp-server-peaka@latest"],
      env: {
        PEAKA_API_KEY: process.env.PEAKA_API_KEY || "",
      },
    },
  },
});

export const getSQLRuleSet = async () => {
  const resources = await mcp.resources.list();

  if (resources.peaka) {
    const resource = resources.peaka.find(
      (r) => r.uri === "file:///peaka_sql_query_rule_set.txt"
    );
    if (!resource) { 
      
      throw new Error("Resource not found");
    }
    console.log(resource);
    const result = await mcp.resources.read("peaka", resource.uri);
    return result.contents[0].text;
  } }
