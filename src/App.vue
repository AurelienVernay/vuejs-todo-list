<template>
  <div id="app" class="h-100 d-flex flex-column justify-content-between">
    <a
      class="align-self-end"
      target="_blank"
      href="https://github.com/aurelienvernay/vuejs-todo-list"
    >
      <img
        width="149"
        height="149"
        src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
        class="attachment-full size-full"
        alt="Fork me on GitHub"
        data-recalc-dims="1"
      >
    </a>
    <div class="text-center">
      <h1>
        Application web exemple de liste
        <i>A faire</i>
      </h1>
      <p>
        Cette page est un exemple de webapp de gestion de listes de tâches à faire (todo).
        <br>Cette webapp a été écrite à l'aide du framework
        <a
          target="_blank"
          href="https://vuejs.org/"
        >Vue.js</a>, et le framework UI
        <a href="https://getbootstrap.com">Bootstrap</a>.
      </p>
    </div>
    <main class="flex-shrink-0">
      <div class="d-flex flex-column align-items-center justify-content-around">
        <div class="card bg-primary text-light">
          <div class="card-title">
            <h2>A faire</h2>
          </div>
          <Todo v-for="todo in todos" :todo.sync="todo" :key="todo.id"/>
          <span>{{ totalChecked }} / {{ listSize }} tâches effectuées</span>
        </div>
        <AddTodo @addTodo="onAddTodo($event)"/>
      </div>
    </main>
    <footer class="footer mt-auto py-3">
      <div class="container">
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

export default {
  name: "app",
  components: {
    Todo,
    AddTodo
  },
  data: function() {
    return {
      todos: [
        { id: 1, name: "Learn JavaScript", checked: true },
        { id: 2, name: "Learn Vue.js", checked: true },
        { id: 3, name: "Create a sample webapp", checked: true },
        { id: 4, name: "Choose nice tile colors", checked: false },
        { id: 5, name: "fix cards spacing", checked: false },
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
}
</style>
