import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LButton from "./button.vue";

describe("#LButtonTest", () => {
  it("#exists l-button component", () => {
    expect(LButton).to.be.ok;
  });

  it("has default structure and classes", async ()=>{
    const wrapper = shallowMount(LButton);

    expect(wrapper.is('button')).to.be.true;
  });
});
