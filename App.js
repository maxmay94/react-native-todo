import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import TodoList from './src/components/TodoList'
import TodoForm from './src/components/TodoForm'
import api from './src/api'

const App = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('fetching items')
    fetchItems()
  }, [])


  const fetchItems = async () => {
    try {
      const response = await api.get('todos/');
      setItems(response.data)
    } catch (error) {
      if (error.response) {
        console.error('Error status:', error.response.status)
        console.error('Error headers:', error.response.headers)
      } else {
        console.error('Error:', error.message)
      }
    }
  }

  const onNewItem = (newItem) => {
    setItems([...items, newItem])
  }

  return (
    <SafeAreaView className='h-full bg-slate-200'>
      <TodoForm onNewItem={onNewItem} />
      <TodoList items={items} />
    </SafeAreaView>
  )
}

export default App