import LButton from "./button";
import LButtonGroup from "./buttonGroup";
// Import others

import { installFactory } from "../../util/plugin";

const components = {
  LBtn: LButton,
  LButton,
  LBtnG: LButtonGroup,
  LBtnGroup: LButtonGroup,
  LButtonGroup
};

export { LButton, LButtonGroup };

export default {
  install: installFactory({ components })
};
