import { installFactory } from "./../util/plugin";
import * as componentPlugins from "./plugins";

// Export component groups in plugins
export * from "./plugins";

// Export components individually
export * from "./button";
export * from "./icon";
export * from "./list";
// ....

export const componentsPlugin = {
  install: installFactory({ plugins: componentPlugins })
};
