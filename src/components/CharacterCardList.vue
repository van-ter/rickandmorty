<template>
    <div v-if="actors.length > 0" class="row_acter"> 
        <transition-group name="user-list">
            <characterCard  
                v-for="actor in actors" 
                :actor = "actor"
                :key="actor.id" 
            />
        </transition-group>
    </div>
    <div v-else class="row_acter">
        <h3 style="color:red">No actors</h3>
    </div>

</template>
<script>
    import characterCard from '@/components/CharacterCard.vue' 

    export default {
        components: {characterCard},
        props: {
            actors: {
                type: Array,
                required: true
            }
        }
        
    }
</script>
<style>
    .row_acter {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -10px;
    }
</style>