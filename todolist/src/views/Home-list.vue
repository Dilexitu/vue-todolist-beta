<template>
    <div>
        <h2>My task</h2>
        <button @click="openAddTaskModal">New Tasks</button>
        <task-list />
        <add-task-modal v-if="showModal" @close="closeAddTaskModal" />
    </div>
</template>

<script>
import TaskList from '../components/TaskList.vue';
import AddTaskModal from '../components/AddTaskModal.vue';

export default {
    components: { TaskList, AddTaskModal },
    data() {
        return {
            showModal: false
        };
    },
    methods: {
        openAddTaskModal() {
            this.showModal = true;
        },
        closeAddTaskModal() {
            this.showModal = false;
        }
    }
}
</script>