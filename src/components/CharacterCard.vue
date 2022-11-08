<template> 
    <div class="characterCard_wrapper">
        <RouterLink :to="{ path: `actor/${actor.id}`}" class="characterCard_img">
            <img :src="actor.image" :alt="actor.name">
        </RouterLink>
        <div class="characterCard_info">
            <div class="characterCard_info-name">{{ actor.name }}</div>
            <div class="characterCard_info-status">{{ actor.species }} - {{ actor.status }}</div>
            <my-button
                v-if="isActorFavorite"
                @click.prevent="removeActorFromFavorite(actor)"
            >
                Remove from Favourites
            </my-button>
            <my-button 
                v-else 
                @click="addFavorite"
            >
                Add to Favorites
            </my-button>
        </div>
    </div>
</template>
<script>
    // import router from '@/components/router';

    export default {
        props: {
            actor: {
                type: Object,
                required: true,
            }
        },
        methods: {
            addFavorite() {
                this.$store.dispatch('addActorToFavorite', this.actor ); // створюєм назву і другий параметри сам актор

                // localStorage.setItem('actors', JSON.stringify(this.actor))
            },
            removeActorFromFavorite(actor) {
                this.$store.dispatch('removeActorFromFavorite', actor ) // створюєм назву і другий параметри сам актор
            }
        },
        mounted() {
        },
        computed: {
            isActorFavorite () {
                // передаємо true false через гетер
                return this.$store.getters['isActorFavorite'](this.actor)
            } 
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