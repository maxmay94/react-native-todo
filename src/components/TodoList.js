import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text } from 'react-native'
import TodoItem from './TodoItem'
import api from '../api'

const TodoList = ({items}) => {

  const handleUpdate = (updatedItem) => {
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)))
  }

  const handleDelete = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId))
  }

return (
  <View>
    <Text className='text-center font-bold text-2xl'>
      Todo List
    </Text>

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
  </View>
  )
}

export default TodoList