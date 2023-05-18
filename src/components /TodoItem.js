// import React from 'react';
// import styles from '@/styles/TodoItem.module.css';

const TodoItem = ({ itemProp, handleChange, delTodo }) => (
  <li className={styles.item}>
    <div className={styles.content}>
      input
    </div>
    {itemProp.title}
  </li>
);

export default TodoItem;
