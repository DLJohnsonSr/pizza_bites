<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <img
        class="card-image-top img-fluid rounded shadow-sm"
        :src="item.img.src"
        :alt="item.img.alt"
      />
    </div>
    <div class="card-body">
      <div class="card-title">{{ item.name }}</div>
      <div class="card-text">{{ item.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayItem",
  props: {
    item: Object
  }
};
</script>
