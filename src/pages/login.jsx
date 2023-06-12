import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View, TextInput, StyleSheet, I, } from 'react-native';

export default function LoginScreen() {
    const navigation = useNavigation();

    return (


        <View style={styles.container}>

            <Text style={styles.Titulo}>BEM VINDO AO SITE DOS DEVS</Text>

            <TextInput style={styles.user} placeholder="User" />
            <TextInput style={styles.Password} secureTextEntry placeholder="Password" />

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.login}>Login</Text>
            </TouchableOpacity>

        </View>

    );
}
const styles = StyleSheet.create({
    container: {

        flex: 50,
        backgroundColor: '#000000',
        borderColor: '#00FF00',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        paddingBottom: '90px',
        paddingTop: '50px',
        paddingRight: '10px',
        paddingLeft: '10px',
        shadowColor: '#7CFC00',
        shadowRadius: 10,

    },
    Titulo: {
        color: '#00FF00',
        fontSize: 30,
        marginBottom: 30,
    },
  
    btn: {
        color: 'white',
        
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: 0,
        height: '30px',

    },
    user: {
        color: '#00FF00',
        fontSize: '16',
        height: 22,
        marginBottom: 15,
        borderWidth: 5,
        borderRadius: 10,
        backgroundColor: '#1C1C1C',
        padding: 10,
    },
    Password: {
        color: '#00FF00',
        fontSize: '16',
        height: 22,
        marginBottom: 22,
        borderWidth: 5,
        borderRadius: 10,
        backgroundColor: '#1C1C1C',
        padding: 10,
    },
    login:{

        color:'white'
        
       
    }
});