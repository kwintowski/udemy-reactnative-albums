import React, { Component } from 'react';
import {View, Text } from 'react-native';

class AlbumList extends Component {
  state = { albums: [] };

  async componentWillMount() {
    try {
      const herokuApiCall = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
      const response = await herokuApiCall.json();
      this.setState({ albums: response });
    } catch(err) {
      console.log("Error fetching data ---------", err);
    }
  }

  renderAlbums() {
    return this.state.albums.map(album => <Text>{album.title}</Text>);
  }

  render() {


    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;