<template>
  <div>
    <!-- CartBadge for cart toggle -->
    <cart-badge
      :numberOfItems="getNumberOfItems"
      data-bs-toggle="modal"
      data-bs-target="#cart"
    >
    </cart-badge>

    <!-- START cart modal -->
    <div
      class="modal"
      tabindex="-1"
      id="cart"
      aria-labelledby="cartLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <!-- Cart badge -->
            <cart-badge></cart-badge>

            <!-- Close buttom -->
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close cart"
            ></button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <!-- cart Rows -->
            <cart-row
              v-for="(item, index) in cart"
              :key="index"
              :item="item"
            ></cart-row>
          </div>

          <!-- Modal Footer -->
          <div class="modal-footer">
            <!-- Empty Cart Button -->
            <cart-button
              @click.native="emptyCart()"
              :buttonText="'Empty Cart'"
            ></cart-button>

            <!-- Checkout Button -->
            <cart-button
              @click.native="checkout()"
              :buttonText="'Checkout'"
            ></cart-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Cart from "./cart/Cart.vue";
// import { cart } from "../../../testAPI";
import CartBadge from "./CartBadge.vue";
import CartButton from "./CartButton.vue";
import CartRow from "./CartRow.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapMutations } = createNamespacedHelpers("cart");

export default {
  components: { CartBadge, CartRow, CartButton },
  name: "CartModal",
  computed: {
    ...mapState(["isCartOpen", "cart"]),
    ...mapGetters(["getNumberOfItems", "getCartSubtotal"]),
  },
  methods: {
    ...mapMutations(["toggleCart", "emptyCart"]),
    checkout() {
      this.$router.push({ name: "checkout" });
    },
  },
};
</script>

<style></style>
