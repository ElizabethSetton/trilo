<template>
    <div class="detail">
        <div class="description">
            <p class="paragraph">
                ipsum dolor sit amet consectetur adipisicing elit. 
                Corrupti similique libero explicabo, voluptatum aperiam, dignissimos dolorem enim ipsam ut ab amet voluptatem molestiae expedita tempora saepe voluptatibus eligendi totam illum.
                ipsum, dolor sit amet consectetur adipisicing elit. Ea magnam voluptas earum minima iure asperiores blanditiis repudiandae, repellat eveniet eos consectetur velit temporibus quaerat esse et ipsam sunt reprehenderit. Omnis!
            </p>
            <p class="paragraph">
                ipsum dolor sit amet consectetur adipisicing elit. 
                Corrupti similique libero explicabo, voluptatum aperiam, dignissimos dolorem enim ipsam ut ab amet voluptatem molestiae expedita tempora saepe voluptatibus eligendi totam illum.
                ipsum, dolor sit amet consectetur adipisicing elit. Ea magnam voluptas earum minima iure asperiores blanditiis repudiandae, repellat eveniet eos consectetur velit temporibus quaerat esse et ipsam sunt reprehenderit. Omnis!
            </p>
            <ul class="list">
                <li class="list__item">Close to the beach</li>
                <li class="list__item">Breakfast included</li>
                <li class="list__item">free airaport</li>
                <li class="list__item">free wifi in all rooms</li>
                <li class="list__item">pets allowed</li>
                <li class="list__item">perfect for familiesh</li>
                <li class="list__item">air condition</li>
                <li class="list__item">Close to the beach</li>
            </ul>
            <div class="recommend">
                <p class="recommend__count">
                    Lucy and 3 other friends recommend this hotel.
                </p>
                <div class="recommend__friends">
                    <img src="@/assets/user-3.jpg" alt="Friend 1" class="recommend__photo">
                    <img src="@/assets/user-4.jpg" alt="Friend 2" class="recommend__photo">
                    <img src="@/assets/user-5.jpg" alt="Friend 3" class="recommend__photo">
                    <img src="@/assets/user-6.jpg" alt="Friend 4" class="recommend__photo">
                </div>
            </div>
        </div>
        <div class="user-reviews">
            <figure class="review">
                <blockquote class="review__text">
                    ipsum, dolor sit amet consectetur adipisicing elit. Excepturi repellat rem nemo earum minus quisquam repellendus obcaecati quasi dolores dolorem itaq.
                </blockquote>
            <figcaption class="review__user">
                <img src="@/assets/user-1.jpg" alt="user 1" class="review__photo">
                <div class="review__user-box">
                    <p class="review__user-name">Nick Smith</p>
                    <p class="review__user-date">reb 23rd, 2019 </p>
                </div>
                <div class="review__rating">7.8</div>
            </figcaption>
            </figure>
                <figure class="review">
                    <blockquote class="review__text">
                        ipsum, dolor sit amet consectetur adipisicing elit. Excepturi repellat rem nemo earum minus quisquam repellendus obcaecati quasi dolores dolorem itaque.
                    </blockquote>
                <figcaption class="review__user">
                    <img src="@/assets/user-2.jpg" alt="user 1" class="review__photo">
                    <div class="review__user-box">
                        <p class="review__user-name">Elizabeth setton</p>
                        <p class="review__user-date">reb 18th, 2019 </p>
                    </div>
                    <div class="review__rating">9.0</div>
                </figcaption>
            </figure>
            <button class="btn-inline">Show all <span>&rarr;</span></button>
        </div>
    </div>
</template>
<style lang="scss">


.detail {
    font-size: 1.4rem;
    display: flex;
    padding: 4.5rem;
    background-color: var(--color-grey-light-1);
    border-bottom: var(--line);

    @media only screen and (max-width: $bp-medium) {
        padding: 3rem;
    }

    @media only screen and (max-width: $bp-small) {
        flex-direction: column;
    }
}

.description {
    
    background-color: #fff;
    box-shadow: var(--shadow-light);
    padding: 3rem;
    flex: 0 0 60%;
    margin-right: 4.5rem;

    @media only screen and (max-width: $bp-medium) {
        padding: 2rem;
        margin-right: 3rem;
    }

    @media only screen and (max-width: $bp-small) {
        margin-right: 0;
        margin-bottom: 3rem; 
    }

}

.user-reviews {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
}
.paragraph:not(:last-of-type) {
    margin-bottom: 2rem;
}

.list {
    list-style: none;
    margin: 3rem 0;
    padding: 3rem 0;
    border-top: var(--line);
    border-bottom: var(--line);

    display: flex;
    flex-wrap: wrap;

    &__item {
        flex: 0 0 50%;
        margin-bottom: .7rem;
    }

    &__item::before {
        content: "";
        display: inline-block;
        height: 1rem;
        width: 1rem;
        margin-right: .7rem;


        //older browsers
        background-image: url(../../assets/chevron-thin-right.svg);
        background-size: cover;

        //Newer browsers - mask

        @supports (-webkit-mask-image: url()) or (mask-image: url()) {
            background-color: var(--color-primary);
            -webkit-mask-image: url(../../assets/chevron-thin-right.svg);
            -webkit-mask-size: cover;
            mask-image: url(../../assets/chevron-thin-right.svg);
            mask-size: cover;
            background-image: none;
        }
    }
}

.recommend {
    font-size: 1.3rem;
    color: var(--color-grey-dark-3);
    display: flex;
    align-items: center;

    &__count {
        margin-right: auto;
    }
    &__friends {
        display: flex;
    }
    &__photo {
        box-sizing: content-box;
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        border: 3px solid #fff;


        &:not(:last-child) {
            margin-right: -2rem;
        }
    }
}

.review {
    background-color: #fff;
    box-shadow: var(--shadow-light);
    padding: 3rem;
    margin-bottom: 3.5rem;
    overflow: hidden;

    position: relative;

    @media only screen and (max-width: $bp-medium) {
        padding: 2rem;
        margin-bottom: 3rem;
    }


    &__text {
        margin-bottom: 2rem;
        z-index: 10;
        position: relative;
    }

    &__user { 
        display: flex;
        align-items: center;
    }

    &__photo {
        height: 4.5rem;
        width: 4.5rem;
        border-radius: 50%;
        margin-right: 1.5rem;
    }

    &__user-box {
        margin-right: auto;
    }

    &__user-name {
        font-size: 1.1rem;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: .4rem;

    }

    &__user-date {
        font-size: 1rem;
        color: var(--color-grey-dark-3);
    }

    &__rating {
        color: var(--color-primary);
        font-size: 2.2rem;
        font-weight: 300;
    }

    &::before {
        content: "\201C";
        position: absolute;
        line-height: 1;
        top: -2.75rem;
        left: -1rem;
        font-size: 20rem;
        color: var(--color-grey-light-2);
        font-family: sans-serif;
        z-index: 1;
    }
}

</style>
