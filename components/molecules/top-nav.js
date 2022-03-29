import React from 'react';
import { Tab, TabBar } from '@ui-kitten/components';

const TabBarSimple = ({selectedIndex, setSelectedIndex}) => {
  return (
    <TabBar
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <Tab title='Weekly'/>
      <Tab title='Monthly'/>
    </TabBar>
  );
};

export default TabBarSimple;