import React from "react";
import { View, Text, ImageBackground } from "react-native"
import styles from "./styles"

export function Welcome() {
    return (
        <View style={styles.container}>
            <View>
                <Text>alo</Text>
                <ImageBackground
                style={styles.backgroundImg}
                sourrce = {require("../../assets/images/logo.png")}
                />
            </View>
            <View>
                <Text
                style ={styles.content}
                >Ganhe bônus por realizar seus exames em dia. Realize seus exames de forma organizada e seja recompensado por isso.</Text>
            </View>
        </View>
    );
}