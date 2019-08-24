import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {},
  actions: {},
  getters: {
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id);
    }
  }
});
