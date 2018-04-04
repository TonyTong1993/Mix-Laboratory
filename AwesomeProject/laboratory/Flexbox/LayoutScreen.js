'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Button,
	Modal,
	TouchableOpacity,
	Text
} from 'react-native';
import
AttributesModalView
from './AttributesModalView'
import Item from './Item'

class LayoutScreen extends Component {
	static navigationOptions = ({
		navigation
	}) => {
		const params = navigation.state.params || {};
		let showModal = params.showModal
		let item = params.item
		if (typeof(showModal) == 'undefined') {
			showModal = () => {}
		}

		return {

			title: `测试${item.attribute}`,
			headerRight: item.level ? <Button title="选择属性" onPress={showModal}/> : null
		}
	}
	/* Getter and Setter */
	_getItem = (index) => {
		let {
			params
		} = this.props.navigation.state
		let {
			item
		} = params
		let prop = item.attribute;
		let {
			selectedIndex,
			attribute
		} = this.state
		var dynamicStyle
		if (selectedIndex == index) {
			dynamicStyle = item.level ? {} : attribute
		} else {
			dynamicStyle = {}
		}

		return <Item onPress={this._handleItemClickedCallback} attribute={dynamicStyle} attributeKey={prop} index={index}/>
	}
	_getItems = () => {
		let {
			items
		} = this.state

		return items.map((obj, index) => {

			return this._getItem(index + 1)
		})
	}

	_setMoalVisible = (visible) => {
		this.setState({
			moadlVisible: visible
		})
	}
	/* private action responder */

	_dismiss = () => {
		this._setMoalVisible(false)
	}
	_selectedAttributeCallback = (attribute, index) => {
		let {
			params
		} = this.props.navigation.state
		let {
			item
		} = params
		let prop = item.attribute;
		let obj = {
			[prop]: attribute
		}

		this.setState({
			attribute: obj
		})
	}

	_handleItemClickedCallback = (attribute, index) => {
		this._setMoalVisible(true)
		this.setState({
			selectedIndex: index
		})
	}
	_incrementItem = () => {
		let objs = this.state.items
		objs.push({})
		this.setState({
			items: objs
		})
	}

	/* life cycle */

	constructor(props) {
		super(props);

		var items = [{}, {}, {}, {}, {}]
		this.state = {
			moadlVisible: false,
			attribute: {},
			items: items,
			selectedIndex: -1
		};
	}
	render() {
		let {
			moadlVisible
		} = this.state
		let {
			params
		} = this.props.navigation.state
		let {
			item
		} = params
		let {
			attribute
		} = this.state
		let nodes = this._getItems()
		let dynamicStyle = item.level ? attribute : {}
		return (
			<View style={[styles.container,dynamicStyle,item.dependecy]}>
			 <TouchableOpacity activeOpacity={0.85} onPress={this._incrementItem}>
			 	<View style={{position: 'absolute',width:40,height:40,top:20,right:20,zIndex: 101,backgroundColor:'red',justifyContent: 'center',alignItems: 'center',}}>
					<Text>
						添加
					</Text>
			 	</View>
			 </TouchableOpacity>
			 <Modal animationType="slide" visible={moadlVisible} transparent={true}>
			  	<AttributesModalView dismiss={this._dismiss} attributes={item.values} selectedCallback={this._selectedAttributeCallback}/>
			 </Modal>
				{nodes}
			</View>
		);
	}

	componentWillMount() {
		const {
			navigation
		} = this.props
		navigation.setParams({
			showModal: this._setMoalVisible.bind(this, true)
		})
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		// flexWrap: 'wrap' 与alignContent配合使用
	},
	propsViewSytle: {
		alignSelf: 'center',

	}
});


export default LayoutScreen;