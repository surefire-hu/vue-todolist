const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: [
                { text: 'Dormire', done: false, tag: 'editorial' },
                { text: 'Studiare Vue.js', done: true, tag: 'q1-goals' },
                { text: 'Fare esercizio fisico', done: false, tag: 'recruiting' },
                { text: 'Aggiornare l\'app mobile di boolean', done: false, tag: 'mobile' },
                { text: 'Preparare la lezione del giorno', done: false, tag: 'meeting' },
                { text: 'Ottimizzare il sito web bos', done: false, tag: 'website' },
                { text: 'Contattare nuovi clienti', done: false, tag: 'sales' }
            ],
            newTodoText: '',
            newTodoTag: ''
        }
    },
    methods: {
        toggleDone(index) {
            this.todos[index].done = !this.todos[index].done;
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        addTodo() {
            if (this.newTodoText.trim() != '') {
                this.todos.push({ 
                    text: this.newTodoText, 
                    done: false, 
                    tag: this.newTodoTag || '' 
                });
                this.newTodoText = '';
                this.newTodoTag = '';
            }
        }
    }
}).mount('#app');
