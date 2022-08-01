import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.list)
  const dispatch = useDispatch()

  return (
    <View>
      <View>
        <Button
          title='Increment Value'
          onPress={() => dispatch(increment())}
        />
        <Text style={estilos.texto}>{count}</Text>
        <Button 
          title="Decrement value"
          onPress={() => dispatch(decrement())}
        />
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
    texto: {
        fontSize: 22,
        fontWeight: 'bold',
    }
});