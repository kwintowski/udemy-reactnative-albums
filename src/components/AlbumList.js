import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
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
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
      );
  }

  render() {


    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;