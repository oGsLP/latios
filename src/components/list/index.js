import LList from "./list";
import LListItem from "./list-item";

import { installFactory } from "../../util/plugin";

const components = {
  LList,
  List: LList,
  LListItem,
  ListItem: LListItem,
  LLi: LListItem
};

export { LList, LListItem };

export default {
  install: installFactory({ components })
};
