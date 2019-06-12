import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LTooltip from "./tooltip";

describe("# LTooltipTest", () => {
  it("+ exists l-tooltip component", () => {
    expect(LTooltip).to.be.ok;
  });
  it("- has default structure and classes", async () => {
    const wrapper = shallowMount(LTooltip);

    expect(wrapper.is("div")).to.be.true;
  });
  // Todo: to add tests
});
