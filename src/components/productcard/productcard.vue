<template>
    <div className="products__card">
       <img className="products__image" src="product.images[0]" alt="product.title">
       <router-link :to="{ name: `Product`, params: { productId: product.id } }">
          <button class="products__link" />
        </router-link>
       <div className="products__rating-and-price">
         <div className="products__rating">{{ product.rating }}</div>
         <div className="products__price">₴{{ product.price }}</div>
       </div>
       <ul className="products__item-descriptions">
           <li
            v-ellipsis="product.title" 
            className="products__item-name"
           >
             {{ product.title }}
           </li>
         <li className="products__item-description">
           Redesigned from scratch and completely revised.
         </li>
       </ul>
       <div className="products__buttons">
         <button className="products__add-to-cart-button">
           ADD TO CART
         </button>
       </div>
     </div>
</template>

<script>

    export default ({
    name: "ProductCard",
    directives: {
    // ellipsis,
  },
    props: {
        product: {
         type: Object,
        default: () => {},
    },
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap");
@import "/src/assets/styles/variables.scss";

.products__card {
          filter: drop-shadow(-0.4px 0.5px 0.05rem $shadow-color);
          position: relative;
          text-align: center;
          height: 400px;
  
          background-color: $elements-main-color;
          border-radius: 4px;
          margin-bottom: 20px;
  
          .products__image {
            margin-top: 20px;
            margin-bottom: 40px;
            max-height: 180px;
            max-width: 180px;
          }
  
          .products__rating-and-price {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0% 10% 0% 10%;
  
            .products__rating {
              bottom: 150px;
              position: absolute;
              color: $elements-main-color;
              padding: 2% 10% 2% 5%;
              background-color: $button-primary-color;
              // background-image: url(~@/assets/images/rating-star.svg);
              background-repeat: no-repeat;
              background-position: bottom 50% left 90%;
              background-size: 20px;
              border-radius: 4px;
              font-size: 15px;
            }
  
            .products__price {
              right: 25px;
              bottom: 155px;
              position: absolute;
            }
          }
  
          .products__item-descriptions {
            list-style-type: none;
            text-align: start;
            color: $main-text-color;
            padding: 0% 0% 2% 7%;
            margin: 2%;
            bottom: 60px;
            position: absolute;
          
            .products__item-name {
              font-size: 16px;
              line-height: 19px;
              font-weight: $font-weight-medium;
              cursor: pointer;
            }
  
            .products-cards__item-description {
              font-size: 12px;
              line-height: 14px;
              font-weight: $font-weight-light;
            }
  
            .products__item-page-link {
              text-decoration: none;
            }
          }
  
          .products__buttons {
            position: absolute;
            bottom: 0px;
            width: 100%;
            height: 10%;
            display: flex;
  
            .products__wishlist-button {
              align-items: center;
              width: 50%;
              border: none;
              background-color: $button-secondary-color;
              border-bottom-left-radius: 4px;
              // background-image: url(~@/assets/images/wishlist-img.svg);
              background-size: 10%;
              background-repeat: no-repeat;
              background-position: left 15% bottom 50%;
              cursor: pointer;
            }
  
            .products__add-to-cart-button {
              align-items: center;
              border: none;
              width: 50%;
              color: $elements-main-color;
              background-color: $button-primary-color;
              border-bottom-right-radius: 4px;
              // background-image: url(~@/assets/images/add-to-cart.svg);
              background-size: 10%;
              background-repeat: no-repeat;
              background-position: left 5% bottom 50%;
              cursor: pointer;
            }
          }
        }
      
    
  
  
</style>