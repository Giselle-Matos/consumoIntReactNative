import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Detail2 from './pages/Detail2';
import Detail3 from './pages/Detail3';
import ConsumoTot from './pages/ConsumoTot';


const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options = {{
                        headerTintColor: '#fff',
                        headerStyle: {
                            backgroundColor: '#4682B4',
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_100Thin',
                            fontWeight: 'bold'
                        }
                    }}
                    />
                <Stack.Screen
                    name="Detail"
                    component={Detail} 
                    options = {{
                        headerTintColor: '#fff',
                        headerStyle: {
                            backgroundColor: '#4682B4',
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_100Thin',
                            fontWeight: 'bold'
                        }
                    }}
                    />
                <Stack.Screen
                    name="Detail2"
                    component={Detail2}
                    options = {{
                        headerTintColor: '#fff',
                        headerStyle: {
                            backgroundColor: '#4682B4',
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_100Thin',
                            fontWeight: 'bold'
                        }
                    }}
                    />
                <Stack.Screen
                    name="Detail3"
                    component={Detail3}
                    options = {{
                        headerTintColor: '#fff',
                        headerStyle: {
                            backgroundColor: '#4682B4',
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_100Thin',
                            fontWeight: 'bold'
                        }
                    }}
                    />
                <Stack.Screen
                    name="ConsumoTot"
                    component={ConsumoTot}
                    options = {{
                        headerTintColor: '#fff',
                        headerStyle: {
                            backgroundColor: '#4682B4',
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_100Thin',
                            fontWeight: 'bold'
                        }
                    }}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;