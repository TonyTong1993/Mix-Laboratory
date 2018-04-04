'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text
} from 'react-native';

class Catalog extends Component {
	render() {
		return (
			<View style={styles.container}>
      	 <Text>What's important in "style" course 
          <Text>
          {'\r\n'}1.不同于CSS，RN的样式采用驼峰命名规则。 
          {`\r\n`}2.一般使用StyleSheet.create创建样式对象。
          {`\r\n`}3.使用flexbox进行布局。
          </Text>
        </Text>
        <Text>Know Components</Text>
        <Text>Platform specific code</Text>
      </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});


export default Catalog;