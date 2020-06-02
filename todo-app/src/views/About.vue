<template>
  <div id="app">
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import axios from "axios";

// {
//           id: 1,
//           title: "Learn Vue JS Basic Consepts",
//           completed: false
//          },
//         {
//           id: 2,
//           title: "Learn Vuex JS for state management",
//           completed: true
//         },
//         {
//           id: 3,
//           title: "Apply learned knoledges in ypur app",
//           completed: false
//         },


export default {
  name: 'About',
  components: {
    Todos, AddTodo
  },
  data(){
    return {
      todos:[]
    }
  },
  methods: {
    deleteTodo(id){
       axios.post(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res=>this.todos = this.todos.filter(todo=> todo.id!==res.id)).catch(err=>console.log(err))
      // this.todos = this.todos.filter(todo=> todo.id!==id)
    },
    addTodo(newTodo){
      const {title, completed} = newTodo;
      axios.post("https://jsonplaceholder.typicode.com/todos", {title, completed})
      .then(res=>this.todos=[...this.todos, res.data]).catch(err=>console.log(err)
    )
      // this.todos=[...this.todos, newTodo]; 
    }  
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=>this.todos = res.data).catch(err=>console.log(err)
    )
  }
}
</script>

<style>
 
</style>

