import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from 'react-native';
import imgHome from '../assets/images/home.jpg';
const GoalInput = (props) => {
  const [enteredGoalState, setEnteredGoalState] = useState('');
  function goalInputFunction(enteredText) {
    if (enteredText.length == 0) {
      console.log('Enter something');
    } else {
      setEnteredGoalState(enteredText);
    }
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalState);
    setEnteredGoalState('');
    props.setShowModal(false);
  }

  function closeGoalHandler() {
    props.setShowModal(false);
  }
  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={imgHome} />
        <TextInput
          style={styles.inputText}
          placeholder="Please enter your goals"
          onChangeText={goalInputFunction}
          value={enteredGoalState}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={closeGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'gray',
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  inputText: {
    borderWidth: 2,
    borderColor: 'gray',
    backgroundColor: '#e4d0ff',
    width: '80%',
    borderRadius: 20,
    marginRight: 8,
    padding: 8,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: '40%',
    marginHorizontal: 8,
  },
});
export default GoalInput;
