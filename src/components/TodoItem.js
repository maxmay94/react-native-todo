import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import api from '../api';

const TodoItem = ({ item, onUpdate, onDelete }) => {
  console.log('item', item);
  const handleToggle = async () => {
    try {
      const response = await api.patch(`todos/${item.id}/`, {
        completed: !item.completed,
      });
      onUpdate(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`todos/${item.id}/`);
      onDelete(item.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View className=''>
      <TouchableOpacity onPress={handleToggle}>

        <Text
          className={
            `font-semibold ${item.completed ? 'line-through text-gray-400' : ''}`
          }
        >
          {item.title} {item.completed ? '✅' : '❌'}
        </Text>
        
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDelete}>
        <Text className='text-red-500 font-semibold'>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;