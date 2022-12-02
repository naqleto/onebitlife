import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";


export default function Start() {
  return (
    <View style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: "center"}}>
          <Image
            source={require("../../assets/icons/logo3.png")}
            style={style.logo}
          />
          <Text style={style.description}>
            Vamos transformar sua vida {"\n"} em um jogo, buscando sempre {"\n"} o melhor nível.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },

  logo: {
    width: 300,
    height: 60,
    marginTop: 60,
    marginBottom: 20,
  },
  description: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 60,
  },
})
