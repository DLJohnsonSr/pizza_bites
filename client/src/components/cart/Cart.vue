<template>
  <div
    v-show="isCartOpen"
    class="card border-primary shadow"
    style="width: 20rem"
  >
    <!-- CART & BADGE -->
    <div class="card-header text-end" role="button">
      <cart-badge :numberOfItems="getNumberOfItems"></cart-badge>
    </div>

    <!-- ITEM ROWS -->
    <cart-row
      v-for="(item, index) in cart.items"
      :key="index"
      :item="item"
    ></cart-row>

    <!-- EMTPY CART BUTTON -->
    <div class="card-body">
      <cart-button
        :buttonText="'Empty Cart'"
        @click="emptyCart()"
      ></cart-button>
    </div>

    <!-- CHECKOUT BUTTON -->
    <div class="card-body">
      <router-link to="/checkout">
        <cart-button :buttonText="'Checkout'"></cart-button
      ></router-link>
    </div>
  </div>
</template>

<script>
import CartBadge from "./CartBadge.vue";
import CartButton from "./CartButton.vue";
import CartRow from "./CartRow.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapMutations } = createNamespacedHelpers("cart");

export default {
  components: { CartRow, CartBadge, CartButton },
  name: "Cart",
  computed: {
    ...mapState(["isCartOpen", "cart"]),
    ...mapGetters(["getNumberOfItems"])
  },
  methods: {
    ...mapMutations(["toggleCart", "emptyCart"])
  }
};
</script>

<style lang="scss" scoped></style>
