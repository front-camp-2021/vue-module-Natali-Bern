<template>
<div class="product-card">
        <div class="product-card__inner">
            <div class="product-card__image" >
            <img src="productCard.images[0]" alt="productImage.title" />
            </div>
            <div class="product-card__wrapper">
                <div class="product-card__rating rating">
                    <span class="rating__count">{{ rating }}
                        <img class="rating__image" src={Star} />
                    </span>
                    
                </div>  
                <div class="rating__price">
                    {{ price }}
                </div>
            </div>
            <h3 class="product-card__name">
                {{ title }}
            </h3>
            <div class="product-card__description">
                {{ brand }}
            </div>
        </div>
            <div class="product-card__buttons">
                <button class="button-wishlist">
                    <img class="button-wishlist__image" src={Heart} />
                    <span class="button-wishlist__text">Wishlist</span>
                </button>
                <button class="button-addtocart">
                    <img class="button-addtocart__image" src={Bag} />
                    <span class="button-addtocart__text">Add to Cart</span>
                </button>
            </div>
    </div> 

</template>

<script>
export default {
  name: "ProductCard",
  props: {
    productcardData : {
    type: Object,
    default: Function
    }
  },
  methods: {},
};

</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap");
.product-card {
     width: 300px;
     height: 430px;
      background-color: $background-0;
      border-radius: $border-radius;
      box-shadow: $box-shadow;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     overflow: hidden;
  
     &__inner {
       height: 100%;
       padding: 25px;
  
       &__name {
         color: $typography-700;
         margin-top: 16px;
         margin-bottom: 3px;
         font-size: 16px;
         font-weight: 400;
         font-family: $font-family;
       }
    
       &__description {
         color: $typography-700;
         font-size: 12px;
         font-weight: 300;
         font-family: $font-family;
       }
     }
  
     &__image {
       background-position: center;
       background-size: contain;
       background-repeat: no-repeat;
       margin-bottom: 15px;
       height: 70%;
       width: 100%;
     }
  
     &__wrapper {
       justify-content: space-between;
       display: flex;
       align-items: center;
       width: 100%;
  
   
       .rating__count:not(:first-child) {
         display: none;
       }
      
       .rating__image:not(:first-child) {
         display: none;
       }
     }
    
     &__buttons {
       height: 45px;
       display: flex;
       justify-content: space-between;
  
  
       .button-wishlist {
         display: flex;
         align-items: center;
         width: 100%;
         justify-content: center;
         border: none;
         cursor: pointer;
      
         &__image {
           background-color: $background-500;
           margin-right: 10px;
         }
        
         &__text {
           color: $typography-700;
           text-transform: uppercase;
           font-weight: 600;
           font-family: $font-family;
         }
       }
      
       .button-addtocart {
         display: flex;
         align-items: center;
         width: 100%;
         justify-content: center;
         background-color: $primary-normal;
         color: $typography-0;
         border: none;
         cursor: pointer;
      
         &__image {
           color: $typography-0;
           margin-right: 10px;
         }
        
         &__text {
          text-transform: uppercase;
            font-weight: 600;
            font-family: $font-family;
         }
       }
     } 
   }
  
   .rating {
     background-color: $primary-normal;
     padding: 6px 12px;
     border-radius: 3px;
     display: flex;
     align-items: center;
     justify-content: center;
  
     &__count {
       color: $background-500;
       font-size: 14px;
       display: block;
     }
  
     &__image {
       margin-left: 10px;
     }
  
     &__price {
       font-size: 18px;
     }
   }
  


</style>