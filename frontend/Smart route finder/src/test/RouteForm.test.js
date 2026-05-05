import { mount } from "@vue/test-utils";
import RouteForm from "../Components/RouteForm.vue";

describe("RouteForm", () => {
  it("emits search event", async () => {
    const wrapper = mount(RouteForm);

    await wrapper.find("input").setValue("A");

    await wrapper.vm.$emit("onSearch", { start: "A", end: "B" });

    expect(wrapper.emitted()).toHaveProperty("onSearch");
  });
});

