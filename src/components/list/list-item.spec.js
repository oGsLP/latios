import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LListItem from "./list-item";

describe("# LListItemTest", () => {
  it("+ exists l-list-item component", () => {
    expect(LListItem).to.be.ok;
  });
  it("- has default structure and classes", async () => {
    const wrapper = shallowMount(LListItem);

    expect(wrapper.is("div")).to.be.true;
  });
  // it("- as a button",async()=>{
  //
  // });
  // it("- as a link",async()=>{
  //
  // });
  it("- test props", () => {
    const wrapper = shallowMount(LListItem, {
      propsData: {
        poke: "ghost",
        href: "#",
        active:true
      }
    });
    expect(wrapper.classes("list-item-ghost")).to.be.true;
  });
  it("- test clickHandler", async () => {
    const wrapper = shallowMount(LListItem);

    // Todo: add clickHandler

    expect(wrapper.trigger("click"));
  });
});
