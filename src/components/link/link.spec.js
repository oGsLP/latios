import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LLink from "./link";

describe("# LLink", () => {
  it("+ exists l-link component", () => {
    expect(LLink).to.be.ok;
  });
  it("- has default structure and classes", async () => {
    const wrapper = shallowMount(LLink);
    expect(wrapper.is("a")).to.be.true;
    expect(wrapper.classes("l-link")).to.be.true;
  });
  it("- test active condition",()=>{
    const wrapper = shallowMount(LLink,{
      propsData:{
        active: true
      }
    });

    expect(wrapper.is("a")).to.be.true;
    expect(wrapper.classes("l-link")).to.be.true;
  })
});
