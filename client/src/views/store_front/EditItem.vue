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
      category: {
        category: null,
        categoryToppings: null,
        items: null
      },
      item: {
        id: null,
        category: null,
        name: null,
        toppings: null,
        img: {
          src: null,
          alt: null
        },
        description: null,
        details: null
      },
      cartItem: {
        id: null,
        category: null,
        name: null,
        toppings: null,
        size: null,
        quantity: null,
        price: null
      }
    };
  },
  created() {
    // populate category
    const category = menu.find(
      menuCategory => menuCategory.category === this.$route.params.category
    );

    for (const key in category) {
      this.category[key] = category[key];
    }

    // populate item
    const item = this.category.items.find(
      menuItem => menuItem.name === this.$route.params.name
    );

    for (const key in item) {
      this.item[key] = item[key];
    }

    // IF route from "menu" populate cartItem from menu item
    if (this.$route.params.source === "menu") {
      this.cartItem.category = this.category.category;
      this.cartItem.name = this.item.name;
      this.cartItem.toppings = this.item.toppings;
      this.cartItem.size = this.item.details[0].size;
      this.cartItem.price = this.item.details[0].price;
      this.cartItem.quantity = 1;
      // ELSE IF route from "cart" or checkout populate cartItem from cart item
    } else if (
      this.$route.params.source === "cart" ||
      this.$route.params.source === "checkout"
    ) {
      const cartItem = this.cart.find(item => item.id == this.$route.params.id);

      for (const key in cartItem) {
        this.cartItem[key] = cartItem[key];
      }
    }
  },
  computed: {
    ...mapState(["cart"])
  },
  methods: {
    setCartItemPrice() {
      this.cartItem.price = this.item.details.find(
        detail => detail.size === this.cartItem.size
      ).price;
    },
    addItemRouteCheckout(cartItem) {
      cartItem.price = this.item.details.find(
        detail => detail.size === cartItem.size
      ).price;
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
    }
  }
};
</script>

<style></style>
