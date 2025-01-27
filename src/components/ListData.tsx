import { View, Text,FlatList } from 'react-native'
import React from 'react'


const ListData = () => {

     const fruits=['apple','banana','mango','grape','orange','pineapple']
  return (
    <View style={{padding:10, backgroundColor:'lightgrey',}}>
      <Text style={{fontSize:20, textDecorationLine: 'underline', textDecorationColor: 'red'}}>ListData</Text>
        <FlatList style={{marginTop:10 , backgroundColor:'lightblue'}}
            data={fruits}
            keyExtractor={(item)=>item}
            renderItem={({item})=>(
            <Text style={{fontSize:15,fontWeight:'bold',color:'blue',padding:10, backgroundColor:'lightgrey' }   }>{item}</Text>
            )}
        />
    </View>
  )
}

export default ListData