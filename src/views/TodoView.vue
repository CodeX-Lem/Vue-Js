<template>
  <div class="container shadow-sm" style="height: 100vh; padding: 0; overflow: none">
    <!-- Row -->
    <!-- Upper -->
    <div
      class="col-12 p-3 d-flex flex-column justify-content-center align-items-center shadow-sm"
      style="background-color: #dcdcdc"
    >
      <h1>TO-DO List</h1>
      <div class="form-group d-flex gap-4 p-3">
        <input
          @keydown="enter"
          v-model="newTodo"
          type="text"
          class="form-control"
          placeholder="Add items here..."
          style=""
        />
        <button @click="addTodo" class="btn btn-success fw-bold">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
    <!-- Lower -->
    <div class="col-12" style="height: 100vh; overflow-y: auto">
      <div class="list h-100 p-2" style="background-color: #ffffff">
        <ul style="list-style: none">
          <li
            :class="{ completed: todo.completed }"
            class="d-flex justify-content-between p-3 border mt-3 me-4 rounded shadow-sm"
            v-for="(todo, index) in todos"
            :key="index"
          >
            <div class="form-check">
              <input type="checkbox" class="form-check-input mt-2" v-model="todo.completed" />
              <label
                :class="{
                  'text-dark': !todo.completed,
                  'completed-text': todo.completed
                }"
                class="ms-1"
                style="font-size: clamp(8px, 5vw, 24px)"
              >
                {{ todo.text }}
              </label>
            </div>
            <button @click="removeTodo(index)" class="btn btn-danger">
              <i class="fa-solid fa-trash"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      newTodo: ''
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        this.todos.push({ text: this.newTodo, completed: false })
        this.newTodo = ''
      }
    },

    removeTodo(index) {
      this.todos.splice(index, 1)
    },

    enter(e) {
      if (e.key == 'Enter') this.addTodo()
    }
  }
}
</script>

<style>
.completed {
  background-color: #808080;
  color: #ffffff;
}

.completed-text {
  text-decoration: line-through;
  font-style: italic;
}
.container {
  overflow: hidden;
}
</style>
