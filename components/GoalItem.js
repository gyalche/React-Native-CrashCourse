import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';

const GoalItem = ({ itemData, onDeleteGoal }) => {
  return (
    <Pressable
      onPress={onDeleteGoal}
      style={({ pressed }) => pressed && styles.pressing}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: 'green',
    padding: 8,
  },
  goalText: {
    color: 'white',
  },
  pressing: {
    opacity: 0.6,
  },
});

export default GoalItem;
