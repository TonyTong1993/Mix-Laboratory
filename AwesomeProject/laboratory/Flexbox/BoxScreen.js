'use strict';

import React, {
	Component
} from 'react'

import {
	StyleSheet,
	View,
	FlatList,
	Text,
	TouchableOpacity,
	PixelRatio,
} from 'react-native'
/* 
  1.flexDirection 主轴方向，默认在竖直column方向，可选值：row、column、'row-reverse'、'column-reverse
  2.marginHorizontal：意味着同时设置了marginLeft and marginRight
  3.alignContent:控制侧轴方向上横排(rows)的对齐方式，可重写父容器的这个属性
  4.alignSelf:

 */
/* 加载静态数据 */
let layoutAttributes = require("./layoutAttributes")
let onePixel = PixelRatio.get()

class BoxScreen extends Component {

	/* 设置keyExtractor */
	_keyExtractor = (item, index) => {

		return `${item.key}`
	}
	/* render item */
	_renderItem = ({
		item
	}) => {
		return (
			<TouchableOpacity activeOpacity={0.85} onPress={this._didSelectedItemAtIndex.bind(this,item)}>
				<View style={styles.contentStyle}>
					<Text>{item.attribute}</Text>
				</View>
			</TouchableOpacity>
		)
	}

	_itemSeparatorComponent = () => {
		return (
			<View style={styles.itemSeparatorStyle}></View>
		)
	}
	/* item delegate */
	_didSelectedItemAtIndex = (item) => {
		const {
			navigate
		} = this.props.navigation
		navigate("LayoutScreen", {
			item
		});

	}

	render() {
		const {
			attributes
		} = layoutAttributes;
		return (
			<View style={{flex:1,backgroundColor:"white"}}>
				<FlatList 
				data={attributes} 
				renderItem={this._renderItem} 
				keyExtractor={this._keyExtractor}
				ItemSeparatorComponent={this._itemSeparatorComponent}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	contentStyle: {
		padding: 12,
		backgroundColor: "green",
		/**
		 *
		 *  alignSelf: 'stretch' 默认值，子Item同此属性重写父容器侧轴方向上的约束
		 *
		 */
	},
	itemSeparatorStyle: {
		height: 1 / onePixel,
		backgroundColor: 'lightgray'
	}
});


export default BoxScreen;