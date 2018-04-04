/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react"
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  PixelRatio
} from "react-native"
import {
  StackNavigator
} from "react-navigation"
import BoxScreen from "./laboratory/Flexbox/BoxScreen"
import LayoutScreen from "./laboratory/Flexbox/LayoutScreen"

let listObjcts = require("./laboratory.json")
let onePixel = PixelRatio.get()
const ITEM_HEIGHT = 100;
/* 无状态组件-list item */

const ListItem = (props) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.85} 
      onPress={props.onPress.bind(this, props.index)}>
      <View style={styles.contentStyle}>
        <Text>{`${props.name}---${props.index}`}</Text>
      </View>
    </TouchableOpacity>
  )
}


/* 主容器 */
class App extends React.Component {

  static navigationOptions = ({
    title: "首页"

  })

  /* 设置集合试图的keyExtractor */
  _keyExtractor = (
    item,
    index
  ) => {
    return `${item.key}--${index}`
  }
  /* 设置集合试图单个条目的渲染 */

  _renderItem = ({
    item,
    index
  }) => {
    return <ListItem name={item.name} index={index} onPress={this._didSelectedItemAtIndex}/>
  }

  _itemSeparatorComponent = () => {
    return (
      <View style={styles.itemSeparatorStyle}></View>
    )
  }

  _getItemLayout = (data, index) => {
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index
    }
  }
  /* 单个条目的点击响应事件 */
  _didSelectedItemAtIndex = (index) => {
    const {
      navigate
    } = this.props.navigation
    navigate("BoxScreen")
  }


  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={listObjcts.list} 
          renderItem={this._renderItem} 
          keyExtractor={this._keyExtractor} 
          ItemSeparatorComponent={this._itemSeparatorComponent}
         />
         
      </View>
    )
  }
}

/* 导航器 */
const Navigator = StackNavigator({
  Home: {
    screen: App
  },
  BoxScreen: {
    screen: BoxScreen,
    navigationOptions: {
      title: "Layout With Flexbox"
    }
  },
  LayoutScreen: {
    screen: LayoutScreen
  }
})

export default Navigator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    /*当添加 
    alignItems: 'center',
    justifyContent: 'center',
    后，子Item如此处的FlatLst无法撑开，受FlatLst内的子内容控制侧轴方向上的尺寸，主轴伸缩为父轴的主轴尺寸
    */


  },
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
})