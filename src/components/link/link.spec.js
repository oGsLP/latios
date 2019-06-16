import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LLink from "./link";

describe("# LLink", () => {
  it("+ exists l-link component", () => {
    expect(LLink).to.be.ok;
  });
  it("- has default structure and classes", async () => {
    const wrapper = shallowMount(LLink);
    expect(wrapper.is("a")).to.be.true;
  });
  // Todo: to add tests
});
