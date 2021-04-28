<template>
  <div class="bg-primary text-light text-capitalize m-1 p-2 rounded shadow-sm">
    <div class="fw-bold fs-5 d-flex justify-content-between">
      <span>{{ item.name }}</span>
      <span>${{ getItemTotal(item.id) }}</span>
    </div>
    <div class="mt-1">
      <span>
        <small> {{ addToppingComma(item.toppings) }} </small></span
      >
    </div>
    <div class="mt-2">
      <i
        class="bi bi-plus-square-fill fs-4 d-inline"
        role="button"
        @click="incrementItemQuantity({ id: item.id })"
      ></i>
      <input
        class="form-control form-control-sm d-inline mx-2 text-center"
        style="width: 3rem"
        type="text"
        :value="item.quantity"
        aria-label="quantity"
        @keydown.enter="
          editItemQuantity({ id: item.id, quantity: $event.target.value })
        "
      />
      <i
        class="bi bi-dash-square-fill fs-4"
        @click="decrementItemQuantity({ id: item.id })"
        role="button"
      ></i>
      <span class="m-3"
        ><small>{{ item.price }}</small></span
      >
      <router-link
        :to="
          '/edit/source/cart/category/' +
            item.category +
            '/name/' +
            item.name +
            '/id/' +
            item.id
        "
        class="text-light"
        role="button"
        >Edit</router-link
      >
      <span
        class="text-decoration-underline float-end mt-2"
        @click="removeCartItem({ id: item.id })"
        role="button"
        >Remove</span
      >
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } = createNamespacedHelpers("cart");
export default {
  name: "CartRow",
  props: {
    item: Object
  },
  computed: {
    ...mapGetters(["getItemTotal"])
  },
  methods: {
    addToppingComma(toppings) {
      return toppings.reduce((toppingStr, topping, index, arr) => {
        toppingStr = toppingStr + topping;
        if (index < arr.length - 1) {
          toppingStr += ", ";
        }
        return toppingStr;
      }, "");
    },
    ...mapMutations([
      "incrementItemQuantity",
      "decrementItemQuantity",
      "editItemQuantity",
      "removeCartItem"
    ])
  }
};
</script>

<style></style>
