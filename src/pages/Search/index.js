import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Search({navigation}) {

    navigation.setOptions({
        headerTitle: 'Consumo Total'
    })

    return (
        <View style={styles.container}>
            <Text>
                Pesquisar
            </Text>
        </View>
    );

}

const styles = StyleSheet.create ({
    container: {
        container:{
            flex: 1,
            width: '100%',
            backgroundColor: '#E0F2F7'
        },
    }
})