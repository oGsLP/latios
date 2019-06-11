import LIcon from "./icon";
import LIconButton from "./iconButton";

import { installFactory } from "../../util/plugin";

const components = {
  LIcon,
  LIconButton,
  LIconBtn: LIconButton
};

export { LIcon, LIconButton };

export default {
  install: installFactory({ components })
};
