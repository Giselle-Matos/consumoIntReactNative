import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Montserrat_100Thin } from '@expo-google-fonts/montserrat';

export default function ConsumoTot ({ navigation }) {

    navigation.setOptions({
        headerTitle: 'Consumo Total'
    })
    return (
        <ScrollView style={styles.container}>
            
                <View>
                    <Text style={styles.consumoMedio}>
                        Consumo Total médio:
                    </Text>
                    <Text style={styles.valorConsumoMedio}>
                        310 kW/h
                    </Text>
                    <View style={styles.line}/>
                    <Text style={styles.consumoEmReais}>
                        Valor a pagar:
                    </Text>
                    <Text style={styles.valorConsumoEmReais}>
                        R$ 625,69
                    </Text>
                    <View style={styles.line}/>
                    <Text style={styles.consumoImediato}>
                        Consumo Imediato
                    </Text>
                    <Text style={styles.valorConsumoImediato}>
                        235 kW/h
                    </Text>
                    <View style={styles.line}/>
                </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#E0F2F7'
    },
    consumoMedio:{
        fontSize: 25,
        fontFamily: 'Montserrat_100Thin',
        fontWeight: 'bold',
        marginBotton: '1%',
        marginLeft: '1%',
        marginRight: '5%',
        marginBottom: '1%',
        color: '#191970'
    },
    valorConsumoMedio:{
        fontSize: 20,
        fontFamily: 'Montserrat_100Thin',
        fontWeight: 'bold',
        height: 60,
        width: 80,
        backgroundColor: '#58ACFA',
        borderRadius: 10,
        marginBotton: '1%',
        marginLeft: '1%',
        marginRight: '5%',
        marginBottom: '1%',
        textAlign: 'center',
        color: '#191970'
    },
    consumoEmReais:{
        fontSize: 25,
        fontFamily: 'Montserrat_100Thin',
        fontWeight: 'bold',
        marginBotton: '1%',
        marginLeft: '1%',
        marginRight: '5%',
        marginBottom: '1%',
        color: '#191970'
    },
    valorConsumoEmReais:{
        fontSize: 20,
        fontFamily: 'Montserrat_100Thin',
        fontWeight: 'bold',
        height: 60,
        width: 80,
        backgroundColor: '#58ACFA',
        borderRadius: 10,
        marginBotton: '1%',
        marginLeft: '1%',
        marginRight: '5%',
        marginBottom: '1%',
        textAlign: 'center',
        color: '#191970'
    },
    consumoImediato: {
        fontSize: 25,
        fontFamily: 'Montserrat_100Thin',
        fontWeight: 'bold',
        marginBotton: '1%',
        marginLeft: '1%',
        marginRight: '5%',
        marginBottom: '1%',
        color: '#191970'
    },
    valorConsumoImediato: {
        fontSize: 20,
        fontFamily: 'Montserrat_100Thin',
        fontWeight: 'bold',
        height: 40,
        width: 90,
        backgroundColor: '#58ACFA',
        borderRadius: 10,
        marginBotton: '1%',
        marginLeft: '1%',
        marginRight: '5%',
        marginBottom: '1%',
        textAlign: 'center',
        color: '#191970'
    },
    line:{
        borderWidth: 1,
        borderBottomColor: '#DDD',
        marginVertical: '2%'
    }

})