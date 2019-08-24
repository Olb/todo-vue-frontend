<template>
  <div>
    <h1>{{ todo.title }}</h1>
    <p>{{ todo.body }}</p>
    <p>{{ getTodoById(1) }}</p>
  </div>
</template>

<script>
import TodoService from "@/services/TodoService.js";
import { mapGetters } from "vuex";

export default {
  props: ["id"],
  computed: {
    ...mapGetters(["getTodoById"])
  },
  data() {
    return {
      todo: {}
    };
  },
  created() {
    TodoService.getTodo(this.id)
      .then(response => {
        this.todo = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
