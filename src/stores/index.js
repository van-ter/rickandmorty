import {createStore} from "vuex"
import axios from "axios";

export default createStore({
    state: {
        favoriteActor: localStorage.getItem('actors') ? JSON.parse(localStorage.getItem('actors')) : []
    },
    getters: {
        // dobleLike(state) {
        //     return state.likes * 2
        // }

        //загальна кількість фаворитів
        numberFavorite(state) {
            return state.favoriteActor.length
        },

        isActorFavorite: (state) => (actor) => {
            // метод some вертає true або false якщо хочаб один ел пройде умову
            return state.favoriteActor.some(item => item.id === actor.id)
        }

    },
    mutations: {

        changeLikePlus(state) {
            state.likes ++
        },
        changeLikeMinus(state) {
            state.likes --
        },
        // console.log(changeListFavorite)
 
        // визиваємо коміт який створили у actions передаєм state і другий параметр actor
        ADD_ACTOR_TO_FAVORITE (state, actor) {
            //створюєм перевірку чи цей actor немає у нашому списку по id
            let actorInFavorite = state.favoriteActor.find(item => {
                return item.id === actor.id
            })
            //якщо є то зупиняємо команду
            if(actorInFavorite) {
                return
            }

            //якщо немає тоді додаємо до масиву із state.favoriteActor нашого actor
            state.favoriteActor.push(actor);

            localStorage.setItem('actors', JSON.stringify(state.favoriteActor))

        },

        REMOVE_LIST_FAVORITE(state, actor) {
            //фільтруємо всі акторів і повертаємо всіх акторів в яких id не дорівнює id актора якого передали
            state.favoriteActor = state.favoriteActor.filter(item => {
                return item.id !== actor.id
            });

            //
            localStorage.setItem('actors', JSON.stringify(state.favoriteActor))
        }
        
    },
    actions: {
        // сюди з шаблона передаємо назву і другий параметри сам актор
        addActorToFavorite({ commit }, actor) { 
            //створюєм новий коміт для мутації і передаємо actor
            commit('ADD_ACTOR_TO_FAVORITE', actor)
        },
        removeActorFromFavorite({ commit }, actor) { 
            commit('REMOVE_LIST_FAVORITE', actor)
        },

        qwe() {
            console.log('qwe')
        }
        
        
    },
    modules: {

    }
})