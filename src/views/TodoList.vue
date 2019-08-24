<template>
  <div>
    <h1>Todo Listing</h1>
    <TodoCard
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      class="event-card"
    />
  </div>
</template>

<script>
import TodoCard from "@/components/TodoCard.vue";
import TodoService from "@/services/TodoService.js";
export default {
  name: "todos",
  components: {
    TodoCard
  },
  data() {
    return {
      todos: []
    };
  },
  created() {
    TodoService.getTodos()
      .then(response => {
        this.todos = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.event-card {
  margin: 5em;
}
</style>
