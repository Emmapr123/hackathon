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
        <Tab title='Daily'/>
        <Tab title='Monthly'/>
        <Tab title='Yearly'/>
        </TabBar>
    </>
  );
};

export default TabBarSimple;