'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text
} from 'react-native';
import {
	randomColor
} from '../../common/color'
class Item extends Component {
	/* life cycle */
	constructor(props) {
		super(props);

		this.state = {
			isSelected: false
		};
	}
	render() {
		let {
			attribute,
			attributeKey,
			index
		} = this.props
		let {
			isSelected
		} = this.state
		let dynamicStyle = isSelected ? {
			[attributeKey]: attribute
		} : {}
		let text = (typeof(index) == 'undefined') ? attribute : `${index}`
		return (

			<TouchableOpacity style={[styles.item,dynamicStyle,attribute]} activeOpacity={0.85} onPress={this._onItemClicked.bind(this,attribute,index)}>
						<View>
							<Text style={{fontSize: 11}}>
								{text}
							</Text>
						</View>
				 </TouchableOpacity>
		);
	}

	_onItemClicked = (attribute, index) => {
		let {
			isSelected
		} = this.state
		let selected = !isSelected
		this.setState({
			isSelected: selected
		})

		let {
			onPress
		} = this.props
		onPress(attribute, index)
	}
}

const styles = StyleSheet.create({
	item: {
		width: 50,
		height: 50,
		backgroundColor: 'green',
		marginLeft: 10,
		marginTop: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
});


export default Item;