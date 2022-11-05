<template>
    <div class="container">
        <div class="row_main_actor">
            <div class="col_actor_info">
                <h1>{{ actor.name }}</h1>
                <p>{{ actor.species }} - {{ actor.status }}</p>
                <!-- перевірка чи дані не порожні -->
                <p>Last known location: {{ actor.location && actor.location.name }}</p>
                <p>First seen in: {{ actor.episode && actor.episode[0] }}</p>
                <div v-if="actor.episode">
                    <strong>All seen in:</strong>
                    <ul>
                        <!-- пробігтись по масиву даних episode і передаєм свою змінну і індекс -->
                        <li v-for="(episodeOne, $index) in actor.episode" :key="$index">
                            {{ episodeOne }}
                        </li>
                    </ul>
                </div>
                
                <my-button 
                    @click="changeFav"
                >
                    <span v-if="fav">Remove from Favourites</span>
                    <span v-else >Add to Favorites</span>
                </my-button>
            </div>
            <div class="col_actor_img">
                <img :src="actor.image" :alt="actor.name">
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                response: null, // оголосив зміну
            }
        },
        methods: {
            async fetchActor() {
                try {
                    const response = await axios.get("https://rickandmortyapi.com/api/character/" + this.$route.params.id);
                    this.response = response.data //присвоїли значення змінної

                    console.log(response);

                } catch (e) {
                    console.log(e);
                    alert('Помилка');
                }
            }
        },
        mounted() {
            this.fetchActor();
        },
        computed: {
            actor() {
                return this.response ? this.response : {}; // оголосив масив actors
            }
        } 
    }
</script>

<style>
    .row_main_actor {
        background-color: #fafafa;
        display: flex;
        justify-content: space-between;
        border-radius: 20px;
        overflow: hidden;
    }
    .col_actor_info {
        padding: 20px 30px;
    }
    .col_actor_info button.btn {
        margin-top: 20px;
    }
</style>