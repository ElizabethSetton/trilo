<template>
    <div class="gallery">
        <figure class="gallery__item">
            <img src="@/assets/hotel-1.jpg" alt="photo of hotel" class="gallery__photo">
        </figure>
        <figure class="gallery__item">
            <img src="@/assets/hotel-2.jpg" alt="photo of hotel" class="gallery__photo">
        </figure>
        <figure class="gallery__item">
            <img src="@/assets/hotel-3.jpg" alt="photo of hotel" class="gallery__photo">
        </figure>
    </div>
</template>
<style lang="scss">

.gallery {
    display: flex;

    &__photo {
        width: 100%;
        display: block;
    }

    &__item {

    }
}
</style>

