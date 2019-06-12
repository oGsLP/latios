import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LList from "./list";

describe("# LListTest", () => {
  it("+ exists l-list component", () => {
    expect(LList).to.be.ok;
  });
  it("- has default structure and classes", async () => {
    const wrapper = shallowMount(LList);

    expect(wrapper.is("ul")).to.be.true;
  });
  // Todo: to add tests
});
