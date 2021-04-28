<template>
  <div class="header-logo">
    <!-- https://clipartix.com/pizza-clip-art-image-49314 -->
    <img
      class="header-logo-img"
      src="@/assets/img/pizza_logo.webp"
      alt="Pizza Bites"
    />
    <div class="header-logo-text-overlay pt-2">
      <h1
        class="display-2
        header-logo-text-shadow font-weight-bolder text-center text-primary"
      >
        Pizza Bites
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "PizzaBitesLogo",
};
</script>

<style lang="scss" scoped>
.header-logo {
  width: 100%;
  position: relative;
}
.header-logo-img {
  display: block;
  height: 7rem;
  width: auto;
  margin: 0 auto;
}
.header-logo-text-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.header-logo-text-shadow {
  text-shadow: 0.06rem 0.06rem $secondary, -0.06rem -0.06rem $secondary,
    0.4rem 0.4rem 0.5rem black;
}

// @media screen and (min-width: 768px) {
//   .header-logo-img {
//     height: 8rem;
//   }
// }
</style>
