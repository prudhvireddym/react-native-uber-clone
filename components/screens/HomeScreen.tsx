import React from 'react'
import {StyleSheet,Text,View, SafeAreaView,Image} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../NavOptions'

const HomeScreen = ()=>{
    return(
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
            <Image
            style ={{
                height:100,
                width:100,
                resizeMode:'contain'
            }}
            source={{
                uri:"https://links.papareact.com/gzs"
            }}
            />
                <NavOptions/>
            </View>
            
        </SafeAreaView>
    )
}

export default HomeScreen;

// const styles = styleSheet.create({
//     container: {
//         flex: 1,
//         padding: 24,
//         backgroundColor: "#eaeaea"
//       }
// })