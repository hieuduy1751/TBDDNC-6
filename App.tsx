import { StatusBar } from 'expo-status-bar';
import { Keyboard, FlatList, KeyboardAvoidingView, SafeAreaView, Text, TouchableWithoutFeedback, View, Platform } from 'react-native';
import Task from './components/Task';
import TodoInput from './components/TodoInput';
import StoreReducer, { actions, ApiService, Job } from './store'
import { initialState } from './store/StoreReducer';
import { useEffect, useReducer } from 'react';

export default function App() {
  const [state, dispatch] = useReducer(StoreReducer, initialState)
  const { jobs } = state

  const handleDissmissKeyboard = () => {
    Keyboard.dismiss();
  }

  useEffect(() => {
    ApiService.getTasks().then((jobs: Job[]) => {
      dispatch(actions.setJobs(jobs))
    })
  }, [])

  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <TouchableWithoutFeedback onPress={handleDissmissKeyboard}>
        <KeyboardAvoidingView style={{
          width: '100%',
          paddingHorizontal: 50,
          height: '100%',
          flex: 1,
        }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={15}
        >
          <>
            <View style={{
              width: '100%',
              height: 100,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
              }}>TODO-App</Text>
            </View>
            <View style={{
              flex: 1,
            }}>
              <FlatList
                data={jobs}
                renderItem={({ item }: { item: Job }) => <Task job={item} dispatch={dispatch} />}
                keyExtractor={(item: Job, index: number) => index.toString()}
                showsVerticalScrollIndicator={false}
              />
            </View>
            <TodoInput state={state} dispatch={dispatch} />
            <StatusBar style="auto" />
          </>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}