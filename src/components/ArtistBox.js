import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default class ArtistBox extends React.Component {
  render() {

    const { image, name, likes, comments } = this.props.artist

    return (

      <View style={styles.artistBox}>
          <Image style={styles.image} source={{uri: image}}/>
          
          <View style={styles.info}>
            <Text style={styles.name}> {name} </Text>

            <View style={styles.row}>

              <View style={styles.iconContainer}>
                <Ionicons name="ios-heart-outline" size={32} color="gray" />
                <Text style={styles.count}> {likes} </Text>
              </View>

              <View style={styles.iconContainer}>
                <Ionicons name="ios-chatboxes-outline" size={32} color="gray" />
                <Text style={styles.count}> {comments} </Text>
              </View>
            </View>

          </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({

  artistBox: {
    margin: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 5,

  },

  image: {
    width: 150,
    height: 150,
  },

  info: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  name: {
    fontSize: 20,
    marginTop: 10,
    color: '#333',
  },

  row : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 15,
  },

  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },

  count: {
    flexDirection: 'row',
    color: 'gray',
  }
});
