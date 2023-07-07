import { StyleSheet, View } from "react-native";
import React from "react";
import Topo from "./components/Topo";
import Detalhes from "./components/Detalhes";

export default function Cesta() {
    return (
        <>
            <Topo />
            <View style={estilos.cesta}>
                <Detalhes />
            </View>
        </>
    );
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
});
