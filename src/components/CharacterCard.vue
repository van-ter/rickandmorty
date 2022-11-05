<template> 
    <div class="characterCard_wrapper">
        <RouterLink :to="{ path: `actor/${actor.id}`}" class="characterCard_img">
            <img :src="actor.image" :alt="actor.name">
        </RouterLink>
        <!-- <div @click="$router.push(`/actor/${actor.id}`)" class="characterCard_img">
            <img :src="actor.image" :alt="actor.name">
        </div> -->
        <div class="characterCard_info">
            <div class="characterCard_info-name">{{ actor.name }}</div>
            <div class="characterCard_info-status">{{ actor.species }} - {{ actor.status }}</div>
            <my-button 
                @click="changeFav"
            >
                <span v-if="fav">Remove from Favourites</span>
                <span v-else >Add to Favorites</span>
            </my-button>

        </div>
    </div>
</template>
<script>
    export default {
        props: {
            actor: {
                type: Object,
                required: true,
                fav: true
            },
            fav: {
                type: String // очікуємо тип з якоюсь назвою
            }
        },
        methods: {
            changeFav(event) {
                console.log(event);
            }
        },
        mounted() {
        },
        computed: {
            // linkActor() {
            //     return `/actor/${this.actor.id}`
            // }
        }
    }
</script>
<style>
    .characterCard_wrapper {
        margin: 10px;
        border-radius: 8px;
        overflow: hidden;
        background: #f3f3f3;
        width: 15%;
    }
    .characterCard_info-status {
        margin-bottom: 6px;
    }
    .characterCard_info {
        padding: 6px;
    }
    .characterCard_img {
        height: 160px;
        overflow: hidden;
        object-fit: cover;
        display: flex;
    }
    .characterCard_img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>