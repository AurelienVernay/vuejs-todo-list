<template>
    <form class="form-group">
        <div class="d-inline-flex justify-content-around input-group">
            <input
                v-model="todo.name"
                class="form-control todo"
                type="text"
                :class="{ 'bg-gradient-success': todo.checked }"
            />
            <div class="input-group-append">
                <div class="input-group-text">
                    <input v-model="todo.checked" type="checkbox" />
                </div>
            </div>
            <div class="input-group-append">
                <button
                    type="button"
                    class="btn btn-danger"
                    @click="deleteTodo()"
                >
                    <i class="fa fa-times"></i>
                </button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'Todo',
    props: {
        todo: {
            type: Object,
            default: () => {
                return { id: null, name: '', checked: false };
            },
        },
    },
    methods: {
        deleteTodo: function() {
            this.$emit('delete', this.todo.id);
        },
    },
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
</style>
