import LModal from "./modal";
import LToast from "./toast";
import LPopover from "./popover";
import LTooltip from "./tooltip";

import { installFactory } from "../../util/plugin";

const components = {
  LModal,
  LToast,
  LPopover,
  LTooltip
};

export { LModal, LTooltip, LPopover, LToast };

export default {
  install: installFactory({ components })
};
