<template>
    <my-filter @on-search="fetchActors" @on-species="fetchActors"></my-filter>

    <div class="container">
        <characterCardList 
            :actors="actors"
        />
        <!-- Створюємо пагінацію -->

        <div class="pagination">
            <span>Page {{ current }}  of {{ totalPages }}</span>
            <span 
                :class="prevClass"
                @click="prevPage"
            >&#60;&#60; Prev</span>
            <span 
                :class="nextClass"
                @click="nextPage"
            >Next &#62;&#62;</span>

        </div>
    </div>

    
</template>

<script>
    import characterCardList from '@/components/CharacterCardList.vue'
    import axios from 'axios' 

    export default {
        components: {characterCardList},
        data() {
            return {
                linkPage: "https://rickandmortyapi.com/api/character?page=1",
                response: null, // оголосив зміну
                searchQuery: '',
                speciesActor: '',
                defaultFilter: {
                    name: '',
                    species: ''
                }
            }
        },
        methods: {
            prevPage() {
                this.linkPage = this.response.info.prev
                this.fetchActors(); 
            },
            nextPage() {
                this.linkPage = this.response.info.next
                this.fetchActors(); 
            },
            changeFilter() {
                this.fetchActors();
            },

            // filterData по дефолту писти обєкт, якщо є зміни у фільтрі передаємо пропс з фільтра @on-search
            async fetchActors(filterData = this.defaultFilter) {
                try {
                    const response = await axios.get(this.linkPage, {
                        params: {
                            name: filterData.name, 
                            species: filterData.species 
                        }
                    });
                    this.response = response.data //присвоїли значення змінної

                    console.log(response);

                } catch (e) {
                    console.log(e);
                    alert('Помилка');
                }
            },
            
        },
        mounted() {
            this.fetchActors();
        },
        computed: {
            current() {
                console.log(this.linkPage.split('page=')[1])
                return this.linkPage.split('page=')[1] // розбили стрічку на масив по слову page= і взяди другий ел
            },

            totalPages() { 
                // перевірка чи response не порожній 
                return this.response ? this.response.info.pages : 0 //скорочений if або тринарний оператор, де ? -- if , : -- else
            },
            actors() {
                return this.response ? this.response.results : []; // оголосив масив actors
            },
            prevClass() {
                return { 'disabled': this.current == 1 }
            },
            nextClass() {
                return { 'disabled': this.current == this.totalPages }
            },

            
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