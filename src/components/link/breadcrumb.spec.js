import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LBreadcrumb from "./breadcrumb";
import LLink from "./link";

const items = [
  {
    text: "dasdsa",
    href: "#",
    poke: "latias",
    active: true
  },
  {
    text: "dasdsa",
    poke: "latios",
    disabled: true
  },
  {
    text: "dasa",
    poke: "ghost",
    disabled: true
  },
  {
    text: "dasdsauiiii",
    poke: "dark",
    disabled: true
  }
];

describe("# LBreadcrumb", () => {
  it("+ exists l-breadcrumb component", () => {
    expect(LBreadcrumb).to.be.ok;
  });
  it("- has default structure and classes", async () => {
    const wrapper = shallowMount(LBreadcrumb);
    expect(wrapper.is("span")).to.be.true;
    expect(wrapper.classes("l-breadcrumb")).to.be.true;
  });
  it("- add some items", () => {
    const wrapper = shallowMount(LBreadcrumb, {
      propsData:{
        items: items
      }
    });

    expect(wrapper.is("span")).to.be.true;
    expect(wrapper.classes("l-breadcrumb")).to.be.true;
    expect(wrapper.contains(LLink)).to.be.true;
    expect(wrapper.findAll(LLink).length).to.equal(4);
  });
});
