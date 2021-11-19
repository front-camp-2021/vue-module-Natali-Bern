<template>
     <div class="search">
      <input
        class="search__input"
        type="text"
        name="filter"
        placeholder="Search"
        @input="$emit('on-input', $event.target.value)"
      >
    </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap");
@import "/src/assets/styles/variables.scss";

.search {
  width: 100%;
  filter: drop-shadow(-0.4px 0.5px 0.05rem $shadow-color);
  &__input {
    box-sizing: border-box;
    margin: 5px 0px 20px 0px;
    padding: 5px 5px 5px 15px;
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    // background-image: url(~@/assets/images/search.svg);
    background-repeat: no-repeat;
    background-color: $elements-main-color;
    background-position: left 99% bottom 50%;
  }
}
</style>