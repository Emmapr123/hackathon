import React from 'react';
import { Tab, TabBar } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const TabBarSimple = ({selectedIndex, setSelectedIndex}) => {
  return (
      <>
        <TabBar
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}
        style={styles.bar}
        indicatorStyle={{backgroundColor: '#D1D6DE', borderRadius: 10, color: 'green'}}>
        <Tab title='Weekly'/>
        <Tab title='Monthly'/>
        </TabBar>
    </>
  );
};

const styles = StyleSheet.create({
  bar: {
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    borderColor: 'lightgray',
    borderWidth: 1,
    backgroundColor: 'white',
    color: 'black'
  }
});

export default TabBarSimple;