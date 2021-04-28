<template>
  <div id="app">
    <!-- CART MODAL -->
    <cart-modal></cart-modal>
    <!-- HEADER -->
    <header class="pt-5 pb-2">
      <!-- LOGO -->
      <pizza-bites-logo></pizza-bites-logo>
    </header>

    <!-- NAV -->
    <nav role="navigation" id="nav" class="mb-5 text-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/menu">Menu</router-link> |
      <router-link to="/edit">Edit</router-link> |
      <router-link to="/checkout">Checkout</router-link>
    </nav>

    <!-- ROUTER VIEW -->
    <div class="container">
      <router-view />
    </div>

    <!-- FOOTER -->
    <footer class="bg-primary mt-5 py-5 text-center text-capitalize">
      <div class="container">
        <div class="row row-cols-1 row-cols-xl-3">
          <!-- LOCATIONS -->
          <div class="col-12 col-xl-4">
            <h3 class="">Locations</h3>
            <div
              v-for="(location, index) in locations"
              :key="index"
              class="mt-3"
            >
              {{ location.storeName }}
            </div>
          </div>
          <!-- HOURS -->
          <div class="col-12 col-xl-4">
            <h3 class="mt-5 mt-xl-0">Hours</h3>
            <div class="container g-0">
              <div
                v-for="(day, index) in hours"
                :key="index"
                class="row mt-3 row-cols-2 justify-content-center"
              >
                <div class="col-5">
                  {{ day.day }}
                </div>
                <div class="col-7 text-lowercase">{{ day.times }}</div>
              </div>
            </div>
          </div>
          <!-- CORP CONTACT -->
          <div class="col-12 col-xl-4">
            <h3 class="mt-5 mt-xl-0">Contact</h3>
            <address>
              <div class="mt-3">Pizza Empire, LLC</div>
              <div class="mt-3">info@pizzabites.us</div>
              <div class="mt-3">(555) 555-5555</div>
              <div class="mt-3">123 W. Main St.</div>
              <div class="mt-3">Anytown, ZA 55555</div>
            </address>
          </div>
        </div>
        <div class="row pt-5">
          <div class="col">all rights reserved</div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
// import Cart from "./components/cart/Cart.vue";
import { hours, locations } from "../testAPI";

import PizzaBitesLogo from "@/components/PizzaBitesLogo.vue";
import CartModal from "@/components/cart/CartModal.vue";

export default {
  data() {
    return {
      hours,
      locations
    };
  },
  components: {
    PizzaBitesLogo,
    CartModal
  }
};
</script>
<style>
body {
  font-size: 16px;
}
</style>
