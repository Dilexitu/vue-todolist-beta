<template>
    <div>
        <task-item v-for="task in tasks" :key="task.id" :task="task" @remove="removeTask(task.id)"
            @toggle-complete="toggleComplete(task.id)" />
    </div>
</template>

<script>
import TaskItem from './TaskItem.vue';
import { mapGetters } from 'vuex';

export default {
    components: { TaskItem },
    computed: {
        ...mapGetters(['allTasks']),
        tasks() {
            return this.allTasks;
        }
    },
    methods: {
        removeTask(taskId) {
            this.$store.dispatch('removeTask', taskId);
        },
        toggleComplete(taskId) {
            this.$store.dispatch('toggleComplete', taskId);
        }
    }
}
</script>

<style>
/* Voeg hier je stijlen toe */
</style>