<template>
    <div class="modal">
        <h2>New Task</h2>
        <input v-model="title" placeholder="Name task" />
        <input v-model="deadline" type="date" />
        <select v-model="priority">
            <option value="low">Low</option>
            <option value="medium">Middle</option>
            <option value="high">High</option>
        </select>
        <div class="button-container">
            <button @click="submitTask">
                <i class="fas fa-plus"></i> Add
            </button>
            <button @click="$emit('close')">
                <i class="fas fa-times"></i> Cancel
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            deadline: '',
            priority: 'medium'
        };
    },
    methods: {
        submitTask() {
            const newTask = {
                id: Date.now(),
                title: this.title,
                deadline: this.deadline,
                priority: this.priority,
                completed: false,
            };
            this.$store.dispatch('addTask', newTask);
            this.resetFields();
            this.$emit('close');
        },
        resetFields() {
            this.title = '';
            this.deadline = '';
            this.priority = 'medium';
        }
    }
}
</script>

<style>
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    background: linear-gradient(135deg, #5e2e2e, #8b5a5a);
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    width: 90%;
    max-width: 400px;
    border: 2px solid #d4af37;
    font-family: 'Georgia', serif;
    animation: zoomIn 0.3s forwards;
    transition: box-shadow 0.3s ease;
}

@keyframes zoomIn {
    to {
        transform: translate(-50%, -50%) scale(1);
    }
}

.modal:hover {
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.7);
}

.modal h2 {
    margin: 0 0 15px;
    color: #d4af37;
    text-align: center;
    font-family: 'Cinzel', serif;
}

.modal input,
.modal select {
    
    width: 100%;
    margin-right: px;
    margin-bottom: 15px;
    padding: 7px; /* Vergroot de padding voor betere aanraking */
    border: 2px solid #b59429;
    border-radius: 6px;
    font-size: 16px; /* Vergroot de tekstgrootte voor betere leesbaarheid */
    background-color: #8b5a5a;
    color: #fff;
    transition: border-color 0.3s ease, background-color 0.3s ease;
}

.modal input:focus,
.modal select:focus {
    border-color: #d4af37;
    background-color: #7c3a3a;
}

.button-container {
    display: flex;
    justify-content: space-between;
}

.modal button {
    flex: 1;
    padding: 12px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    font-family: 'Georgia', serif;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.modal button:first-child {
    background-color: #d4af37;
    color: #fff;
}

.modal button:first-child:hover {
    background-color: #b59429;
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(212, 175, 55, 0.5);
}

.modal button:last-child {
    background-color: #5a5a5a;
    color: #fff;
}

.modal button:last-child:hover {
    background-color: #474747;
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

/* Media Queries */
@media (max-width: 480px) {
    .modal {
        padding: 15px;
    }

    .modal h2 {
        font-size: 24px;
    }

    .modal input,
    .modal select {
        padding: 10px; /* Pas de padding aan voor kleine schermen */
        font-size: 14px; /* Verklein de tekstgrootte voor kleinere apparaten */
    }

    .modal button {
        padding: 10px;
        font-size: 14px; /* Kleinere tekst voor knoppen */
    }
}
</style>
