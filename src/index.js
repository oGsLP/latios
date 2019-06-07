import { installFactory } from "./util/plugin";
import { componentsPlugin } from "./components/index";
import { directivesPlugin } from "./directives/index";

// Named exports of all components and component group plugins
export * from "./components/index";

// Named exports of all directives and directive group plugins
export * from "./directives/index";

// Latios installer
const install = installFactory({
  plugins: { componentsPlugin, directivesPlugin }
});

// BootstrapVue plugin
const Latios = {
  install: install
};

// Named exports for BvConfigPlugin and BootstrapVue
export {

  // Main Latios Plugin
  Latios,
  // Installer and setConfig exported in case the consumer does not
  // import `default` as the plugin in CommonJS build (or does not
  // have interop enabled for CommonJS). Both the following will work:
  //   Latios = require('latios')
  //   Latios = require('latios').default
  //   Vue.use(Latios)
  install
};

// Default export is the Latios plugin
export default Latios;
