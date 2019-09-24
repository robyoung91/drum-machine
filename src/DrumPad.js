import React from 'react';

const DrumPad = (props) => {
	return(
		<div>
			<audio className='clip' src={"./sounds/" + props.letter + ".aif"} id={props.letter} ref={props.ref} onClick={props.onClick}></audio>
			<button onClick={props.onClick}>{props.letter}</button>
		</div>
	)
}

export default DrumPad;