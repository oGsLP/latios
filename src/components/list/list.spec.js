import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LList from "./list";

describe("# LListTest", () => {
  it("+ exists l-list component", () => {
    expect(LList).to.be.ok;
  });
  it("- has default structure and classes", async () => {
    const wrapper = shallowMount(LList);

    expect(wrapper.is("div")).to.be.true;
    expect(wrapper.classes("list-dir-horizontal")).to.be.false;
    expect(wrapper.classes("list-dir-vertical")).to.be.true;
  });
  it("- test horizontal", () => {
    const wrapper = shallowMount(LList, {
      propsData: {
        horizontal: true
      }
    });
    expect(wrapper.is("div")).to.be.true;
    expect(wrapper.classes("list-dir-horizontal")).to.be.true;
    expect(wrapper.classes("list-dir-vertical")).to.be.false;
  });
});
