/**
 * Sinterklaas
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.intro}>
            Dag Sinterklaasje
          </Text>
        </View>
        <View>
          <Text style={styles.song}>
            Dag Sinterklaasje, dáág, dáág, dáág, dáág Zwarte Piet.
            {"\n"}
            Dag Sinterklaasje, dáág, dáág, luister naar ons afscheidslied.
            {"\n"}
            {"\n"}
            {"\n"}
            Dag Sinterklaasje, dáág, dáág, dáág, dáág Zwarte Piet.
            {"\n"}
            Dag Sinterklaasje, dáág, dáág, luister naar ons afscheidslied.
            {"\n"}
            {"\n"}
            {"\n"}
            Dag Sinterklaasje, dáág, dáág, dáág, dáág Zwarte Piet.
            {"\n"}
            Dag Sinterklaasje, dáág, dáág, luister naar ons afscheidslied.
            {"\n"}
            Dag Sinterklaasje, dáág, dáág, dáág, dáág Zwarte Piet.
            {"\n"}
            Dag Sinterklaasje, dáág, dáág, luister naar ons afscheidslied.
            {"\n"}
            {"\n"}
            {"\n"}
            Dag Sinterklaasje, dáág, dáág, dáág, dáág Zwarte Piet.
            {"\n"}
            Dag Sinterklaasje, dáág, dáág, luister naar ons afscheidslied.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FF362E',
  },
  intro: {
    fontSize: 26,
    textAlign: 'center',
    color: '#ffffff',
    margin: 10,
  },
  song: {
    fontSize: 20,
    textAlign: 'left',
    color: '#ffffff',
    margin: 10,
  },
});
