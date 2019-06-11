import LDropdown from "./dropdown";
import LDropdownItem from "./dropdown-item";

import { installFactory } from "../../util/plugin";

const components = {
  LDropdown,
  LDropdownItem
};

export { LDropdown, LDropdownItem };

export default {
  install: installFactory({ components })
};
