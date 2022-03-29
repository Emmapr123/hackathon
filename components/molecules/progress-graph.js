import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'
import { Text, Layout, Card } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

const RemainingBudget = () => {
        return (
            <Layout>
                <View style={{position: 'relative'}}>
                    <View style={{position: 'absolute', left: '40%', top: '30%'}}>
                        <Text category='h5'>£150</Text>
                        <Text category='h6'>left of £200</Text>
                    </View>
                    <View>
                        <ProgressCircle
                            style={ { height: 200 } }
                            progress={ 0.7 }
                            progressColor={'rgb(134, 65, 244)'}
                            startAngle={ -Math.PI * 0.8 }
                            endAngle={ Math.PI * 0.8 }
                        />
                    </View>
                </View>
                <Card style={styles.card} status='success'>
                <Text>Looks like you're in budget, good job!</Text>
                </Card>
                <Card style={styles.card} status='warning'>
                <Text>You might be out of budget soon</Text>
                </Card>
            </Layout>
        )
}

const styles = StyleSheet.create({
    layout: {
      },
      card: {
        margin: 20,
      },
  });

export default RemainingBudget