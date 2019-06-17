// import { expect } from "chai";
import { shallowMount, mount } from "@vue/test-utils";
import LButton from "./button.vue";
import LIcon from "./../icon/icon.vue";

describe("# LButtonTest", () => {
  it("+ exists l-button component", () => {
    expect(LButton);
  });

  it("- has default structure and classes", async () => {
    const wrapper = mount(LButton);

    expect(wrapper.is("button")).toBe(true);
    expect(wrapper.contains(LIcon)).toBe(false);
    expect(wrapper.contains("svg")).toBe(false);
  });

  it("- use icon prop", async () => {
    const wrapper = mount(LButton, {
      propsData: {
        icon: "menu",
        poke: "grass",
        gap: true
      }
    });

    expect(wrapper.is("button")).toBe(true);
    expect(wrapper.contains(LIcon)).toBe(true);
    expect(wrapper.contains("svg")).toBe(true);
  });
});
