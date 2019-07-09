<template>
    <div class="overview">
        <h1 class="overview__heading">
            Hotel las palams
        </h1>
        <div class="overview__starts">
            <svg class="overview__icon-star">
                <use xlink:href="@/assets/sprite.svg#icon-star"></use>
            </svg>
            <svg class="overview__icon-star">
                <use xlink:href="@/assets/sprite.svg#icon-star"></use>
            </svg>
            <svg class="overview__icon-star">
                <use xlink:href="@/assets/sprite.svg#icon-star"></use>
            </svg>
            <svg class="overview__icon-star">
                <use xlink:href="@/assets/sprite.svg#icon-star"></use>
            </svg>
        </div>
        <div class="overview__location">
            <svg class="overview__icon-location">
                <use xlink:href="@/assets/sprite.svg#icon-location-pin"></use>
            </svg>
            <button class="btn-inline">Alubfeira, Portugal</button>
            <div class="overview__rating">
                <div class="overview__rating-average">8.6</div>
                <div class="overview__rating-count">429 votes</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.overview {
    display: flex;
    border-bottom: var(--line);
    align-items: center;

    &__heading {
        font-size: 2.25rem;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 1.5rem 3rem;

        @media only screen and (max-width: $bp-small) {
            font-size: 1.8rem;
            padding: 1.25rem 2rem;
        }

    }   
    &__starts {
        margin-right: auto;
        display: flex;

    }
    &__icon-star,
    &__icon-location {
        width: 1.75rem;
        height: 1.75rem;
        fill: var(--color-primary);
    }
    &__location {
        font-size: 1.2rem;
        display: flex;
        align-items: center;
    }

    &__icon-location {
        margin-right: .5rem;
    }

    &__rating {
        background-color: var(--color-primary);
        margin-left: 3rem;
        color: #fff;
        padding: 0 2.25rem;
        align-self: stretch;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media only screen and (max-width: $bp-medium) {
            padding: 0 1.5rem;
        }

    }
    &__rating-average {
        font-size: 2.25rem;
        font-weight: 300;
        margin-bottom: -3px;

        @media only screen and (max-width: $bp-medium) {
            font-size: 1.8rem;  
        }
    }
    &__rating-count {
        font-size: .8rem;
        text-transform: uppercase;

        @media only screen and (max-width: $bp-medium) {
            font-size: .5rem;  
        }
    }
}
</style>

