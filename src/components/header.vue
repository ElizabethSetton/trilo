<template>
    <header class="header">
        <img src="@/assets/logo.png" alt="logo photo" class="logo">
        <form action="#" class="search">
            <input type="text" class="search__input" placeholder="Search hotels">
            <button class="search__button">
                <svg class="search__icon">
                    <use xlink:href="@/assets/sprite.svg#icon-magnifying-glass"></use>
                </svg>
            </button>
        </form>

        <nav class="user-nav">
            <div class="user-nav__icon-box">
                <svg class="user-nav__icon">
                    <use xlink:href="@/assets/sprite.svg#icon-bookmark"></use>
                </svg>
                <span class="user-nav__notification">7</span>
            </div>
            <div class="user-nav__icon-box">
                <svg class="user-nav__icon">
                    <use xlink:href="@/assets/sprite.svg#icon-chat"></use>
                </svg>
                <span class="user-nav__notification">13</span>
            </div>
            <div class="user-nav__user">
                <img src="@/assets/user.jpg" alt="user photo" class="user-nav__user-photo">
                <span class="user-nav__user-name">jonas</span>
            </div>
        </nav>
    </header>
</template>

<style lang="scss">
.header {
    font-size: 1.4rem;
    height: 7rem;
    background-color: var(--color-grey-light-1);
    border-bottom: var(--line);
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: $bp-smallest) {
        flex-wrap: wrap;
        align-content: space-around;
        height: 11rem;
    }

}
.logo {
    height: 3.25rem;
    margin-left: 2rem;

}
.search {
    flex: 0 0 40%;

    display: flex;
    align-items: center;
    justify-content: center;


    @media only screen and (max-width: $bp-smallest) {
        order: 1;    
        flex: 0 0 100%;
        background-color: var(--color-grey-light-2);
    }

    &__input {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        background-color: var(--color-grey-light-2);
        border: none;
        padding: .7rem 2rem;
        border-radius: 100px;
        width: 90%;
        transition: all .2s;
        margin-right: -3.5rem;

        &:focus {
           outline: none;
           width: 100%; 
           background-color: var(--color-grey-light-3);
        }

        &::-webkit-input-placeholder {
            font-weight: 100;
            color: var(--color-grey-light-4);
        }
    }

    &__input:focus + &__button {
        background-color: var(--color-grey-light-3);
    }
    &__button {
        border: none;
        background-color: var(--color-grey-light-2);

        &:focus {
            outline: none;

        }

        &:active {
            transform: translateY(2px);
        }
    }

    &__icon {
        height: 2rem;
        width: 2rem;
        fill: var(--color-grey-dark-3);
    }
}




.user-nav {
    align-self: stretch;

    display: flex;
    align-items: center;

    & > * {
        padding: 0 2rem;
        cursor: pointer;        
        height: 100%;
        display: flex;
        align-items: center; 
    }

    & > *:hover {
        background-color: var(--color-grey-light-2);
    }

    &__icon-box {
        position: relative;
    }

    &__icon {
        height: 2.25rem;
        width: 2.25rem;
        fill: var(--color-grey-dark-2);
    }

    &__notification {
        font-size: .8rem;
        height: 1.75rem;
        width: 1.75rem;
        border-radius: 50%;
        background-color: var(--color-primary);
        color: white;
        position: absolute;
        top: 1.5rem;
        right: 1.1rem;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__user-photo {
        height: 2.75rem;
        border-radius: 50%;
        margin-right: 1rem
    }
}
</style>

