// import InputTodo from './InputTodo';
// import TodoList from './TodoList';

const TodoLogic = () => {
  const todos = [
    {
      id: 1,
      title: 'Setup development enviroment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 1,
      title: 'Deploy to live server',
      completed: false,
    },

  ];
  return (
    <div>
      <InputTodo />
      <TodoList />
    </div>
  );
};

// export default TodoLogic;
