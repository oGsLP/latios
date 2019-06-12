import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LModal from "./modal";

describe("# LModalTest", () => {
  it("+ exists l-modal component", () => {
    expect(LModal).to.be.ok;
  });
  it("- has default structure and classes", async () => {
    const wrapper = shallowMount(LModal);

    expect(wrapper.is("div")).to.be.true;
  });
  // Todo: to add tests
});
