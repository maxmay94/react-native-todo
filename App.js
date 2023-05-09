import React from 'react';
import { SafeAreaView } from 'react-native';
import TodoList from './src/components/TodoList';
import TodoForm from './src/components/TodoForm';
import api from './src/api';

const App = () => {

  return (
    <SafeAreaView className='h-full bg-red-200'>
      <TodoForm />
      <TodoList />
    </SafeAreaView>
  );
};

export default App;