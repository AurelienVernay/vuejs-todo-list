<template>
  <div id="app" class="h-100 d-flex flex-column justify-content-between align-items-center">
    <a href="https://aurelienvernay.github.io">
      <img src="./assets/logo.svg" width="300px" class="mb-3">
    </a>
    <h1>
      Exemple d'application : Liste
      <i>A faire</i>
    </h1>
    <em>Utilisez le panneau "Ajouter un tâche à faire" pour saisir une tâche à faire.</em>
    <em>Cochez les cases des tâches que vous avez effectuées.</em>
    <Todo-list :todos="todos" class="my-3"/>
    <AddTodo @addTodo="onAddTodo($event)" class="my-3"/>
    <p class="my-3">
      Cette page est un exemple de webapp de gestion de listes de tâches à faire
      <em>(todo)</em>.
      <br>Cette webapp a été conçue à l'aide du framework
      <a
        target="_blank"
        href="https://vuejs.org/"
      >Vue.js</a> et du framework UI
      <a href="https://getbootstrap.com">Bootstrap</a>.
    </p>
    <footer class="footer mt-auto py-3">
      <div class="container">
        <img src="./assets/logo-mini.svg" height="32">
        <span class="text-muted">
          2019 - Fait par Aurélien VERNAY (visitez mon
          <a
            href="https://aurelienvernay.github.io"
          >site web</a> pour en savoir plus)
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";
import AddTodo from "./components/AddTodo.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "app",
  components: {
    AddTodo,
    TodoList
  },
  data: function() {
    return {
      todos: [
        { id: 1, name: "Learn JavaScript", checked: true },
        { id: 2, name: "Learn Vue.js", checked: true },
        { id: 3, name: "Create a sample webapp", checked: true },
        { id: 5, name: "fix cards spacing", checked: true },
        { id: 4, name: "Choose nice tile colors", checked: false },
        { id: 6, name: "enhance todo appearance", checked: false }
      ]
    };
  },
  computed: {
    listSize: function() {
      return this.todos.length;
    },
    totalChecked: function() {
      return this.todos.filter(todo => todo.checked === true).length;
    }
  },
  methods: {
    onAddTodo: function(todo) {
      this.todos.push({ ...todo, id: this.todos.length + 1 });
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.footer {
  background-color: #f5f5f5;
  width: 100%;
}

.ribbon {
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
}
</style>
