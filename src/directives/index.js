import { installFactory } from "../util/plugin";
import * as directivePlugins from "./plugins";

// Export all directive group plugins
export * from "./plugins";

// Named exports of all directives
export * from "./modal";

export const directivesPlugin = {
  install: installFactory({ plugins: directivePlugins })
};
