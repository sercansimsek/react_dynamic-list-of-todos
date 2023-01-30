import React from 'react';
import cn from 'classnames';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
  todoId: number;
  onSelectTodo: (id: number) => void;
  onSelectUser: (id: number) => void;
};

export const TodoList: React.FC<Props> = ({
  todos,
  todoId,
  onSelectTodo,
  onSelectUser,
}) => {
  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {todos.map(todo => (
          todo.id === todoId ? (
            <tr
              key={todo.id}
              data-cy="todo"
              className="has-background-info-light"
            >
              <td className="is-vcentered">{ todo.id }</td>
              <td className="is-vcentered" />
              <td className="is-vcentered is-expanded">
                <p className="has-text-danger">
                  {todo.title}
                </p>
              </td>
              <td className="has-text-right is-vcentered">
                <button
                  data-cy="selectButton"
                  className="button"
                  type="button"
                >
                  <span className="icon">
                    <i className="far fa-eye-slash" />
                  </span>
                </button>
              </td>
            </tr>
          ) : (
            <tr
              key={todo.id}
              data-cy="todo"
              className=""
            >
              <td className="is-vcentered">{ todo.id }</td>
              {!todo.completed && <td className="is-vcentered" />}
              {todo.completed && (
                <td className="is-vcentered">
                  <span className="icon" data-cy="iconCompleted">
                    <i className="fas fa-check" />
                  </span>
                </td>
              )}
              <td className="is-vcentered is-expanded">
                <p className={cn('has-text-success', {
                  'has-text-danger': !todo.completed,
                })}
                >
                  {todo.title}
                </p>
              </td>
              <td className="has-text-right is-vcentered">
                <button
                  data-cy="selectButton"
                  className="button"
                  type="button"
                  onClick={() => {
                    onSelectTodo(todo.id);
                    onSelectUser(todo.userId);
                  }}
                >
                  <span className="icon">
                    <i className="far fa-eye" />
                  </span>
                </button>
              </td>
            </tr>
          )
        ))}
      </tbody>
    </table>
  );
};
