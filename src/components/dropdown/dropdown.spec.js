import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LDropdown from "./dropdown";
import LDropdownItem from "./dropdown-item";

describe("# LDropdownTest", () => {
  it("+ exists l-dropdown component", () => {
    expect(LDropdown).to.be.ok;
  });
  it("- has default structure and classes", async () => {
    const wrapper = shallowMount(LDropdown);

    expect(wrapper.is("div")).to.be.true;
  });
  it("- with l-dropdown-item", async () => {
    const wrapper = shallowMount(LDropdown,{
      slots:{
        default: [LDropdownItem]
      }
    });

    expect(wrapper.contains(LDropdownItem)).to.be.true;
  });
});
