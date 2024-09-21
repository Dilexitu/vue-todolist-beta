<template>
    <div class="task-card" 
         :class="{ completed: task.completed }" 
         draggable="true" 
         @dragstart="$emit('drag-start', task)" 
         @dragend="$emit('drag-end', task)" 
         @dragover.prevent 
         @drop="$emit('drop', task)">
        <h3>{{ task.title }}</h3>
        <p>Deadline: {{ task.deadline }}</p>
        <p>Priority: {{ task.priority }}</p>
        <div class="button-container">
            <button @click="$emit('toggle-complete')" class="toggle-button">
                Mark as  {{ task.completed ? 'niet Finished' : 'Finished' }}
            </button>
            <button @click="$emit('remove')" class="remove-button">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        task: Object
    }
}
</script>

<style>
.task-card {
    background-color: #3e3e3e; /* Donkergrijze achtergrond */
    margin: 10px 0;
    padding: 15px;
    border-radius: 8px;
    border: 2px dashed #d4af37; /* Gestreepte gouden rand */
    transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.task-card:hover {
    transform: translateY(-5px); /* Iets omHigh bij hover */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.completed {
    text-decoration: line-through;
    color: #888; /* Donkergrijs voor Finished */
}

.button-container {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    font-family: 'Georgia', serif;
}

.toggle-button {
    background-color: #d4af37; /* Goudkleur */
    color: #fff;
}

.toggle-button:hover {
    background-color: #b59429; /* Donkerder goud bij hover */
    transform: scale(1.05);
}

.remove-button {
    background-color: #c0392b; /* Rood voor Deleteen */
    color: #fff;
}

.remove-button:hover {
    background-color: #a93226; /* Donkerder rood bij hover */
    transform: scale(1.05);
}
</style>
