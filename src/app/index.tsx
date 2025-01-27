 import { View, Text, Button,Image } from 'react-native'
 import React from 'react'
import Greet from '../components/Greet'
 
 const index = () => {
   return (
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: '#f5f5f5'}}>
       <Greet/>
     </View>
   )
 }
 
 export default index