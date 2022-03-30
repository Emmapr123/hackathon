import React from 'react';
import { StyleSheet, View,  Dimensions} from 'react-native';
import { Card, List,Icon, Text, Button, Modal } from '@ui-kitten/components';
import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph'
import LottieView from 'lottie-react-native';

import ContributionGraphCard from "./../molecules/contribution-graph";
const data = new Array(8).fill({
  title: 'Household device',
});

const windowWidth = Dimensions.get('window').width;
const StarIcon = (props) => (
  <Icon {...props} name='star'/>
);
const InsightItemList = () => {

  const [visible, setVisible] = React.useState(false);

  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category='h6'>
        {info.item.title} {info.index + 1}
      </Text>
    </View>
  );

  const renderItemFooter = (footerProps) => (
    <Button
    onPress={() => setVisible(true)}
    appearance='outline' accessoryLeft={StarIcon} 
    status='warning'
      size='small'>
      Saving Tips
    </Button>
  );

  const renderItem = (info) => (
    <Card
      style={styles.item}
      status='basic'
      header={headerProps => renderItemHeader(headerProps, info)}
      footer={renderItemFooter}>
        <HorizontalBarGraph
          style={styles.chart}
          data={[55, 100]}
          labels={['Actual', 'Target']}
          width={windowWidth - 80}
          height={250}
          barRadius={15}
          barColor={'#0b9828'}
          baseConfig={{
            hasYAxisBackgroundLines: true,
            xAxisLabelStyle: {
              rotation: 0,
              fontSize: 12,
              width: 70,
              yOffset: 4,
              xOffset: -15
            },
            yAxisLabelStyle: {
              rotation: 40,
              fontSize: 13,
              prefix: '£',
              position: 'bottom',
              xOffset: 10,
              decimals: 0,
              height: 40
            }
          }}
        />
        <View style={{height: 50, marginTop: -40, alignItems: 'center'}}>
        <LottieView resizeMode={'cover'} style={{height: 70}} source={require('./../../assets/ovo-heart.json')} autoPlay loop />
        </View>
      
       { /*<Card style={styles.card} status='success'>
                <Text>Awesome! You're right on track!</Text>
                </Card>
                <Card style={styles.card} status='warning'>
                <Text>Opps! Looks like you're overbudget, checkout out our energy saving tips below</Text>
        </Card>*/}
    </Card>
  );
  return (
    <>
    <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={data}
      renderItem={renderItem}
    />
    <Modal
    visible={visible}
    backdropStyle={styles.backdrop}
    onBackdropPress={() => setVisible(false)}>
    <Card disabled={true}>
      <Text category='h4'>Money Saving tips</Text>

      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet est aliquet, vestibulum orci at, feugiat nibh. </Text>
      <Text>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</Text>
       <Text> Ut vel quam nulla. Integer a mollis leo. Etiam mattis ultrices ante, a interdum turpis. Quisque et ex lobortis, dictum quam sed, dapibus nunc. Aliquam vehicula, turpis eu faucibus ornare, diam justo malesuada est, in euismod orci nisl sit amet felis.</Text>  
       <Text>Praesent consectetur placerat enim, eu iaculis elit malesuada sed. Vestibulum id rhoncus sem, in ullamcorper metus.</Text>

       <Text>Nam rutrum lacinia euismod. Nulla luctus varius euismod. Morbi vehicula maximus elit in f. Praesent ac dolor augue. Pellentesque iaculis turpis felis, ut dignissim tortor congue non.. </Text>
       <Text>Praesent consectetur placerat enim, eu iaculis elit malesuada sed. Vestibulum id rhoncus sem, in ullamcorper metus.</Text>

      <Button onPress={() => setVisible(false)}>
        DISMISS
      </Button>
    </Card>
    </Modal>
    </>
  );
};

export default InsightItemList;

const styles = StyleSheet.create({
  chart: {
    backgroundColor: 'white'
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});