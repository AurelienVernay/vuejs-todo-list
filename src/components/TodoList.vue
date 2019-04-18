<template>
  <div class="card bg-primary text-light">
    <div class="card-title">
      <h2>A faire</h2>
    </div>
    <Todo v-for="todo in todos" :todo.sync="todo" :key="todo.id"/>
    <span>{{ totalChecked }} / {{ listSize }} tâches effectuées</span>
  </div>
</template>


<script>
import Todo from "./Todo.vue";
export default {
  name: "Todo-list",
  components: { Todo },
  props: {
    todos: Array
  },
  computed: {
    listSize: function() {
      return this.todos.length;
    },
    totalChecked: function() {
      return this.todos.filter(todo => todo.checked === true).length;
    }
  }
};
</script>
<style scoped></style>