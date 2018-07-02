import React from 'react';
import { StyleSheet, View } from 'react-native';

import ArtistList from './components/ArtistList';

export default class App extends React.Component {


  render() {

    const artist = {
      image: 'http://imgs.globovision.com/PzJEZiP-zyN6VPlYGEShps8on3s=/700x0/smart/40c72b2c2d2a43e2b89f147f3375defb',
      name: 'Hector Lavoe',
      likes: 200,
      comments: 140,
    }

    const artists = Array(10).fill(artist);

    return (
      <View style={styles.container}>
        <ArtistList artists={artists}/>
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
