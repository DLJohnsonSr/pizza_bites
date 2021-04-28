<template>
  <div>
    <pay-pal-button
      :createOrder="createOrder"
      :onApprove="onApprove"
    ></pay-pal-button>
  </div>
</template>

<script>
const PayPalButton = paypal.Buttons.driver("vue", window.Vue);
export default {
  components: {
    "paypal-buttons": PayPalButton,
  },
  computed: {
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: "0.01",
            },
          },
        ],
      });
    },
    onAuthorize: function(data, actions) {
      return actions.order.capture();
    },
  },
};
</script>

<style lang="scss" scoped></style>
