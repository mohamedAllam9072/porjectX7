/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View, Text, Pressable} from 'react-native';
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#dddddd'}}
        style={({pressed}) => pressed && styles.pressedItem}
        onPress={props.onDeleteGoal.bind(this, props.id)}>
        <Text style={styles.textview}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;
const styles = StyleSheet.create({
  textview: {
    padding: 4,
    color: '#FFFFFF',
  },
  goalItem: {
    margin: 4,
    borderRadius: 8,
    backgroundColor: '#dda126',
  },
  pressedItem: {
    opacity: 0.5,
  },
});
