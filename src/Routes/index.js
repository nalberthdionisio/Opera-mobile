import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons } from "@expo/vector-icons";

import { Welcome } from '../screens/Welcome'
import { Login } from '../screens/Login'
import { Home } from '../screens/Home'
import { Procedure } from '../screens/Procedure'
import { Notification } from '../screens/Notification'
import { Profile } from '../screens/Profile'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {

    return (
        <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home">
                {() => (
                    <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor:'#D5AF36',
                        inactiveTintColor:'#fff',

                    }}
                        screenOptions={{
                            tabBarStyle: {
                                backgroundColor: '#284061',
                                position: 'absolute',
                                borderTopWidth: 0,
                                height: 60,
                                bottom: 20,
                                left: 30,
                                right: 30,
                                borderRadius: 20,
                                elevation: 0
                        },
                        tabBarShowLabel: false,
                    }}
                    >
                        <Tab.Screen name="Inicio" component={Home} 
                            options={{
                                headerShown: false,
                                tabBarIcon: ({color, size, focused}) => {
                                    if(focused){
                                        return <Ionicons name="home" size={size} color={color}/>
                                    }
                                    return < Ionicons name="home-outline" size={size} color={color}/>
                                }
                            }}
                        />
                        <Tab.Screen name="Procedimento" component={Procedure}
                            options={{
                                headerShown: false,
                                tabBarIcon: ({color, size, focused}) => {
                                    if(focused){
                                        return <Ionicons name="clipboard" size={size} color={color} />
                                    }
                                    return <Ionicons name="clipboard-outline" size={size} color={color} />
                                }
                            }}
                        />
                        <Tab.Screen name="Perfil" component={Profile} 
                            options={{
                                headerShown: false,
                                tabBarIcon: ({color, size, focused}) => {
                                    if(focused){
                                        return <Ionicons name="person" size={size} color={color} />
                                    }
                                    return <Ionicons name="person-outline" size={size} color={color} />
                                }
                            }}
                        />
                        <Tab.Screen name="Notificação" component={Notification} 
                            options={{
                                headerShown: false,
                                tabBarIcon: ({color, size, focused}) => {
                                    if(focused){
                                        <Ionicons name="ios-notifications-sharp" size={size} color={color}/>
                                    }
                                    return <Ionicons name="md-notifications-outline" size={size} color={color}/>
                                }
                            }}
                        />
                    </Tab.Navigator>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    )
}
