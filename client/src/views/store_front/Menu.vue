<template>
  <div class="card">
    <!-- ACCORDI0N -->
    <div class="accordion shadow" id="menuOptions">
      <div
        v-for="menuItem in menu"
        :key="menuItem.category"
        class="accordion-item"
      >
        <h2 id="menuItem.category" class="accordion-header">
          <button
            class="accordion-button text-capitalize"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#' + menuItem.category"
            aria-expanded="false"
            :aria-controls="menuItem.category"
          >
            {{ menuItem.category }}
          </button>
        </h2>
        <div
          id="menuItem.category"
          class="accordion-collapse collapse show"
          :aria-labelledby="menuItem.category"
          data-bs-parent="#menuOptions"
        >
          <div
            class="accordion-body gap-5 d-flex justify-content-start align-content-center flex-column flex-md-row flex-wrap"
          >
            <router-link
              v-for="item in menuItem.items"
              :key="item.name"
              :to="
                '/edit/source/menu/category/' +
                  menuItem.category +
                  '/name/' +
                  item.name +
                  '/id/' +
                  item.id
              "
              class="text-decoration-none text-dark"
            >
              <display-item :item="item" class="shadow"></display-item
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DisplayItem from "@/components/DisplayItem.vue";
// import { menu } from "../../../testAPI";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("menu");

export default {
  name: "Menu",
  components: { DisplayItem },
  computed: {
    ...mapState(["menu"])
  }
};
</script>
