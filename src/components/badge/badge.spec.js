import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LBadge from "./badge";

describe("# LBadgeTest", () => {
  it("+ exists l-badge component", () => {
    expect(LBadge).to.be.ok;
  });
  it("- has default structure and classes", async () => {
    const wrapper = shallowMount(LBadge);

    expect(wrapper.is("span")).to.be.true;
    expect(wrapper.classes("l-badge")).to.be.true;
  });
  // Todo: to add tests
});
