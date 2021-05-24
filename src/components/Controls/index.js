import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faStepBackward ,faStepForward } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

export default function Controls() {
    return (
        <div className="controls-wrapper">
            <FontAwesomeIcon color="white" style={{ fontSize: '20px' }} icon={faStepBackward} />
            <FontAwesomeIcon color="white" size="3x" icon={faPlayCircle} />
            <FontAwesomeIcon color="white" style={{ fontSize: '20px' }} icon={faStepForward} />
        </div>
    )
}
