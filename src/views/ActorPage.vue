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
                    v-if="actor.fav"
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
            addFavorite() {
                this.actor.fav = true;
                this.$store.dispatch('addActorToFavorite', this.actor ); // створюєм назву і другий параметри сам актор

                // localStorage.setItem('actors', JSON.stringify(this.actor))
            },
            removeActorFromFavorite(actor) {
                this.actor.fav = false;
                this.$store.dispatch('removeActorFromFavorite', actor ) // створюєм назву і другий параметри сам актор
            },

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