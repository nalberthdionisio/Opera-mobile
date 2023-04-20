import React, { useEffect } from "react";
import { View, Text, ImageBackground , Image } from "react-native"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native";

export function Welcome() {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
          navigateToLogin();
        }, 5000);
    
        return () => clearTimeout(timer);
      }, []);
    
      function navigateToLogin() {
        navigation.navigate('Login');
      }

    return (
        <View 
        style={styles.container}
        >
            <ImageBackground
                style={styles.backgroundImg}
                source = {require("../../assets/images/Vector.png")}
                />
            <View>
                <Image
                    style = {styles.logo}
                    source={require("../../assets/images/logo.png")}
                />
                <Text
                style ={styles.content}
                >
                    Ganhe bônus por realizar seus exames em dia. Realize seus exames de forma organizada e seja recompensado por isso.
                </Text>
            </View>
        </View>
    );
}