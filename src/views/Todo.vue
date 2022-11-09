<template>
  <div class="container">
    <h1>Todo list</h1>

    <form @submit.prevent class="row_task row_task-head">
      <div class="col_task">
        <input
          type="text"
          placeholder="write a task"
          :value="txt"
          @input="inputTxt = $event.target.value"
        />
      </div>
      <div class="col_task">
        <select required @input="selectVal = $event.target.value">
          <option disabled selected value="">Category</option>
          <option
            v-for="category in sortCategories"
            :key="category.value"
            :value="category.value"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="col_task">
        <button @click="addTodo">Add</button>
      </div>
    </form>

    <div class="row_task row_task-body">
      <div class="col_task">
        <div class="row_todo" v-if="todosCategoryOne.length > 0">
          <div v-for="todoOne in todosCategoryOne" :key="todoOne.id">
            <span>{{ todoOne.date }}</span>
            {{ todoOne.txt }}
            <button @click="removeTodo(($event = todoOne.id))">✖</button>
          </div>
        </div>
        <div class="row_todo" v-else>
          <span style="color: #ffc107">no todos</span>
        </div>
      </div>
      <div class="col_task">
        <div class="row_todo" v-if="todosCategoryTwo.length > 0">
          <div v-for="todoTwo in todosCategoryTwo" :key="todoTwo.id">
            <span>{{ todoTwo.date }}</span>
            {{ todoTwo.txt }}
            <button @click="removeTodo(($event = todoTwo.id))">✖</button>
          </div>
        </div>
        <div class="row_todo" v-else>
          <span style="color: #ffc107">no todos</span>
        </div>
      </div>
      <div class="col_task">
        <div class="row_todo" v-if="todosCategoryThree.length > 0">
          <div v-for="todoThree in todosCategoryThree" :key="todoThree.id">
            <span>{{ todoThree.date }}</span>
            {{ todoThree.txt }}
            <button @click="removeTodo(($event = todoThree.id))">✖</button>
          </div>
        </div>
        <div class="row_todo" v-else>
          <span style="color: #ffc107">no todos</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todos: localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : [],
      txt: "",
      selectedSort: "",

      sortCategories: [
        { value: "category1", name: "Category 1" },
        { value: "category2", name: "Category 2" },
        { value: "work", name: "Work" },
      ],
    };
  },
  methods: {
    addTodo() {
      console.log("inputTxt", this.inputTxt.length);
      if (this.inputTxt.length < 1) {
        return false;
      }
      const today = new Date();
      const date = today.getMonth() + 1 + ". " + today.getFullYear();
      const newTodo = {
        id: today,
        txt: this.inputTxt,
        date: date,
        val: this.selectVal,
      };
      this.todos.push(newTodo);
      this.inputTxt = "";

      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    removeTodo(event) {
      this.todos = this.todos.filter((p) => p.id !== event);

      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
  computed: {
    todosCategoryOne() {
      return this.todos.filter(
        (item) => item.val == this.sortCategories[0].value
      );
    },
    todosCategoryTwo() {
      return this.todos.filter(
        (item) => item.val == this.sortCategories[1].value
      );
    },
    todosCategoryThree() {
      return this.todos.filter(
        (item) => item.val == this.sortCategories[2].value
      );
    },
  },
};
</script>
<style>
.row_task {
  display: flex;
  align-items: center;
}

.col_task {
  width: calc(100% / 3);
}

input[type="text"] {
  width: 100%;
  max-width: 300px;
}
</style>
