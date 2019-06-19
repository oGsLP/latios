import LDate from "./date";
import LLocation from "./location";
import LTime from "./time";

import { installFactory } from "../../util/plugin";

const components = {
  LDate,
  LLocation,
  LTime
};

export { LDate, LLocation, LTime };

export default {
  install: installFactory({ components })
};
