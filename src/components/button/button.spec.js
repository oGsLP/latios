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
    expect(wrapper.classes("l-button")).toBe(true);
    expect(wrapper.contains(LIcon)).toBe(false);
    expect(wrapper.contains("svg")).toBe(false);

    expect(wrapper.trigger("click"));
  });

  it("- use icon prop", async () => {
    const wrapper = mount(LButton, {
      propsData: {
        icon: "menu",
        iconPosition: "right",
        poke: "grass",
        gap: true
      }
    });

    expect(wrapper.is("button")).toBe(true);
    expect(wrapper.classes("l-button")).toBe(true);
    expect(wrapper.contains(LIcon)).toBe(true);
    expect(wrapper.contains("svg")).toBe(true);

    expect(wrapper.trigger("click"));
  });

  it("- wrong poke", async () => {
    const wrapper = mount(LButton, {
      propsData: {
        poke: "latioss",
        gap: true
      }
    });

    expect(wrapper.is("button")).toBe(true);
    expect(wrapper.classes("l-button")).toBe(true);
  });
});
