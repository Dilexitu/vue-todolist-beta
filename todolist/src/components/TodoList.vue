<template>
  <div class="todo-container">
    <h2>Mijn To-Do's</h2>
    <input v-model="newTask" placeholder="Voeg een New Task toe" />
    <select v-model="selectedCategory">
      <option value="Homework">Homework</option>
      <option value="Read">Read</option>
      <option value="Projecten">Project</option>
      <option value="Reading">Reading</option>
    </select>
    <button @click="addTask">Voeg toe</button>

    <div v-if="tasks.length === 0" class="no-tasks">
      <p>Geen Task gevonden</p>
    </div>
    <ul v-else class="task-list">
      <li v-for="(task, index) in tasks" :key="index" class="task-item">
        <input type="checkbox" @click="removeTask(index)" />
        <span class="task-name">{{ task.name }} ({{ task.category }})</span>
        <button @click="removeTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      selectedCategory: 'Homework',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.tasks.push({ name: this.newTask, category: this.selectedCategory });
        this.newTask = '';
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap');

.todo-container {
  background-color: rgba(44, 44, 44, 0.9);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%; 
  max-width: 600px;
  margin: 0 auto; 
  transition: all 0.5s ease;
  border: 2px solid #dcd3b6; /* Elegant kader */
}

h2 {
  font-size: 2rem;
  color: #dcd3b6;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

input {
  width: 60%;
  margin-right: 10px;
  padding: 10px;
  border-radius: 4px;
  background-color: #333;
  color: #dcd3b6;
  border: 1px solid #666;
  transition: background-color 0.3s ease;
}

input:focus {
  background-color: #444;
}

select {
  background-color: #333;
  color: #dcd3b6;
  border: 1px solid #666;
  padding: 10px;
  margin-right: 10px;
  border-radius: 4px;
}

button {
  background-color: #b67f5b;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #925d42;
}

.no-tasks {
  color: #dcd3b6;
  font-style: italic;
}

.task-list {
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
}

.task-item {
  padding: 10px;
  border-bottom: 1px solid #444;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #dcd3b6;
  transition: background-color 0.3s ease;
}

.task-item:hover {
  background-color: #3b3b3b;
}

.task-name {
  flex-grow: 1;
}

.task-item button {
  background-color: #925d42;
  padding: 5px 10px;
}

.task-item button:hover {
  background-color: #744a31;
}

/* Checkbox styling */
input[type="checkbox"] {
  margin-right: 10px;
}
</style>
