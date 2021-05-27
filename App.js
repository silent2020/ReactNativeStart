import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <View style={{alignItems:'center'}}>
          <Image source={{uri:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/834efb980b5d507eb3c81c15dc22cb408e93a6c90e7358e908c1f1f15b8f7f48._V_SX1080_.jpg'}} 
          style = {{width: 250,
                    height: 150,
                    resizeMode : 'center',
                    marginTop: 50,
                    borderColor:'black',
                    borderWidth: 7,
                    borderRadius: 5}} />
        </View>
          <Text style={styles.caption}>Sponge Bob</Text>
        <View style={{alignItems:'center'}}>
          <Image source={{uri:'https://imgix.bustle.com/rehost/2016/9/14/32fe072d-b58a-4099-bb70-ced0899e7d99.jpg'}} 
           style = {{width: 250,
                    height: 170,
                    resizeMode : 'stretch',
                    marginTop: 50,
                    borderColor:'blue',
                    borderWidth: 7,
                    borderRadius: 5}}/>
        </View>
        <Text style={styles.caption}>Artur</Text>
        <View style={{alignItems:'center'}}>
          <Image source={{uri:'https://static.farakav.com/files/pictures/01491279.jpg'}} 
          style = {{width: 250,
                    height: 150,
                    resizeMode : 'center',
                    marginTop: 50,
                    borderColor:'green',
                    borderWidth: 7,
                    borderRadius: 5}} />
        </View>
        <Text style={styles.caption}>Captain Tsubasa</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center', // از چپ
    justifyContent: 'center', // از بالا
    display: "flex",
    height: "100%",
    textAlign: "center",
  },
  border:{
    borderColor: 'black',
    borderWidth: 2, 
    height: 785, 
    width: 380,
  },
  caption:{
    color: 'gray',
    fontSize: 25,
    alignItems:'center',
    textAlign: 'center',
    paddingTop: 5,
  },
});
