<template>
  <router-link :to="{ name: 'todo', params: { id: todo.id } }"
    ><v-card max-width="344" class="mx-auto" color="primary">
      <v-card-title>{{ todo.title }}</v-card-title>
      <v-card-text>{{ todo.body }}</v-card-text>
    </v-card></router-link
  >
</template>

<script>
export default {
  props: {
    todo: Object
  }
};
</script>

<style scoped>
h4 {
  /* color: greenyellow; */
}
</style>
