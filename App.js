import React from 'react';
import { SafeAreaView } from 'react-native';
import TodoList from './src/components/TodoList';
import TodoForm from './src/components/TodoForm';

const App = () => {

  return (
    <SafeAreaView className='h-full bg-slate-200'>
      <TodoForm />
      <TodoList />
    </SafeAreaView>
  );
};

export default App;