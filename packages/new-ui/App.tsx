import { StyleSheet, Text, View } from 'react-native';

export default function VanillaUI() {
  return (
    <View style={styles.container}>
      <Text>OOOOO WEEE LOOK AT ME AM A VANILLA UI</Text>
      <Text>OH YEAH MR KRABS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
