import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LPopover from "./popover";

describe("# LPopoverTest", () => {
  it("+ exists l-popover component", () => {
    expect(LPopover).to.be.ok;
  });
  it("- has default structure and classes", async () => {
    const wrapper = shallowMount(LPopover);

    expect(wrapper.is("div")).to.be.true;
    expect(wrapper.classes("l-popover")).to.be.true;
  });
  // Todo: to add tests
});
