import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React from 'react';




const Login = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image source={require('../../assets/login.png')} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.text}>Welcome </Text><Text style = {
          {fontSize:28,color:"#909090",fontWeight:"200",}
        }>to the educational app</Text>
        <TouchableOpacity style={{marginTop:100,backgroundColor:"#0000ff",margin:20,
      borderRadius:20, width:300,height:50,alignItems:"center", justifyContent:"center",}} onPress={() => console.log('TouchableOpacity pressed')}>
          <Text style={{color:"white",fontSize:20,}}>Sign In With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    height: 500,
    alignItems:"center",
    marginTop:-30,
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
  },
  text: {
    color: '#0000ff',
    fontSize:34,
    fontWeight:"500",
    margin:20,
    letterSpacing:5,
    marginBottom:0,
  },
  image: {
    width: 400,
    height: 400,
  },
});
