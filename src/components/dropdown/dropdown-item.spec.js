import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LDropdownItem from "./dropdown-item";

describe("# LDropdownItemTest", () => {
  it("+ exists l-dropdown-item component", () => {
    expect(LDropdownItem).to.be.ok;
  });
  it("- has default structure and classes", async () => {
    const wrapper = shallowMount(LDropdownItem);

    expect(wrapper.is("li")).to.be.true;
  });
  // Todo: to add tests
});
