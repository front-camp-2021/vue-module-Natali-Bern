<template>
<header class="header">
    <div class="container">
    <header class="header">
            <div class="header__logo">
                <img class="header__logo-img" src="../../../assets/images/logo.svg" alt="logo image"> 
                <span class="header__logo-text">
                    Online Store
                </span>
            </div>
    </header>

    </div>
    </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap");
.header__logo {
    display: flex;
    align-items: center;
    padding-bottom: 36px;
  
  
    &-img {
        width: 91px;
        height: 72px;
    }
  
    &-text {
        display: inline-block;
        padding-left: 22px;
        font-weight: 600;
        font-size: 48px;
        color: #7E72F2;
  }
}

.header__logo-text {
    display: inline-block;
    padding-left: 22px;
    font-weight: 600;
    font-size: 48px;
    color: #7E72F2;   
}
</style>