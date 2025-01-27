import { View, Text , StyleSheet,Image, Button} from 'react-native'
import React from 'react'

const Greet = () => {
  return (
    <View style={styles.card}>
        <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
          />
        <Text style={styles.title}>I'am Bro Jeid</Text>
        <Text style={styles.content}>I'm a software engineer and a freelance web developer. I'm passionate about learning new things and I'm always looking for new opportunities to grow my skills.</Text>
        <Button title="Contact Me" onPress={() => alert('Contact me')} />
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    card: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 5,
      width: '90%',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: 150,
      borderRadius: 10,
      marginBottom: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    content: {
      fontSize: 16,
      color: '#555',
    },
  });
    
  


export default Greet