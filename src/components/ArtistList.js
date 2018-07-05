import React from 'react';
import { StyleSheet, View, ListView, TouchableOpacity } from 'react-native';

import ArtistBox from './ArtistBox';
import { RootStack } from './../config/router'; 
import { withNavigation } from 'react-navigation'; 


class ArtistList extends React.Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
    this.state = {
      dataSource: ds
    };

  }

  componentDidMount(){
    this.updateDataSource(this.props.artists)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.artists !== this.props.artists) {
      this.updateDataSource(newProps.artists)
    }
  }

  updateDataSource = data => {
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data)
      })
  }

 
  render() {

    
    return (

      <ListView
        enableEmptySections
        dataSource={this.state.dataSource}
        renderRow={(artist) => {
            return (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Details', { artist })}> 
                  <ArtistBox artist={artist}/>
                </TouchableOpacity>)
          }
        }
      />
    );
  }
}

const styles = StyleSheet.create({

});

export default withNavigation(ArtistList);

