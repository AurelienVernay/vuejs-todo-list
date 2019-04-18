<template>
  <div class="card bg-info text-light">
    <div class="card-body d-flex flex-column align-items-center">
      <div class="card-title">
        <h2>Ajouter une tâche à faire</h2>
      </div>
      <div class="input-group">
        <input id="newTodo" type="text" placholder="saisir une activité..." v-model="name">
        <div class="input-group-append">
          <button
            class="btn btn-success"
            type="button"
            @click="addTodo()"
            :disabled="name.length===0"
          >Ajouter</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddTodo",
  data: function() {
    return {
      name: ""
    };
  },
  methods: {
    addTodo: function() {
      const input = document.getElementById("newTodo");
      this.$emit("addTodo", {
        name: this.name,
        checked: false
      });
      input.value = "";
    }
  }
};
</script>
<style scoped>
</style>