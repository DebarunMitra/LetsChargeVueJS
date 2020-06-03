import axios from 'axios';

const state = {
  todos: [
    {
              id: 1,
              title: "Learn Vue JS Basic Consepts",
              completed: false
             },
            {
              id: 2,
              title: "Learn Vuex JS for state management",
              completed: true
            },
            {
              id: 3,
              title: "Apply learned knoledges in ypur app",
              completed: false
            },
  ],
};

const getters = {

    allTodos: (state)=> state.todos
};

const actions = {};

const mutations = {};


export default {
    state,
    getters,
    actions,
    mutations
}