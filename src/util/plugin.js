import OurVue from "./vue";

/**
 * Plugin install factory function.
 * @param {object} { components, directives }
 * @returns {function} plugin install function
 */
export const installFactory = ({ components, directives, plugins }) => {
  const install = (
    // , config
    Vue = {}
  ) => {
    if (install.installed) {
      /* istanbul ignore next */
      return;
    }
    install.installed = true;
    checkMultipleVue(Vue);
    // setConfig(config);
    registerComponents(Vue, components);
    registerDirectives(Vue, directives);
    registerPlugins(Vue, plugins);
  };

  install.installed = false;

  return install;
};

/**
 * Load a component
 * @param {object} Vue
 * @param {string} name
 * @param {object} def
 */
export const registerComponent = (Vue, name, def) => {
  if (Vue && name && def) Vue.component(name, def);
};

/**
 * Load some components
 * @param {object} Vue
 * @param {object} components
 */
export const registerComponents = (Vue, components = {}) => {
  for (let component in components) {
    registerComponent(Vue, component, components[component]);
  }
};

/**
 * Load some plugins
 * @param {object} Vue
 * @param {object} plugins
 */
export const registerPlugins = (Vue, plugins = {}) => {
  for (let plugin in plugins) {
    if (plugin && plugins[plugin]) Vue.use(plugins[plugin]);
  }
};

/**
 * Load a directive
 * @param {object} Vue
 * @param {string} name
 * @param {object} def
 */
export const registerDirective = (Vue, name, def) => {
  if (Vue && name && def) {
    // Ensure that any leading V is removed from the
    // name, as Vue adds it automatically
    Vue.directive(name.replace(/^VL/, "B"), def);
  }
};

/**
 * Load some directives
 * @param {object} Vue
 * @param {object} directives
 */
export const registerDirectives = (Vue, directives = {}) => {
  for (let directive in directives) {
    registerDirective(Vue, directive, directives[directive]);
  }
};

/**
 * Checks if there are multiple instances of Vue, and warns (once) about possible issues.
 * @param {object} Vue
 */
export const checkMultipleVue = (() => {
  let checkMultipleVueWarned = false;

  const MULTIPLE_VUE_WARNING = [
    "Multiple instances of Vue detected!",
    "You may need to set up an alias for Vue in your bundler config.",
    "See: https://bootstrap-vue.js.org/docs#using-module-bundlers"
  ].join("\n");

  return Vue => {
    /* istanbul ignore next */
    if (!checkMultipleVueWarned && OurVue !== Vue && !isJSDOM) {
      warn(MULTIPLE_VUE_WARNING);
    }
    checkMultipleVueWarned = true;
  };
})();
