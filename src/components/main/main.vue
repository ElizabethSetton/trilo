<template>
    <div class="content">
        <app-sidebar></app-sidebar>
        <main class="hotel-view">
            <app-gallery></app-gallery>
            <app-overview></app-overview>
            <app-detail></app-detail>
        </main>
    </div>
</template>

<script>
import Sidebar from './sidebar.vue'
import Gallery from './gallery.vue'
import Overview from './overview.vue'
import Detail from './detail.vue'
export default {
    components: {
        'app-sidebar': Sidebar,
        'app-gallery': Gallery,
        'app-overview': Overview,
        'app-detail': Detail

    }
}
</script>

<style lang="scss">
.content {
    display: flex;

    @media only screen and (max-width: $bp-medium) {
        flex-direction: column;
    }

}
.hotel-view {
    background-color: #fff;
    flex: 1;
}

</style>

