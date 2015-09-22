/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var ToolbarAndroid = require('ToolbarAndroid');

var TimerMixin = require('react-timer-mixin');

var WelcomeScreen = require('./WelcomeScreen');
var ListScreen = require('./ListScreen');

var RCTZhiHuDaily = React.createClass({
  mixins: [TimerMixin],
  componentDidMount: function() {
    this.setTimeout(
      () => {
        this.setState({splashed: true});
      },
      50
    );
  },
  getInitialState: function() {
    return {
      splashed: false,
    };
  },
  onActionSelected: function(position) {
  },
  render: function() {
    if (!this.state.splashed) {
      return (
        <WelcomeScreen />
      );
    } else {
      return (
        <View style={styles.container}>
          <ToolbarAndroid
            navIcon={require('image!ic_menu_white')}
            title="知乎日报"
            titleColor="white"
            style={styles.toolbar}
            actions={toolbarActions}
            onActionSelected={this.onActionSelected} />
          <ListScreen />
        </View>

      );
    }
  }
});

var toolbarActions = [
  {title: '提醒', icon: require('image!ic_message_white'), show: 'always'},
  {title: '夜间模式', show: 'never'},
  {title: '设置选项', show: 'never'},
];

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  toolbar: {
    backgroundColor: '#00a2ed',
    height: 56,
  },
});

AppRegistry.registerComponent('RCTZhiHuDaily', () => RCTZhiHuDaily);