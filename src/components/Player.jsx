import React, { useEffect} from 'react';
import {getVideoSource} from '../actions'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../assets/styles/components/Player.scss'

const Player = props => {
    const {id} = props.match.params;
    const hasPlaying = Object.keys(props.playing).length > 0;

    useEffect(() => {
        props.getVideoSource(id)
    }, [])

    return hasPlaying ? (
        <div className="Player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4"/>
            </video>
            <div className="Player-back" >
                <button type='button' onClick={() => props.history.goBack()}>
                Regresar
                </button>
            </div>
        </div>
        
    ) : <Redirect to="/404/"/>;
};

const mapStateToProp = state => {
    return {
        playing: state.playing,
    }
}

const mapDispachToProps = {
    getVideoSource,
}
export default connect(mapStateToProp, mapDispachToProps)(Player)