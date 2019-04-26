<template>
    <div class="card bg-light text-light min-width">
        <div
            class="card-body d-flex flex-column align-items-center justify-content-around"
        >
            <h2 class="text-primary">Ajouter une tâche à faire</h2>
            <div class="d-flex align-items-center justify-content-around">
                <label class="text-primary mr-1" for="newTodo"
                    >Nom de la tâche :
                </label>
                <input
                    id="newTodo"
                    v-model="name"
                    type="text"
                    placholder="saisir une activité..."
                    @keyup.enter="addTodo()"
                />
                <button
                    class="btn btn-success ml-2"
                    type="button"
                    :disabled="name.length === 0"
                    @click="addTodo()"
                >
                    Ajouter
                </button>
            </div>
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
