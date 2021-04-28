<template>
  <div class="d-flex justify-content-end align-items-center">
    <div class="position-relative">
      <i class="bi bi-cart-fill text-secondary fs-3"></i>
      <span
        class="position-absolute top-0 start-50 badge bg-warning rounded-pill border"
      >
        {{ getNumberOfItems }}</span
      >
    </div>
    <!-- Subtotal -->
    <div class="ms-4">${{ getCartSubtotal }}</div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("cart");

export default {
  name: "CartBadge",
  computed: {
    ...mapGetters(["getNumberOfItems", "getCartSubtotal"])
  }
};
</script>

<style></style>
