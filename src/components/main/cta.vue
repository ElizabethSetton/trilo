<template>
    <div class="cta">
        <h2 class="cta__book-now">
            Good news! we have 4 free rooms for your selectet dates!
        </h2>
        <button class="btn">
            <span class="btn__visible">Book now</span>
            <span class="btn__invisible">only 4 room left</span>
        </button>
    </div>
</template>
<style lang="scss">
.cta {
    padding: 3.5rem 0;
    text-align: center;

    @media only screen and (max-width: $bp-medium) {
        padding: 2.5rem 0;
    }

    &__book-now {
        text-transform: uppercase;
        font-size: 2rem;
        font-weight: 300;
        margin-bottom: 2.5rem;
    }
}
</style>

