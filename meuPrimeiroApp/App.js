import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function App(){
  return(
    <View style = {styles.container}>
      <TouchableOpacity>
      <Text style = {{fontSize: 30, fontStyle: 'bold'}}>Meu primeiro APP</Text>
      </TouchableOpacity>
      
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#3d2b8f86',
  }
})