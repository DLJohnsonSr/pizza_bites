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
            <th class="text-end" scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, index) in cart">
            <tr :key="index">
              <td>{{ item.quantity }}</td>
              <td>{{ item.size }}</td>
              <td>{{ item.name }}</td>
              <td class="text-end">${{ getItemTotal(item.id) }}</td>
            </tr>
          </template>
          <tr>
            <td class="fst-italic" colspan="3">Subtotal</td>
            <td class="text-end">${{ getCartSubtotal }}</td>
          </tr>
          <tr>
            <td class="fst-italic" colspan="3">Tax</td>
            <td class="text-end">${{ cart.tax }}</td>
          </tr>
          <tr class="text-uppercase fw-bold">
            <td colspan="3">Total</td>
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
const { mapState, mapGetters } = createNamespacedHelpers("cart");
export default {
  name: "Checkout",
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["getItemTotal", "getCartSubtotal"]),
  },
};
</script>
