import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LToast from "./toast";

describe("# LToastTest", () => {
  it("+ exists l-toast component", () => {
    expect(LToast).to.be.ok;
  });
  it("- has default structure and classes", async () => {
    const wrapper = shallowMount(LToast);

    expect(wrapper.is("div")).to.be.true;
    expect(wrapper.classes("l-toast")).to.be.true;
  });
  // Todo: to add tests
});
