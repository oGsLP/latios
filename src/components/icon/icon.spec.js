import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LIcon from "./icon";
// const LIcon = () => {
//   import("./icon.vue").then(module => {
//     return module.default;
//   });
// };
// const obj = {
//   LIcon: () => import("./icon.vue")
// };

// let LIcon = null;
//
// beforeAll(()=>{
//   import("./icon.vue").then((comp)=>{
//     LIcon=comp;
//   })
// });

describe("# LIconTest", () => {
  it("+ exists l-icon component", () => {
    expect(LIcon).to.be.ok;
  });
  it("- has default structure and classes", async () => {
    const wrapper = shallowMount(LIcon, {
      propsData: {
        icon: "activity"
      }
    });

    expect(wrapper.is("svg")).to.be.true;
  });
  // Todo: to add tests
});
