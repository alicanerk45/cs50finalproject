import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { CONFIG } from '../data/config';
import CommonButton from '../components/commonbutton.js';
import { getString } from '../data/strings';
import { COLORS } from '../style/colors';

const Results = ({ navigation }) => {

    const logoutHandler = () => {
        navigation.goBack();
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <View>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 18,
                        padding: 16,
                        marginTop: 16,
                    }}>
                    Results
                </Text>
                <PieChart data={[
                    {
                        name: 'Diet',
                        population: CONFIG.diet,
                        color: '#44FF07',
                        legendFontColor: '#050505',
                        legendFontSize: 15,
                    },
                    {
                        name: 'Psychologic',
                        population: CONFIG.psychologic,
                        color: '#FED60A',
                        legendFontColor: '#050505',
                        legendFontSize: 15,
                    },
                    {
                        name: 'Gis',
                        population: CONFIG.gis,
                        color: '#FB0007',
                        legendFontColor: '#050505',
                        legendFontSize: 15,
                    },
                    {
                        name: 'Ans',
                        population: CONFIG.ans,
                        color: '#3700FF',
                        legendFontColor: '#050505',
                        legendFontSize: 15,
                    },
                ]}
                    width={Dimensions.get('window').width - 16} height={220}
                    chartConfig={{
                        backgroundColor: '#194ad1',
                        backgroundGradientFrom: '#f74871',
                        backgroundGradientTo: '#ffbc47',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                />
                <CommonButton
                    text={getString('logout')}
                    onPress={logoutHandler}
                    buttonColor={COLORS.buttonBlue}
                    buttonWidth={'100%'}
                />
            </View>
        </View>
    );


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
        paddingTop: 30,
        backgroundColor: '#ecf0f1',
    }
});


export default Results;