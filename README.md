# FEW 2.9 Final Assessment

## Queries

- getAllTodos, returns a list of todos:
    ```graphql
    query Todos {
        getAllTodos {
            name
            date
            completed
            id
        }
    }

    ```
- getTodo, return a single todo:
    ```graphql
    {
        todo(id:0) {
            name
            date
            completed
            id
        }
    }
    ```
- getCompletedTodos, return a list of all completed todos:
    ```graphql
    {
        getCompletedTodos {
            name
            date
            completed
            id
        }
    }
    ```

- getUncompletedTodos, return a list of all uncompleted todos:
    ```graphql
    {
        getUncompletedTodos {
            name
            date
            completed
            id
        }
    }
    ```