<template>
  <div>
    <!-- MAIN SECTION -->
    <div class="card shadow">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col col-md-4">
          <div class="card-body">
            <img
              class="img-fluid shadow-sm rounded"
              src="https://picsum.photos/600/600/?image=21"
              alt="Main img"
            />
          </div>
        </div>
        <div class="col col-md-8">
          <div class="card-body">
            <div class="card-title">Lorem ipsum</div>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              cum odio libero nihil sit fugiat expedita veritatis voluptates
              ullam ipsam. Animi qui ducimus necessitatibus quod alias. Atque
              aliquid ducimus harum!
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- COUPONS -->
    <div
      class="mt-5 d-flex justify-content-between align-items-center flex-column flex-xl-row"
    >
      <display-item
        class="my-5 shadow"
        v-for="(coupon, index) in coupons"
        :key="index"
        :item="coupon"
      ></display-item>
    </div>
  </div>
</template>

<script>
import DisplayItem from "@/components/DisplayItem.vue";
import { coupons } from "../../../testAPI";

export default {
  name: "Home",
  data() {
    return {
      coupons,
    };
  },
  components: { DisplayItem },
};
</script>
