<template>
<div class="breadcrumbs">
    <div class="breadcrumbs__home-button" />
    <!-- <div class="breadcrumbs__arrows" /> -->
    <div class="breadcrumbs__active-page">
      eCommerce
    </div>
    <!-- <div class="breadcrumbs__arrows" /> -->
    <div class="breadcrumbs__page">
      Electronics
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
};
</script>

<style scoped lang="scss">
@import "/src/assets/styles/variables.scss";

.breadcrumbs {
  display: flex;
  align-items: center;
  align-content: center;
  margin: 10px;

  &__home-button {
    // background-image: url(~@/assets/images/home.svg);
    width: 20px;
    height: 20px;
    background-size: 100%;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  &__arrows {
    margin: 5px;
    // background-image: url(~@/assets/images/breadcrumbs-arrows-right.svg);
    width: 20px;
    height: 14px;
    background-size: 100%;
    background-repeat: no-repeat;
  }

  &__active-page {
    color: $secondary-text-color;
    font-weight: $font-weight-medium;
    cursor: pointer;
  }

  &__page {
    color: $main-text-color;
    font-weight: $font-weight-medium;
    cursor: pointer;
  }
}
</style>