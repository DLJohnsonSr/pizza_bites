<template>
  <div class="card card-body shadow">
    <h1 class="card-title text-center">Chechout</h1>
    <div class="card-body">
      <table class="table text-capitalize">
        <thead>
          <tr>
            <th scope="col">Qty</th>
            <th scope="col">Size</th>
            <th scope="col">Item</th>
            <th scope="col">Toppings</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th class="text-end" scope="col">Totals</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, index) in cart">
            <tr :key="index">
              <td>{{ item.quantity }}</td>
              <td>{{ item.size }}</td>
              <td>
                {{ item.name }}
              </td>
              <td>
                <span
                  v-for="(topping, topIndex) in item.toppings"
                  :key="topIndex"
                  >{{ topping }},
                </span>
              </td>
              <td>
                <router-link
                  :to="
                    '/edit/source/checkout/category/' +
                      item.category +
                      '/name/' +
                      item.name +
                      '/id/' +
                      item.id
                  "
                  role="button"
                  >Edit</router-link
                >
              </td>
              <td>
                <span
                  @click="removeCartItem({ id: item.id })"
                  role="button"
                  class="text-decoration-underline text-primary"
                  >Remove</span
                >
              </td>
              <td class="text-end">${{ getItemTotal(item.id) }}</td>
            </tr>
          </template>
          <tr>
            <td class="fst-italic" colspan="6">Subtotal</td>
            <td class="text-end">${{ getCartSubtotal }}</td>
          </tr>
          <tr>
            <td class="fst-italic" colspan="6">Tax</td>
            <td class="text-end">${{ cart.tax }}</td>
          </tr>
          <tr class="text-uppercase fw-bold">
            <td colspan="6">Total</td>
            <td class="text-end">${{ cart.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card-body">
      <div class="d-grid col-6 mx-auto">
        <button class="btn btn-primary shadow-sm" type="button">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapMutations } = createNamespacedHelpers("cart");
export default {
  name: "Checkout",
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["getItemTotal", "getCartSubtotal"]),
  },
  methods: {
    ...mapMutations(["removeCartItem"]),
  },
};
</script>
