<template>
  <button type="button" class="btn btn-outline-primary w-100">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "CartButton",
  props: {
    buttonText: String
  }
};
</script>

<style></style>
