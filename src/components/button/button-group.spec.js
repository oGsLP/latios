import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LButtonGroup from "./button-group";
import LButton from "./button";

describe("# LButtonGroupTest", () => {
  it("+ exists l-button-group component", () => {
    expect(LButtonGroup).to.be.ok;
  });
  it("- has default structure and classes", async () => {
    const wrapper = shallowMount(LButtonGroup,{
      slots:{
        default: [LButton,LButton]
      }
    });

    expect(wrapper.is("div")).to.be.true;
    expect(wrapper.contains(LButton)).to.be.true;
    expect(wrapper.findAll(LButton).length).to.equal(2);
  });
  // Todo: to add tests
});
