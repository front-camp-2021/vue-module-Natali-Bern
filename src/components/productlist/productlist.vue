<template>
  <div v-if="!loading">
    <div class="item-container">
      <div class="item-container__image-container">
        <div class="item-container__image-container-wrapper">
          <img
            class="item-container__image-container-image"
            :src="productForRender.images[0]"
            :alt="productForRender.title"
          >
        </div>
      </div>
      <div class="item-container__description">
        <ul class="item-container__description-stats">
          <li>Code: {{ productForRender.id }}</li>
          <li>Rating: {{ productForRender.rating }}</li>
          <li>Price: {{ productForRender.price }}</li>
        </ul>
        <p class="item-container__description-name">
          {{ productForRender.title }}
        </p>
        <button class="item-container__description-button">
          Buy
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import {mapActions, mapGetters} from 'vuex'
export default defineComponent({
  name: "Product",
  components: {},
  props: {
    product: {},
  },
  computed: {
      ...mapGetters([
        'PRODUCTS',
      ]),

      methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
      ]),
          mounted() {
      this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            this.sortByCategories()
            this.sortProductsBySearchValue(this.SEARCH_VALUE)
          }
        })
    }
  }
}
})
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap");
@import "/src/assets/styles/variables.scss";

.wishlist-nav-container__wishlist-back-btn {
  text-decoration: none;
  border: none;
  background-color: $button-primary-color;
  height: 50px;
  width: 220px;
  font-weight: 400;
  border-radius: 8px;
  margin: 15px;
  font-size: 18px;
  background-image: url(~@/assets/images/pagination-arrow-back.svg);
  background-repeat: no-repeat;
  background-position: left 5% bottom 50%;
}
.item-container {
  border-radius: 4px;
  display: flex;
  &__image-container {
    width: 50%;
    border-radius: 4px;
    display: flex;
    justify-content: flex-end;
    &-wrapper {
      width: 70%;
      background-color: $elements-main-color;
      border-radius: 4px;
      text-align: center;
      margin-right: 20px;
      &-image {
        max-width: 200px;
        max-width: 150px;
        max-width: 400px;
        max-height: 300px;
        border-radius: 4px;
      }
    }
  }
  &__description {
    width: 50%;
    border-radius: 4px;
    background-color: $elements-main-color;
    border-radius: 4px;
    &-stats {
      list-style-type: none;
      padding: 0px;
      margin-left: 20px;
    }
    &-name {
      margin-left: 20px;
    }
    &-button {
      margin-left: 20px;
      background-color: $button-primary-color;
      border: none;
      border-radius: 4px;
      height: 40px;
      width: 100px;
      color: $elements-main-color;
    }
  }
}
.page-not-found {
  text-align: center;
}
</style>