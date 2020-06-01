<template>
  <div id="app">
    <Todos v-bind:todos="todos" />
  </div>
</template>

<script>
import Todos from "./components/Todos";

export default {
  name: 'App',
  components: {
    Todos
  },
  data(){
    return {
      todos:[
        {
          id: 1,
          title: "Learn Vue JS Basic Consepts",
          completed: false
         },
        {
          id: 2,
          title: "Learn Vuex JS for state management",
          completed: false
        },
        {
          id: 3,
          title: "Apply learned knoledges in ypur app",
          completed: false
        },
      ]
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
