import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Ticker from 'react-ticker';
import img1 from './flower1.jpeg';
function VideoFooter({ playing, channel, description, song }) {

    return (
        <div className='videofooter'>
            <div className='videofooter__text'>
                <h3>{channel} </h3>
                <p>{description}</p>
                <div className='videofooter__ticker' >
                    <MusicNoteIcon
                        className='videofooter__icon'
                        fontSize='default'
                    />
                    <Ticker mode='smooth'>
                        {({ index }) => (
                            <>
                                <p>  {song} </p>
                            </>
                        )
                        }
                    </Ticker>
                </div>
            </div>
            { !playing ? <PlayCircleFilledIcon className='videofooter__record' fontSize='large' /> : <PauseCircleFilledIcon className='videofooter__record' fontSize='large' />}


        </div>
    )
}

export default VideoFooter
