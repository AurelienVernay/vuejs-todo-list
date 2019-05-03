<template>
    <div
        id="app"
        class="h-100 d-flex flex-column justify-content-between align-items-center"
    >
        <a href="https://aurelienvernay.github.io">
            <img src="./assets/logo.svg" width="300px" class="mb-3" />
        </a>
        <h1>
            Exemple d'application : Liste
            <i>A faire</i>
        </h1>
        <em
            >Utilisez le panneau "Ajouter un tâche à faire" pour saisir une
            tâche à faire.</em
        >
        <em>Cochez les cases des tâches que vous avez effectuées.</em>
        <div
            class="d-lg-flex flex-row justify-content-around align-items-center w-100"
        >
            <TodoList
                :todos="todos"
                class="m-2"
                @toggleAll="onToggleAll()"
                @deleteAll="onDeleteAll()"
                @deleteTodo="onDeleteTodo($event)"
            />
            <AddTodo class="m-2" @addTodo="onAddTodo($event)" />
        </div>
        <footer class="footer mt-auto py-3">
            <p class="my-3">
                Cette page est un exemple de webapp de gestion de listes de
                tâches à faire
                <em>(todo)</em>. <br />Cette webapp a été conçue à l'aide du
                framework
                <a href="https://vuejs.org/" target="_blank">Vue.js</a> et des
                framework UI
                <a href="https://getbootstrap.com" target="_blank">Bootstrap</a>
                et
                <a href="https://fontawesome.com" target="_blank"
                    >Font Awesome</a
                >.
            </p>
            <div class="container">
                <img src="./assets/logo-mini.svg" height="32" />
                <span class="text-muted">
                    2019 - Fait par Aurélien VERNAY (visitez mon
                    <a href="https://aurelienvernay.github.io">site web</a> pour
                    en savoir plus)
                </span>
            </div>
        </footer>
    </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue';
import TodoList from './components/TodoList.vue';

export default {
    name: 'App',
    components: {
        AddTodo,
        TodoList,
    },
    data: function() {
        return {
            checkAll: true,
            todos: [
                { id: 1, name: 'Apprendre le JavaScript', checked: true },
                { id: 2, name: 'Utiliser Vue.js', checked: true },
                { id: 3, name: 'Créer une application', checked: true },
                {
                    id: 5,
                    name: `Corriger l'espacement des cartes`,
                    checked: true,
                },
                {
                    id: 4,
                    name: 'Choisir de plus belles couleurs',
                    checked: false,
                },
                { id: 6, name: `Améliorer l'ergonomie `, checked: false },
            ],
        };
    },
    computed: {
        listSize: function() {
            return this.todos.length;
        },
        totalChecked: function() {
            return this.todos.filter(todo => todo.checked === true).length;
        },
    },
    methods: {
        onAddTodo: function(todo) {
            this.todos.push({ ...todo, id: this.todos.length + 1 });
        },
        onToggleAll: function() {
            this.todos.forEach(todo => (todo.checked = this.checkAll));
            this.checkAll = !this.checkAll;
        },
        onDeleteAll: function() {
            this.todos = [];
        },
        onDeleteTodo: function(todoId) {
            this.todos = this.todos.filter(todo => todo.id !== todoId);
        },
    },
};
</script>

<style>
html,
body {
    height: 100%;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
