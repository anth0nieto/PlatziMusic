import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class LoginView extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Text style={sttyes.welcome}> Bienvenidos a Patzi Music</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  }

});
