<template>
  <form class="form-group">
    <div class="d-inline-flex justify-content-around input-group">
      <input
        class="form-control todo"
        type="text"
        v-model="todo.name"
        v-bind:class="{complete: todo.checked}"
      >
      <div class="input-group-append">
        <div class="input-group-text">
          <input type="checkbox" v-model="todo.checked">
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Todo",
  props: {
    todo: {
      name: String,
      checked: Boolean
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo {
  transition: background-color 0.3s;
}
.form-group {
  margin: 1em;
}
.complete {
  background: rgba(160, 255, 160, 1);
}
</style>
