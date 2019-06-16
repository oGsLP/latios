import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LBreadcrumb from "./breadcrumb";

describe("# LBreadcrumb", () => {
  it("+ exists l-breadcrumb component", () => {
    expect(LBreadcrumb).to.be.ok;
  });
  it("- has default structure and classes", async () => {
    const wrapper = shallowMount(LBreadcrumb);
    expect(wrapper.is("span")).to.be.true;
  });
  // Todo: to add tests
});
