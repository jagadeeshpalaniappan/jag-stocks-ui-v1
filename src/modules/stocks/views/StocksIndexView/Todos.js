import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import StockAlert from './StockAlert';
import { apiGetStocksAction } from '../../state/getStocks';
import { apiCreateStockAction } from '../../state/createStock';

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

const TodoItem = ({ todo }) => {
  console.log('TodoItem');

  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}
    >
      {todo.name}
    </li>
  );
};

// memoized: shallow compare and re-render
const TodoItemMemozd = React.memo(TodoItem);

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
      <StockAlert />
      <AddTodoMemozd />
      <ul>
        {todos.map(todo => (
          <TodoItemMemozd todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </div>
  );
};

//------------------ Redux: Selectors -------------

const getTodos = state => state.appState.todos;

// PERFORMANCE-ISSUE-FIXED: // created: MemoizedSelector
// 'todos.filter' will be called only if 'state.appState.todos' changes
const getVisibleTodos = createSelector([getTodos], todos =>
  todos.filter(todo => !todo.completed)
);

const mapStateToProps = state => ({
  todos: state.appState.stocks && state.appState.stocks.data
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
