import React from 'react';
import ArtistTooltip from './ArtistTooltip.jsx';

class RelatedSong extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let artistImage = this.props.relatedSong.artist_image_url;
        let artistName = this.props.relatedSong.artist_name;
        let artistFollowers = this.props.relatedSong.artist_followers;
        let artistLocation = this.props.relatedSong.artist_location;

        return (
            <div>
                <div className="songContainer">
                    <img src={this.props.relatedSong.song_image_url} className="info-image"/>
                    <div className="info-songName">{this.props.relatedSong.song_name}</div>
                    <div className="info-artistName">
                        <ArtistTooltip image={artistImage} name={artistName} location={artistLocation} followers={artistFollowers}>
                            {artistName}
                        </ArtistTooltip>
                    </div>
                    <div className="statistics">{this.props.relatedSong.song_plays}</div>
                    <div className="statistics">{this.props.relatedSong.song_likes}</div>
                    <div className="statistics">{this.props.relatedSong.song_reposts}</div>
                    <div className="statistics">{this.props.relatedSong.song_reposts}</div>
                </div>
            </div>
        )
    }
}

export default RelatedSong;