import { StyleSheet, Text, View } from 'react-native';


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    color: '#222',
    textAlign: 'center',
    fontFamily: 'Pacifico-Regular',
  },
});


