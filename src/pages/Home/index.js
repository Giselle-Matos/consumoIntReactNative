import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-web';
import { Montserrat_100Thin } from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';
import Detail from '../Detail';
import Detail2 from '../Detail2';
import Detail3 from '../Detail3';
import ConsumoTot from '../ConsumoTot';
import Search from '../Search';

export default function Home() {
    const [post, setPosts] = useState([]);
    useEffect(() => {
       fetch('https://api.thingspeak.com/channels/1875166/feed.json?api_key=CFRP8EPX0GZ7SL85&results=1')
      .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
 

    const navigation = useNavigation();

        return(
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View style={styles.header}>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Eletrodomésticos</Text>
                            <Text style={styles.text}>•</Text>
                            <Text style={styles.text}>Consumo</Text>
                            <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                                <MaterialIcons
                                    name="filter-list"
                                    size={24}
                                    color="#000"
                                />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <ScrollView>
                        <View style={styles.ScrollContent}>
                            <TouchableOpacity style={styles.box} >
                                <View id='arduino1' onClick={() => navigation.navigate('Detail')}>
                                    <Text style={styles.nomeEletro}>{post.feeds ? post.feeds[0].field1: ""}</Text>
                                    <Text style={styles.nomeEletro}>{post.feeds ? post.feeds[0].field2: ""} kW/h</Text>
                                </View>


                            </TouchableOpacity>
                            <TouchableOpacity style={styles.box}>
                                <View id='arduino2' onClick={() => navigation.navigate('Detail2')}>
                                    <Text style={styles.nomeEletro}>Secador de Cabelo</Text>
                                    <Text style={styles.consumoEletro}>80 kW/h</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.box}>
                                <View id='arduino3' onClick={() => navigation.navigate('Detail3')}>
                                    <Text style={styles.nomeEletro}>Microondas</Text>
                                    <Text style={styles.consumoEletro}>130 kW/h</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.box}>
                                <View id='consumoTotal' onClick={() => navigation.navigate('ConsumoTot')}>
                                    <Text style={styles.nomeEletro}>Consumo Total</Text>
                                    <Text style={styles.consumoEletro}>310 kW/h</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.searchIcon} onPress={() => navigation.navigate('Search')}>
                                <MaterialIcons
                                    name="search"
                                    size={24}
                                    color="#000"
                                />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
        </View >
        );
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#E0F2F7',
    },
    header: {
        marginBotton: 8
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%',
    },
    text: {
        color: '#191970',
        fontFamily: 'Montserrat_100Thin',
        fontSize: 20,
        marginHorizontal: '1%',
        fontWeight: 'bold' 
    },
    line: {
        borderBottonColor: '#696969',
        borderBottonWidth: 20,
    },
    ScrollContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    box: {
        width: '100%',
        height: 80,
        backgroundColor: '#4682B4',
        marginBotton: '1%',
        marginLeft: '1%',
        marginRight: '5%',
        marginBottom: '1%',
        borderRadius: 10

    },
    nomeEletro: {
        textAlign: 'center',
        fontFamily: 'Montserrat_100Thin',
        fontWeight: 'bold',
        fontSize: 22,
        color: '#fff'

    },
    consumoEletro: {
        textAlign: 'center',
        fontFamily: 'Montserrat_100Thin',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'
    },
    line: {
        borderWidth: 1,
        borderBottomColor: '#DDD',
        marginVertical: '2%',

    },
    searchIcon: {
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#B0C4DE',
        width: 60,
        height: 60,
        color: '#fff',
        position: 'absolute',
        bottom: 30,
        justifyContent: 'center',
        marginLeft: 10

    }
});







