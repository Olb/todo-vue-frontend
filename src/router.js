import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import TodoList from "./views/TodoList.vue";
import TodoShow from "./views/TodoShow.vue";
import CreateTodo from "./views/CreateTodo.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/todos",
      name: "todos",
      component: TodoList
    },
    {
      path: "/todo/:id",
      name: "todo",
      component: TodoShow,
      props: true
    },
    {
      path: "/create",
      name: "create",
      component: CreateTodo
    }
  ]
});
