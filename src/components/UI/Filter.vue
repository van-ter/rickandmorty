<template>
    <div class="wrapper_filter">
        <div class="container">
            <div class="row_filter">
                <div class="col_filter">
                    <label>
                        <input 
                            type="radio" 
                            value="" 
                            v-model="speciesActor" 
                            @change="changeFilter" 
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            value="human" 
                            v-model="speciesActor" 
                            @change="changeFilter" />
                        <span>Humen</span>
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            value="animal" 
                            v-model="speciesActor" 
                            @change="changeFilter" />
                        <span>Animal</span>
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            value="alien" 
                            v-model="speciesActor" 
                            @change="changeFilter" />
                        <span>Alien</span>
                    </label>
                </div>
                <div class="col_search">
                    <my-input
                        v-model="actorName"
                        placeholder="Search actor"
                    ></my-input>

                    <my-button
                        @click="search"
                    >Search</my-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'my-filter', 

        data() {
            return {
                // створюєм ключ із назвою актора який буде прописаний в інпуті
                actorName: '',
                speciesActor: ''
            }
        }, 
        methods: {
            search() {
                // $emit - прокидує івент на гору, перше це імя події(виклечимо в батька @on-search="fetchActors") а друге значення
                this.$emit('onSearch', {name: this.actorName});
            },
            changeFilter() {
                // $emit - прокидує івент на гору, перше це імя події(виклечимо в батька @on-species="fetchActors") а друге значення
                this.$emit('onSpecies', {species: this.speciesActor})
            }
        }
    }
</script>
<style>
    .wrapper_filter {
        background: #eee;
    }
    .row_filter {
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }
    .col_search button.btn {
        margin-left: 10px;
    }

    .col_filter {
        display: inline-flex;
        border: 1px solid #0f2b46;
        border-radius: 6px;
        overflow: inherit;
    }
    .col_filter span {
        display: inline-flex;
        align-items: center;
        height: 29px;
        padding: 0 10px;
        cursor: pointer;
    }
    .col_filter input {
        display: none;
    }
    .col_filter label + label {
        border-left: 1px solid #0f2b46;
    }
    .col_filter :checked+span {
        background: #0f2b46;
        color: #fff;
        pointer-events: none;
    }
</style>