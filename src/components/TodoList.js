import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import TodoItem from './TodoItem';
import api from '../api';

const TodoList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('fetching items')
    fetchItems()
  }, [])


  const fetchItems = async () => {
    try {
      const response = await api.get('todos/');
      setItems(response.data);
    } catch (error) {
      // console.error(error);
      if (error.response) {
        // console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  const handleUpdate = (updatedItem) => {
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
  };

  const handleDelete = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  const handleNewItem = (newItem) => {
    setItems([...items, newItem]);
  };

return (
    <ScrollView className=''>
      {items.map((item) => (
        <TodoItem
					key={item.id}
          item={item}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </ScrollView>
  );
};

export default TodoList;