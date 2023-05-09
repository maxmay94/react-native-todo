import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import api from '../api';

const TodoForm = ({ onNewItem }) => {
  const [text, setText] = useState('');

  const handleSubmit = async () => {
    if (text) {
      try {
        const response = await api.post('todos/', { title: text });
        setText('');
        onNewItem(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View className='m-10'>
      <TextInput
        className='border-2 bg-white border-gray-400 rounded-md p-2'
        onChangeText={setText}
        value={text}
        placeholder="Enter new item"
      />
      <Button title="Add" onPress={handleSubmit} />
    </View>
  );
};

export default TodoForm;