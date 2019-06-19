import LBadge from "./badge";
import { installFactory } from "../../util/plugin";

const components = {
  LBadge
};

export { LBadge };

export default {
  install: installFactory({ components })
};
