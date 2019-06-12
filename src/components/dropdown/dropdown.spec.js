import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LDropdown from "./dropdown";

describe("# LDropdownTest", () => {
  it("+ exists l-dropdown component", () => {
    expect(LDropdown).to.be.ok;
  });
  it("- has default structure and classes", async () => {
    const wrapper = shallowMount(LDropdown);

    expect(wrapper.is("div")).to.be.true;
  });
  // Todo: to add tests
});
