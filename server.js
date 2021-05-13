const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Todo {
        name: String!
        completed: Boolean!
        date: String!
        id: Int!
    }

    type Query {
        getAllTodos: [Todo!]!
        getTodo(id: Int!): Todo!
        getCompletedTodos: [Todo!]!
    }

    type Mutation {
        addTodo(name: String!): Todo!
        completeTodo(id: Int!): Todo!
    }
`)

const todoList = [
    { name: "Test", completed: false, date: "05/11/2021", id: "1" }
]

const root = {
    getAllTodos: () => {
        return todoList;
    },
    getCompletedTodos: () => {
        completed = [];
        todoList.map((todo) => {
            if (todo.completed) {
                completed.push(todo);
            }
        })

        return completed;
    },
    getUncompletedTodos: () => {
        uncompleted = [];
        todoList.map((todo) => {
            if (todo.uncompleted) {
                uncompleted.push(todo);
            }
        })

        return uncompleted;
    },
    getTodo: (id) => {
        return todoList[id];
    },
    completeTodo: ({ id }) => {
        todoList[id].completed = true;
        const todo = todoList[id];

        todoList.push(todo);

        return todo;
    },
    addTodo: ({ name }) => {
        const todo = { name, completed: false, date: new Date(), id: todoList.length };
        todoList.push(todo);

        return todo;
    }
}

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

const port = 4000;
app.listen(port, () => {
    console.log(`Running on port: ${port}`)
})