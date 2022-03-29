import { StyleSheet, View } from "react-native";
import { Text, Layout } from '@ui-kitten/components';
import BottomNav from './../BottomNav';
const InsightScreen = () => {

    return(
        <View>
            <Layout>
                <Text style={styles.title} category='h4'> Budget Insights</Text>
                <Layout style={styles.layout} level='4'>
                <Text>4</Text>

                </Layout>

                <Layout style={styles.layout} level='3'>
                <Text>3</Text>
                </Layout>

                <Layout style={styles.layout} level='2'>
                <Text>2</Text>
                </Layout>

                <Layout style={styles.layout} level='1'>
                <Text>1</Text>
                </Layout>
                <BottomNav />
            </Layout>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
      marginTop: 25,
    },
    layout: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default InsightScreen; 