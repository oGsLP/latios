import LLink from "./link";
import LBreadcrumb from "./breadcrumb";

import { installFactory } from "../../util/plugin";

const components = {
  LLink,
  LBreadcrumb,
  LLinkGroup: LBreadcrumb
};

export { LLink, LBreadcrumb };

export default {
  install: installFactory({ components })
};
