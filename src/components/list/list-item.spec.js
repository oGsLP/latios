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
  // Todo: to add tests
});
