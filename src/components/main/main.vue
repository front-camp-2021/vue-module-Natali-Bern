<template>
  <div v-if="!state.loading">
    <main-nav :items-found="setProductsForRender().length" />
    <div class="main">
      <div class="filters">
        <div class="filters__main">
          <div class="filters__slider">
            <filterslider
              :products="state.products[0]"
              :price-range="state.priceRange"
              @set-price="setPrice"
            />
          </div>
          <div class="filters__category">
            <h5 class="filters__section-header">
              Categories
            </h5>
            <filtercheckbox
              v-for="item in state.categories[0]"
              :key="item"
              :item-name="item"
              name="selectedCategories"
              :checked="isChecked(item, 'categories')"
              @set-filter="setFilter"
            />
          </div>
          <div class="filters__line" />
          <div class="filters__category">
            <h5 class="filters__section-header">
              Brands
            </h5>
            <filtercheckbox
              v-for="item in state.brands[0]"
              :key="item.id"
              :item-name="item"
              name="selectedBrands"
              :checked="isChecked(item, 'brands')"
              @set-filter="setFilter"
            />
          </div>
        </div>
        <button
          class="filters__filters-reset-button"
          @click="resetSelections()"
        >
          Clear All Filters
        </button>
      </div>
      <div class="productlist">
        <search @on-input="setUserInput" />
        <div 
          v-if="state.products[0]" 
          class="products"
        >
          <productcard
            v-for="product in setProductsForRender().slice(
              state.selectedPage[0],
              state.selectedPage[1]
            )"
            :key="product.id"
            :product-data="product"
          />
          <div
            v-if="setProductsForRender().length === 0"
            class="products__filters-error-message"
          >
            Nothing found, please, reset your filters and try again.
          </div>
        </div>
      </div>
    </div>
    <pagination
      :product-data="setProductsForRender()"
      :active-page="state.selectedPage[2]"
      @set-page="setPage"
      @page-back="pageBack"
      @page-forward="pageForward"
    />
  </div>
</template>

<script>
import MainNav from "../main-nav/main-nav.vue";
import FilterCheckbox from "../filtercheckbox/filtercheckbox.vue";
import Search from "../search/search.vue";
import Productlist from "../productlist/productlist.vue";
import Pagination from "../pagination/pagination.vue";
import FilterSlider from "../filterslider/filterslider.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent ({
  name: "Main",
  components: {
    MainNav,
    FilterCheckbox,
    Search,
    Productlist,
    Pagination,
    FilterSlider,
  },
    return ({
      state,
      setUserInput,
      setFilter,
      isChecked,
      setPrice,
      setPriceRange,
      setProductsForRender,
      setPage,
      pageBack,
      pageForward,
      resetSelections,
    })

})


</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap");
@import "/src/assets/styles/variables.scss";

.main {
  display: flex;
  height: 1296.5px;
  margin: 10px;
  .filters {
    width: 30%;
    position: relative;
    &__main {
      filter: drop-shadow(-0.4px 0.5px 0.05rem $shadow-color);
      margin-top: 5px;
      position: absolute;
      width: 95%;
      height: 96%;
      background-color: $elements-main-color;
      border-radius: 4px;
      font-size: 16px;
      line-height: 32px;
      font-weight: $font-weight-large;
    }
    &__slider {
      margin-top: 15px;
      margin-right: 3%;
      margin-left: 3%;
    }
    &__section-header {
      font-weight: $font-weight-large;
      font-size: 18px;
      line-height: 21px;
    }
    &__line {
      margin-top: 5px;
      margin-left: 5px;
      justify-content: center;
      border-bottom: 2px solid $button-secondary-color;
      width: 95%;
    }
    &__category {
      margin-left: 10px;
      &__checkbox-square {
        cursor: pointer;
      }
      &__checkbox-label {
        cursor: pointer;
      }
    }
    &__filters-reset-button {
      font-size: 100%;
      height: 30px;
      width: 95%;
      position: absolute;
      bottom: 0px;
      background-color: $button-primary-color;
      color: $elements-main-color;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }
  .cards {
    width: 70%;
    .productlist {
      display: grid;
      grid-template-columns: 33% 33% 33%;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 0rem 8px;
      width: 100%;
      text-align: center;
      &__filters-error-message {
        grid-column: span 3;
        border-radius: 4px;
        padding: 15px;
        background-color: $elements-main-color;
        filter: drop-shadow(-0.4px 0.5px 0.05rem $shadow-color);
      }
    }
  }
}

</style>