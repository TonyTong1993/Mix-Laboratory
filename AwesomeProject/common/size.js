'use strict';

import React, {
	Component
} from 'react';

import {
	PixelRatio,
	Dimensions
} from 'react-native';
const {
	width,
	height
} = Dimensions.get('window');
const Size = {
	onePixel: 1 / PixelRatio.get(),
	screenWidth: width,
	screenHeight: height
}

export default Size;