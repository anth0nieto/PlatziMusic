import React from 'react';
import { StyleSheet, View } from 'react-native';

import ArtistBox from './ArtistBox';
import { getArtists } from './../api-client';

export default class ArtistDetail extends React.Component {


  render() {

    const artist = this.props.navigation.state.params.artist

    return (
      <View style={styles.container}>
        <ArtistBox artist={artist}/>
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
