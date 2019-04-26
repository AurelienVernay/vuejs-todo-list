<template>
    <div class="card bg-info text-light">
        <div
            class="card-body d-flex flex-column align-items-center justify-content-around"
        >
            <h2>Ajouter une tâche à faire</h2>
            <label for="newTodo">Nom de la tâche</label>
            <input
                id="newTodo"
                v-model="name"
                type="text"
                placholder="saisir une activité..."
            />
            <button
                class="btn btn-success mt-2"
                type="button"
                :disabled="name.length === 0"
                @click="addTodo()"
            >
                Ajouter
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AddTodo',
    data: function() {
        return {
            name: '',
        };
    },
    methods: {
        addTodo: function() {
            const input = document.getElementById('newTodo');
            this.$emit('addTodo', {
                name: this.name,
                checked: false,
            });
            this.name = '';
            input.value = '';
        },
    },
};
</script>
<style scoped></style>
