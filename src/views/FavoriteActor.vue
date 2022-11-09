<template>
    <div class="container">
        <!-- <h1>{{ $store.state.likes }}</h1>
        <div>
            <my-button @click="$store.commit('changeLikePlus')">+</my-button>
            <my-button @click="$store.commit('changeLikeMinus')">-</my-button>
        </div> -->
        <characterCardList 
            :actors="actors"
        />
    </div>
</template>

<script>
    import characterCardList from '@/components/CharacterCardList.vue'
    import axios from 'axios' 

    export default {
        components: {characterCardList},
        data() {
            return {
            }
        },
        methods: {
        },
        mounted() {
            // this.fetchActors();
        },
        computed: {
            actors() {
                // console.log(this.$store.state.actorCarts);
                return this.$store.state.favoriteActor
            }
        }
    }
</script>

<style>
.characterCard_info-status {
    margin-bottom: 6px;
}

.pagination {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 40px;
}

.pagination .disabled {
    color: #dbdbdb;
}

.pagination span {
    padding: 3px 10px;
}

.pagination span + span:not(.disabled) {
    cursor: pointer;
}
</style>