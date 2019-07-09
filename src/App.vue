<template>
  <div class="container">
    <app-header></app-header>
    <app-main></app-main>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Main from './components/main/main.vue'
export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-main': Main
  }
}
</script>

<style lang="scss">
:root {
    --color-primary: #eb2f64;
    --color-primary-light: #FF3366;
    --color-primary-dark: #BA265D;

    --color-grey-light-1: #faf9f9;
    --color-grey-light-2: #f4f2f2;
    --color-grey-light-3: #f0eeee;
    --color-grey-light-4: #ccc;
    
    --color-grey-dark-1: #333;
    --color-grey-dark-2: #777;
    --color-grey-dark-3: #999;


    --shadow-dark: 0 2rem 6rem rgbao(0, 0, 0, .3);
    --shadow-light: 0 2rem 5rem rgba(0, 0, 0, .06);
    --line: 1px solid var(--color-grey-light-2);

}

* {
    margin: 0;
    padding: 0;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%; 

    @media only screen and (max-width: $bp-large) {
        font-size: 50%;
    }
}

body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: var(--color-grey-dark-2);
    background-image: linear-gradient(to right bottom, var(--color-primary-light), var(--color-primary-dark));
    background-size: cover;
    background-repeat: no-repeat;

    min-height: 100vh;
}
.container {
    max-width: 120rem;
    margin: 8rem auto;
    background-color: var(--color-grey-light-1);
    box-shadow: var(--shadow-dark);

    min-height: 50rem;

    @media only screen and (max-width: $bp-largest) {
        margin: 0;
        max-width: 100%;
        width: 100%;
    }
}
.btn {
    font-size: 1.5rem;
    border: none;
    font-weight: 300;
    text-transform: uppercase;
    border-radius: 100px;
    background-image: linear-gradient(to right, var(--color-primary-light), var(--color-primary-dark));
    color: #fff;
    position: relative;
    overflow: hidden;
    cursor: pointer;

     & > * {
        height: 100%;
        width: 100%;
        display: inline-block;
        transition: all .2s;
    }
    &__visible {
        padding: 2rem 7.5rem;
    }

    &__invisible {
        position: absolute;
        padding: 2rem 0;
        left: 0;
        top: -100%;
       
    }

    &:hover {
        background-image: linear-gradient(to left, var(--color-primary-light), var(--color-primary-dark)); 
    }

    &:hover &__visible {
        transform: translateY(100%);
    }
    &:hover &__invisible {
        top: 0;
    }

    &:focus {
        outline: none;
        animation: pulsate 1s infinite;
    }
}

.btn-inline {
    border: none;
    color: var(--color-primary);
    font-size: inherit;
    border-bottom: 1px solid currentColor;
    padding-bottom: 2px;
    display: inline-block;
    background-color: transparent;
    cursor: pointer;
    transition: all .2s;

    & span {
        margin-left: 3px;
        transition: margin-left .2s;
    }
    &:hover {
        color: var(--color-grey-dark-1);

        span {
            margin-left: 8px;
        }
    }


    &:focus {
        outline: none;
        animation: pulsate 1s infinite;

    }

}

@keyframes pulsate {
    0% {
        transform: scale(1); 
        box-shadow: none;
    }

    50% {
        transform: scale(1.05); 
        box-shadow: 0 1rem 4rem rgba(0, 0, 0, .25);
    }

    100% {
        transform: scale(1); 
        box-shadow: none
    }
}
</style>
