<template>
  <v-app>
    <v-app-bar app color="primary"
      ><v-toolbar-title>Todos with Django and Vue</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
        >{{ link.label }}</v-btn
      >
    </v-app-bar>
    <!-- Home -->
    <v-content>
      <v-container class="fill-height" fluid
        ><v-row align="center" justify="center"
          ><router-view></router-view></v-row></v-container
    ></v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      links: [
        { label: "Home", url: "/" },
        { label: "Todos", url: "/todos" },
        { label: "Create Todo", url: "/create" }
      ]
    };
  }
};
</script>
