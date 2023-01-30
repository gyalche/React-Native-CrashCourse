import { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from 'react-native';

export default function App() {
  const [enteredGoalState, setEnteredGoalState] = useState('');
  const [setGoals, setSetGoals] = useState([]);

  function goalInputFunction(enteredText) {
    setEnteredGoalState(enteredText);
  }

  function addGoalHandler() {
    setSetGoals((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalState, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Please enter your goals"
          onChangeText={goalInputFunction}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.appContainer}>
        <FlatList
          data={setGoals}
          renderItem={(itemData) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          )}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 12,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  inputText: {
    borderWidth: 2,
    borderColor: 'gray',
    width: '80%',
    borderRadius: 20,
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 9,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: 'green',
    padding: 8,
  },
  goalText: {
    color: 'white',
  },
});
