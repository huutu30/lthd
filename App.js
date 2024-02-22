import React from "react";

import { View, Text, StyleSheet, StatusBar } from "react-native";

import { colors } from "./src/global/styles";
import SignInScreen from "./src/screens/authScreens/SignInScreen";
import SignUpScreen from "./src/screens/authScreens/SignUpScreen";
import SignInWelcomeScreen from "./src/screens/authScreens/SignInWelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import HomeHeader from "./src/components/HomeHeader";
export default function App(){
  return(
    <View style = {styles.container}>
      
      <StatusBar
        barStyle= "light-content"
        backgroundColor= {colors.statusbar}
      />
      {/* <SignInScreen/> */}
      {/* <SignUpScreen/> */}
      <SignInWelcomeScreen/>
      {/* <HomeScreen/> */}
      {/* <HomeHeader/> */}
      
    </ View>
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})
// import React from 'react'

// import {View, Text, StyleSheet,StatusBar} from 'react-native'
// import  {SignInContextProvider}  from './src/contexts/authContext'
// import {colors} from './src/global/styles'
// import RootNavigator from './src/navigation/rootNavigation'







// export default function App(){
//   return(
//     <SignInContextProvider>
//     <View style = {styles.container}>
//       <StatusBar 
//         barStyle = "light-content"
//         backgroundColor = {colors.statusbar}
//       />
   
//         <RootNavigator />
     
//     </View>
//     </SignInContextProvider> 
  
//   )
// }

// const styles = StyleSheet.create({
//   container: {flex:1}
// })