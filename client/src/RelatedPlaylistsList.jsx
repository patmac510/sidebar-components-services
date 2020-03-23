import React from 'react';
import RelatedPlaylist from './RelatedPlaylist.jsx';

function RelatedPlaylistsList(props) {
  return(
    <div>
      {props.relatedPlaylists.map( (playlist, i) => 
      <RelatedPlaylist key={i} relatedPlaylist={playlist} />)}
    </div>
  )
}

export default RelatedPlaylistsList;