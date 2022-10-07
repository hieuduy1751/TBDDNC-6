import React, { Dispatch, useState } from "react"
import { TextInput, TouchableOpacity, View } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox"
import { Ionicons } from '@expo/vector-icons'
import { actions, Job, State } from "../store"

export default function Task({ job, dispatch }: { job: Job, dispatch: Dispatch<any> }) {
  const handleCheckbox = (isChecked: boolean) => {
    dispatch(actions.updateJob({ ...job, status: isChecked }))
  }
  const handleTitleChange = (value: string) => {
    dispatch(actions.updateJob({ ...job, title: value }))
  }
  const handleRemove = () => {
    dispatch(actions.deleteJob(job.id))
  }
  return (
    <View style={{
      width: '100%',
      height: 60,
      flexDirection: 'row',
      backgroundColor: '#ADDDD0',
      padding: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginVertical: 10,
      alignItems: 'center',
    }}>
      <BouncyCheckbox fillColor="#6F38C5" onPress={handleCheckbox} isChecked={job.status} />
      <TextInput
        style={{
          fontSize: 20,
          flex: 1,
          overflow: 'hidden',
          textDecorationLine: job.status ? 'line-through' : 'none',
        }}
        value={job.title}
        onChangeText={handleTitleChange}
      />
      <TouchableOpacity onPress={handleRemove}>
        <View style={{
          width: 30,
          height: 30,
          backgroundColor: '#F5A9A9',
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          marginStart: 10
        }}>
          <Ionicons name="remove" size={30} color="black" style={{ marginLeft: 1 }} />
        </View>
      </TouchableOpacity>
    </View>
  )
}