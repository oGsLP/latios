import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LIconButton from "./icon-button";

describe("# LIconButtonTest", () => {
  it("+ exists l-icon-button component", () => {
    expect(LIconButton).to.be.ok;
  });
  it("- has default structure and classes", async () => {
    const wrapper = shallowMount(LIconButton, {
      propsData: {
        icon: "list",
        poke: "wrongPoke"
      }
    });

    expect(wrapper.is("button")).to.be.true;
    expect(wrapper.classes("l-icon-button")).to.be.true;
  });
  // Todo: to add tests
});
