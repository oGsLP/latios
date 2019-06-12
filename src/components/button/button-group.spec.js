import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LButtonGroup from "./button-group";

describe("# LButtonGroupTest", () => {
  it("+ exists l-button-group component", () => {
    expect(LButtonGroup).to.be.ok;
  });
  it("- has default structure and classes", async () => {
    const wrapper = shallowMount(LButtonGroup);

    expect(wrapper.is("div")).to.be.true;
  });
  // Todo: to add tests
});
