<template>
<div class="breadcrumb">
        <ul class="breadcrumb__list">
            <li class="breadcrumb__item">
                <a class="breadcrumb__link" href="#"><i class="bi bi-house-door"></i>  
                </a>
                <i class="bi bi-chevron-right link-icon"></i>
            </li>

            <li class="breadcrumb__item">
                <a class="breadcrumb__link"
                    href="#">eCommerce</a>
                    <i class="bi bi-chevron-right link-icon"></i>
            </li>

            <li class="breadcrumb__item">
                    <a class="breadcrumb__link"
                       href="#">Electronics</a>
                    <i class="bi bi-chevron-right link-icon"></i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
};
</script>

<style scoped lang="scss">
.breadcrumb {


    &__list {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
      list-style: none;
    }
  
    &__item {
      display: flex;
      align-items: center;
      padding-right: 12px;
    }
      
  
      &__link {
        cursor: default;
        text-decoration: none;
        color: $primary-normal;
        }
  
      &:last-child {
        padding-right: 0;
        font-size: 0.875rem;
        color: typography-700;
    }
  
    .link-icon {
    display: none;
    padding-left: 12px;
    font-size: 0.75rem;
    color: $typography-900;
    }
  }
</style>