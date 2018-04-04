'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	FlatList,
	Text,
	TouchableOpacity
} from 'react-native';
import Size from '../../common/size'
import Item from './Item'


class AttributesModalView extends Component {
	/* life cycle */
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		let nodes = this._getNodes()

		return (
			<View style={styles.container}>
				<View style={{flexDirection: 'row',justifyContent: 'space-between',paddingHorizontal:20  }}>
					<TouchableOpacity activeOpacity={0.85} onPress={this.props.dismiss}>
						<View style={styles.button}>
							<Text>取消</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.85} onPress={this.props.dismiss}>
						<View style={styles.button}>
							<Text>确定</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.attributesContainer}>
					{nodes}
				</View>
			</View>
		);
	}
	/* private method */

	_getNodes = () => {

		let nodes = this.props.attributes.map((attribute, index) => {
			return <Item attribute={attribute} key={`${attribute}-${index}`} onPress={this._handleTouchUpInsideItem} />
		})

		return nodes
	}
	/* item select */
	_handleTouchUpInsideItem = (attribute, index) => {
		this.props.selectedCallback(attribute, index)
	}


}

const styles = StyleSheet.create({
	container: {
		top: "50%",
		width: Size.screenWidth,
		height: Size.screenHeight * 0.5,
		backgroundColor: 'red',
	},
	button: {
		padding: 10,
	},
	item: {
		width: 50,
		height: 50,
		backgroundColor: 'green',
		marginLeft: 10,
		marginTop: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	attributesContainer: {
		flex: 1,
		marginTop: 10,
		backgroundColor: 'white',
		flexDirection: 'row',
		flexWrap: 'wrap'
	}
});


export default AttributesModalView;