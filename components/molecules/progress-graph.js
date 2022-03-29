import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'
import { Text, Layout } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const RemainingBudget = () => {
        return (
            <Layout
            style={styles.tab}
            >
                <Text category='h6'>Credit Remaining</Text>
                <ProgressCircle
                    style={ { height: 150 } }
                    progress={ 0.7 }
                    progressColor={'rgb(134, 65, 244)'}
                    startAngle={ -Math.PI * 0.8 }
                    endAngle={ Math.PI * 0.8 }
                />
            </Layout>
        )
}

const styles = StyleSheet.create({
    tab: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default RemainingBudget