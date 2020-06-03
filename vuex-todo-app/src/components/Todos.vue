<template>
  <div>
    <h3>Todo App</h3>
    <div class="todos">
        <div v-for="todo in allTodos" v-bind:key="todo.id" class="todo">
{{todo.title}}
        </div>
    </div>
  </div> 
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Todos",
  computed: mapGetters(["allTodos"]),
  component: {}
};
</script>

<style lang="stylus" scoped></style>