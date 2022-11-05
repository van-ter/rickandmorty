<template>
    <div class="wrapper_filter">
        <div class="container">
            <div class="row_filter">
                <div class="col_filter">
                    <span>qwe</span>
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
                actorName: ''
            }
        }, 
        methods: {
            search() {
                // $emit - прокидує івент на гору, перше це імя події а друге значення
                this.$emit('onSearch', {name: this.actorName})
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
</style>