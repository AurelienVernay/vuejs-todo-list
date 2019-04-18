<template>
  <form class="form-group">
    <div class="d-inline-flex justify-content-around input-group">
      <input class="form-control" type="text" v-model="todo.name">
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
.form-group {
  margin: 1em;
}
</style>
