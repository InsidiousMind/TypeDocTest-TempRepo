import * as React from 'react';

export interface GameProps { game: string; }

export class FunComponent extends React.Component<GameProps, undefined> {
	/**
	 * Who Knows what this function does....I don't!
	 */
	superComplicatedFunctionThatNoOneKnowsHowItWorks(x: number, y: number ) {
		console.log("SUPER SUPER COMPLICATED");
		console.log(`The Secret Coordinates are: (${x},${y})`);
	}

	render() {
		this.superComplicatedFunctionThatNoOneKnowsHowItWorks(120, 32);
		return (
			<div>
				<h2>Was going to be a game</h2>
			</div>
		);
	}
} 