export const APP_WIDTH = 1600;
export const APP_HEIGHT = 900;

export const APP_SETTINGS = {
	width: APP_WIDTH,
	height: APP_HEIGHT,
	antialias: false
};

export const SHAPE_COLOR = {
	BLUE: Symbol("BLUE"),
	CYAN: Symbol("CYAN"),
	GREEN: Symbol("GREEN"),
	MAGENTA: Symbol("MAGENTA"),
	ORANGE: Symbol("ORANGE"),
	RED: Symbol("RED"),
	YELLOW: Symbol("YELLOW")
};

export const SHAPE_TYPE = {
	I: Symbol("I"),		// #
						// #
						// #
						// #
						//
	J: Symbol("J"),		// .#
						// .#
						// ##
						//
	L: Symbol("L"),		// #.
						// #.
						// ##
						//
	O: Symbol("O"),		// ##.
						// ##.
						//
	Z: Symbol("Z"),		// ##.
						// .##
						//
	T: Symbol("T"),		// .#.
						// ###
						//
	S: Symbol("S")		// .##
						// ##.
}