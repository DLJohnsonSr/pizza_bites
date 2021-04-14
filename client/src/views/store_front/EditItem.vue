<template>
  <div class="card shadow">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col">
        <div class="card-body">
          <img
            class="img-fluid rounded shadow-sm"
            :src="item.img.src"
            :alt="item.img.alt"
          />
        </div>
      </div>
      <div class="col">
        <div class="card-body">
          <h2 class="card-title text-capitalize">{{ item.name }}</h2>
          <div class="card-text">{{ item.description }}</div>
        </div>
      </div>
    </div>
    <div
      v-for="toppingType in category.categoryToppings"
      :key="toppingType.type"
    >
      <div class="row">
        <div class="col">
          <div class="card-body">
            <h3 class="text-capitalize">{{ toppingType.type }}</h3>
            <div
              v-for="topping in toppingType.toppings"
              :key="topping"
              class="form-check form-check-inline"
            >
              <input
                class="form-check-input"
                type="checkbox"
                :value="topping"
                :id="ingredientLabelID(toppingType.type, topping)"
                v-model="cartItem.toppings"
              />
              <label
                class="form-check-label text-capitalize"
                :for="ingredientLabelID(toppingType.type, topping)"
              >
                {{ topping }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card-body">
          <h3>Sizes</h3>
          <div
            v-for="detail in item.details"
            :key="detail.size"
            class="form-check form-check-inline"
          >
            <input
              class="form-check-input"
              type="radio"
              name="size"
              :value="detail.size"
              :id="ingredientLabelID(detail.size, item.name)"
              v-model="cartItem.size"
            />
            <label
              class="form-check-label text-capitalize"
              :for="ingredientLabelID(detail.size, item.name)"
            >
              {{ detail.size }} - ${{ detail.price }}
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card-body">
          <h3>Quantity</h3>
          <div class="input-group w-25">
            <input
              class="form-control"
              type="number"
              min="1"
              max="20"
              id="quantity"
              v-model="cartItem.quantity"
            />
            <label class="text-capitalize" for="quantity"></label>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="card-body">
        <div @click="addItemRouteCheckout(cartItem)">
          <div class="d-grid col-6 mx-auto">
            <button type="button" class="btn btn-primary shadow-sm">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { menu } from "../../../testAPI";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("cart");

export default {
  name: "EditItem",
  data() {
    return {
      params: this.$route.params,
    };
  },
  watch: {
    $route(to, from) {
      this.params = to.params;
    },
  },
  computed: {
    ...mapState(["cart"]),
    // params: function() {
    //   return this.$route.params;
    // },
    category: function() {
      return menu.find(
        (menuCategory) => menuCategory.category === this.params.category
      );
    },
    item: function() {
      return this.category.items.find(
        (menuItem) => menuItem.name === this.params.name
      );
    },
    cartItem: function() {
      const cartItem = {};
      if (this.params.source === "menu") {
        console.log("menu");
        cartItem.category = this.category.category;
        cartItem.name = this.item.name;
        cartItem.toppings = this.item.toppings;
        cartItem.size = this.item.details[0].size;
        cartItem.price = this.item.details[0].price;
        cartItem.quantity = 1;
      } else if (
        this.params.source === "cart" ||
        this.params.source === "checkout"
      ) {
        console.log("cart");
        cartItem = this.$store.state.cart.find((item) => item.id === params.id);
      }
      return cartItem;
    },
  },
  methods: {
    addItemRouteCheckout(cartItem) {
      this.$store.dispatch("cart/addItemToCart", cartItem);
      this.$router.push({ name: "checkout" });
    },
    ingredientLabelID(category, name) {
      // split category and name into word arr
      const wordArr = [...category.split(" "), ...name.split(" ")];

      // return camel case word
      return wordArr.reduce((camelCaseName, word, index) => {
        let thisWord = word.toLowerCase();

        if (index > 0) {
          thisWord = thisWord[0].toUpperCase() + thisWord.slice(1);
        }

        return camelCaseName.concat(thisWord);
      }, "");
    },
  },
};
</script>

<style></style>
