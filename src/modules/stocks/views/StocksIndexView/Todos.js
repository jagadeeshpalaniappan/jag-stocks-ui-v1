import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { apiGetStocksAction } from '../../state/getStocks/actions';
import { apiCreateStockAction } from '../../state/createStock/actions';
import { apiDeleteStockAction } from '../../state/deleteStock/actions';
import { apiUpdateStockAction } from '../../state/updateStock/actions';
import { TodoMutaionStatus } from './TodoStatus';

//------------------ TodoMutaionStatus -------------

//------------------ AddTodo ------------- [PERF-ISSUE-FIXED]

const AddTodo = ({ createStock }) => {
  console.log('AddTodo');
  const inputEl = useRef(null);
  const handleAddTodo = e => {
    e.preventDefault();
    const name = inputEl.current.value;
    if (!name.trim()) return;
    createStock({ name });
    inputEl.current.value = '';
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input ref={inputEl} type="text" />
        <button type="submit">Add Stock</button>
      </form>
    </div>
  );
};

const mapDispatchToProps1 = dispatch => {
  return {
    createStock: payload => dispatch(apiCreateStockAction(payload))
  };
};

// memoized: shallow compare and re-render
const AddTodoMemozd = connect(null, mapDispatchToProps1)(React.memo(AddTodo));

//------------------ TodoItem ------------- [PERF-ISSUE-FIXED]

const TodoItem = ({ todo, updateStock, deleteStock }) => {
  console.log('TodoItem');
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState(todo.name);

  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}
    >
      <div>
        <span>
          [{todo.stockId}] {todo.name}
        </span>
        ---[
        <a href="#" onClick={() => setIsEditMode(!isEditMode)}>
          Edit
        </a>
        --
        <a href="#" onClick={() => deleteStock(todo)}>
          Delete
        </a>
        ]
      </div>
      {isEditMode && (
        <div>
          <input
            type="text"
            name="isEditMode"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button
            onClick={() => {
              updateStock({ ...todo, name });
              setIsEditMode(false);
            }}
          >
            Save
          </button>
        </div>
      )}
    </li>
  );
};

const mapDispatchToProps2 = dispatch => {
  return {
    updateStock: payload => dispatch(apiUpdateStockAction(payload)),
    deleteStock: payload => dispatch(apiDeleteStockAction(payload))
  };
};
// memoized: shallow compare and re-render
const TodoItemMemozd = connect(null, mapDispatchToProps2)(React.memo(TodoItem));

//------------------ Todos ------------- [PERF-ISSUE-FIXED]

const Todos = ({ todos, toggleTodo, getStocks, apiGetStocksStartAction }) => {
  console.log('Todos');
  useEffect(() => {
    // apiGetStocksStartAction();
    getStocks({ pageSize: 10 });
  }, []);
  return (
    <div>
      <h3>Todos: (Simple1)</h3>
      <TodoMutaionStatus />
      <AddTodoMemozd />

      {todos.loading && 'Loading Todos...'}
      {todos.error && 'Error when getting Todos'}

      <ul>
        {todos.data &&
          todos.data.map(todo => (
            <TodoItemMemozd key={todo.id} todo={todo} toggleTodo={toggleTodo} />
          ))}
      </ul>
    </div>
  );
};

//------------------ Redux: Selectors -------------

const getTodos = state => state.stockState.todos;

// PERFORMANCE-ISSUE-FIXED: // created: MemoizedSelector
// 'todos.filter' will be called only if 'state.stockState.todos' changes
const getVisibleTodos = createSelector([getTodos], todos =>
  todos.filter(todo => !todo.completed)
);

const mapStateToProps = state => ({
  todos: state.stockState.stocks
  // todos: getVisibleTodos(state)
});

const mapDispatchToProps = dispatch => {
  return {
    // addTodo: payload => dispatch(addTodoAction(payload)),
    // toggleTodo: payload => dispatch(toggleTodoAction(payload)),
    getStocks: payload => dispatch(apiGetStocksAction(payload)),
    createStock: payload => dispatch(apiCreateStockAction(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Todos));
