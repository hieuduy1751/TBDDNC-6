import React, { Dispatch, useReducer, useRef } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { State, actions, Job } from '../store'

export default function TodoInput({ state, dispatch }: { state: State, dispatch: Dispatch<any> }) {
  const handleTextChange = (value: string) => {
    dispatch(actions.setJob(value))
  }
  const handleAddPress = () => {
    const newJob: Job = {
      id: Math.floor(Math.random() * 1000),
      title: state.job,
      status: false
    }
    dispatch(actions.addJob(newJob))
    dispatch(actions.setJob(''))
  }
  return (
    <View style={{
      width: '100%',
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 15
    }}>
      <View style={{
        width: '80%',
        height: '100%',
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        paddingHorizontal: 10,
        justifyContent: 'center'
      }}>
        <TextInput value={state.job} onChangeText={handleTextChange} placeholder="Add new task" style={{ fontSize: 20 }} />
      </View>
      <TouchableOpacity
        onPress={handleAddPress}
        style={{
          width: 50,
          height: 50,
          backgroundColor: '#87A2FB',
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Ionicons name="add" size={30} color="black" style={{ marginStart: 5 }} />
      </TouchableOpacity>
    </View>
  )
}