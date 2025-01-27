import { View, Text ,FlatList,Button} from 'react-native'
import React from 'react'

const ArrayOfObject = () => {
    const district_of_Rwanda = [
        // Kigali City
        { name: "Nyarugenge", province: "Kigali City" },
        { name: "Gasabo", province: "Kigali City" },
        { name: "Kicukiro", province: "Kigali City" },
      
        // Southern Province
        { name: "Huye", province: "Southern Province" },
        { name: "Gisagara", province: "Southern Province" },
        { name: "Nyaruguru", province: "Southern Province" },
        { name: "Nyamagabe", province: "Southern Province" },
        { name: "Muhanga", province: "Southern Province" },
        { name: "Ruhango", province: "Southern Province" },
        { name: "Kamonyi", province: "Southern Province" },
      
        // Northern Province
        { name: "Musanze", province: "Northern Province" },
        { name: "Gicumbi", province: "Northern Province" },
        { name: "Rulindo", province: "Northern Province" },
        { name: "Burera", province: "Northern Province" },
        { name: "Gakenke", province: "Northern Province" },
      
        // Eastern Province
        { name: "Rwamagana", province: "Eastern Province" },
        { name: "Nyagatare", province: "Eastern Province" },
        { name: "Kayonza", province: "Eastern Province" },
        { name: "Kirehe", province: "Eastern Province" },
        { name: "Ngoma", province: "Eastern Province" },
        { name: "Bugesera", province: "Eastern Province" },
      
        // Western Province
        { name: "Rubavu", province: "Western Province" },
        { name: "Rusizi", province: "Western Province" },
        { name: "Nyamasheke", province: "Western Province" },
        { name: "Karongi", province: "Western Province" },
        { name: "Ngororero", province: "Western Province" },
        { name: "Rutsiro", province: "Western Province" },
      ];

interface District {
  name: string;
  province: string;
}

const renderDistrict = ({ item }: { item: District }) => {
    if (item.province === 'Kigali City') {
        return (
          <View style={{backgroundColor: 'blue',
            padding: 20,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 5,
            width: '90%',  }}>
            <Text style={{ fontSize: 20, padding: 10 }}>{item.name}</Text>
          </View>
        )
      }else if(item.province === 'Southern Province'){
        return (
          <View style={{backgroundColor: 'green', padding: 20, borderRadius: 10}}>
            <Text style={{ fontSize: 20, padding: 10 }}>{item.name}</Text>
          </View>
        )
      }else if(item.province === 'Northern Province'){
        return (
          <View style={{backgroundColor: 'red', padding: 20, borderRadius: 10}}>
            <Text style={{ fontSize: 20, padding: 10 }}>{item.name}</Text>
          </View>
        )
      }else if(item.province === 'Eastern Province'){
        return (
          <View style={{backgroundColor: 'yellow', padding: 20, borderRadius: 10}}>
            <Text style={{ fontSize: 20, padding: 10 }}>{item.name}</Text>
          </View>
        )
      }else if(item.province === 'Western Province'){
        return (
          <View style={{backgroundColor: 'purple', padding: 20, borderRadius: 10}}>
            <Text style={{ fontSize: 20, padding: 10 }}>{item.name}</Text>
          </View>
        )
      }
  return (
    <View>
      <Text style={{ fontSize: 20, padding: 10 }}>May be This is Dispola</Text>
      <Text style={{ fontSize: 20, padding: 10 }}>Go to the specific Embassy</Text>
      
    </View>
  )
}

  return (
    <View style={{ padding: 10, backgroundColor: 'lightgrey' }}>
      <Text style={{ fontSize: 30, padding: 10,borderBottomColor:'red',borderBottomWidth:2 }}>District of Rwanda</Text>
      <FlatList
        data={district_of_Rwanda}
        keyExtractor={(item) => item.name}
        renderItem={renderDistrict}
      />
      
    </View>
  )
}

export default ArrayOfObject