/**
 * Sinterklaas
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <ScrollView style={styles.container}>
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
      </ScrollView>
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
    fontFamily: 'Optima-Regular',
    fontSize: 26,
    textAlign: 'center',
    color: '#ffffff',
    margin: 10,
  },
  song: {
    fontFamily: 'Optima-Regular',
    fontSize: 20,
    textAlign: 'left',
    color: '#ffffff',
    margin: 10,
  },
});
