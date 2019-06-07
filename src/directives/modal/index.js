import VLModal from "./modal";
import { installFactory } from "../../util/plugin";

const directives = {
  VLModal
};

export { VLModal };

export default {
  install: installFactory({ directives })
};
