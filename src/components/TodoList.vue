<template>
    <div class="card bg-light text-light min-width">
        <div class="card-body">
            <h2 class="text-primary">A faire</h2>
            <div class="card-body d-flex justify-content-between">
                <button class="btn btn-primary" @click="toggleAll()">
                    <i class="fa fa-check"></i> Cocher / Décocher tous
                </button>
                <button class="btn btn-danger" @click="deleteAll()">
                    <i class="fa fa-times"></i> Supprimer tous
                </button>
            </div>
            <Todo
                v-for="todo in todos"
                :key="todo.id"
                :todo.sync="todo"
                @delete="deleteTodo($event)"
            />
            <p class="text-dark">
                {{ totalChecked }} / {{ listSize }} tâches effectuées
            </p>
        </div>
    </div>
</template>

<script>
import Todo from './Todo.vue';
export default {
    name: 'TodoList',
    components: { Todo },
    props: {
        todos: {
            required: true,
            type: Array,
            default: () => {
                return [];
            },
        },
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
        deleteAll: function() {
            this.$emit('deleteAll');
        },
        toggleAll: function() {
            this.$emit('toggleAll');
        },
        deleteTodo: function(todoId) {
            this.$emit('deleteTodo', todoId);
        },
    },
};
</script>
<style scoped></style>
