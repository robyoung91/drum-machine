import React from 'react';

const DrumPad = (props) => {
	return(
		<div>
			<audio className='clip' src={"./sounds/" + props.letter + ".aif"} id={props.letter} ref={ref => this.player = ref}></audio>
			<button onClick={this.player.play()}>{props.letter}</button>
		</div>
	)
}

export default DrumPad;