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
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [setGoals, setSetGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredGoalState) {
    setSetGoals((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalState, id: Math.random().toString() },
    ]);
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function deleteGoal(id) {
    setSetGoals(setGoals.filter((data) => data.id !== id));
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="blue"
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            showModal={modalIsVisible}
            setShowModal={setModalIsVisible}
            onAddGoal={addGoalHandler}
          />
        )}

        <View style={styles.appContainer}>
          <FlatList
            data={setGoals}
            renderItem={(itemData) => (
              <GoalItem
                itemData={itemData}
                onDeleteGoal={() => {
                  deleteGoal(itemData.item.id);
                }}
                // id={itemData.item.id}
              />
            )}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 12,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },

  goalsContainer: {
    flex: 9,
  },
});
