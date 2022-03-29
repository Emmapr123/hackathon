import React from 'react';
import { Tab, TabBar } from '@ui-kitten/components';
import RemainingBudget from './progress-graph';

const TabBarSimple = ({selectedIndex, setSelectedIndex}) => {
  return (
      <>
        <RemainingBudget />
        <TabBar
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <Tab title='Weekly'/>
        <Tab title='Monthly'/>
        </TabBar>
    </>
  );
};

export default TabBarSimple;