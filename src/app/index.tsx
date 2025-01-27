 import { View, Text, Button } from 'react-native'
 import React from 'react'
import ListData from '../components/ListData'
import ArrayOfObject from '../components/ArrayOfObject'
 
/**
 * In React Native, FlatList is a performant 
 * and efficient component for rendering large lists of data.
 *  It is used to display data in a
 *  scrollable list format and is optimized for handling large datasets by rendering only the visible items on the screen, 
 * thus improving performance.
 * */
 const index = () => {
    const name = 'Bro'
    
    const countDown=()=>{   
        let count = 12;
        let timer = setInterval(()=>{
            console.log(count);
            count--;
            if(count === 0){
                clearInterval(timer);
            }
        },1000)
    }

   return (
     <View>
       <Text>My name Is {name}</Text>

       {/* <Button title="Count Down" onPress={countDown}/> */}
       <ListData/>
       <ArrayOfObject />
     </View>
   )
 }
 
 export default index