Vue.component('todo-list', {
    data: function () {
        return {
            todos: ['a', 'b', 'c']
        }
    },
    methods: {
        addTodo(text) {
            this.todos.push(text)
        },
        deleteItem(idx) {
            this.todos.splice(idx, 1)
        }
    },
    template: `
        <div>
            <todo-input @input="addTodo"></todo-input>
            <ul>
                <todo-item v-for="(todo,idx) in todos" 
                :label="todo" 
                :idx="idx" 
                @del="deleteItem(idx)">
                </todo-item>
            </ul>
        </div>
        
    `
})