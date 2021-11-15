<template>
    <div class="pagination">
                <a class="pagination__link pagination__prev" href="#">&laquo;</a>

                <div class="pagination__group">
                    <span><a class="pagination__link" href="#">1</a></span>
                    <a class="pagination__link pagination__link_active" href="#">2</a>
                    <a class="pagination__link" href="#">3</a>
                    <a class="pagination__link" href="#">4</a>
                    <a class="pagination__link" href="#">5</a>
                    <a class="pagination__link" href="#">6</a>
                </div>
                <a class="pagination__link pagination__next" href="#">&raquo;</a>
    </div>   
</template>

<script>
export default {
  name: "Pagination",
  props: {
    productcardData: {
      type: Object,
      default: Function,
    },
    activePage: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    pagesCount() {
      return [...Array(Math.ceil(this.cardData.length / 9)).keys()];
    },
    assingClass(page) {
      if (page + 1 === this.activePage) {
        return "pagination__page active";
      } else {
        return "pagination__page";
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap");
.pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 28px;

   &__link {
     line-height: 1;
     text-decoration: none;
     line-height: 40px;
      font-size: 18px;
      font-weight: 400;
  
   }

   &__group {
      background-color: $background-500;
      display: flex;
      gap: 30px;
      padding: 0 30px;
      border-radius: 40px;
    }
  
    &__link_active {
      background-color: $primary-normal;
      padding: 0 15px;
      border-radius: 40px;
      color: $background-0;
    }
  
   &__prev, &__next {
      background-color: $background-500;
      padding: 0 15px;
      border-radius: 40px;
    }
 }
</style>