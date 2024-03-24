import { useState } from "react";
import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar } from "react-native";
const img = require('./assets/adaptive-icon.png')

export default function App(){
  const [button, setButton] =useState(true)
  // const [status, setStatus] = useState(false)
 
  return(
    <View style={{flex:1, backgroundColor:"plum", padding:60}}>
      <StatusBar backgroundColor="lightgreen" barStyle="light-content" hidden={()=>setButton(true)}/>
      <ScrollView>
        <Image source ={img} style={{width:200, height:200}}/>
        <Image source={{uri:"https://plus.unsplash.com/premium_photo-1680087014917-904bb37c5191?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} style={{width:200, height:200}}/>
        <ImageBackground source={img} style={{flex:1}}>
          <Text style={{textAlign:"center", paddingTop:"50%"}}>backgroung, </Text>
        </ImageBackground>
        <Pressable onPress={()=>alert("you pressed me")} >
        <Text>Now your text has a background color, next you will add some space (padding) around the text.

              A Modifier is used to augment or decorate a composable. One modifier you can use is the padding modifier,
              which adds space around the element (in this case, adding space around the text). This is accomplished by using the Modifier.padding() function.

              Every composable should have an optional parameter of the type Modifier. This should be the first optional parameter.

              Add a padding to the modifier with a size of 24.dp.
          </Text>
          </Pressable>
        <Image source ={img} style={{width:200, height:200}}/>
        <Button 
        title="Submit"
        onPress={()=>alert("You pressed me!")}
        color={"blue"}
        // disabled
        />
        <Modal visible={button}
        onRequestClose={()=>  setButton(false)}
        animationType="slide"
        presentationStyle="pageShow">
          <View style={{color:"red", backgroundColor:"yellow"}}>
          <Text style={{backgroundColor:"green"}}>Modal view</Text>
            <Button title="close" color="lightblue" onPress={(e)=>{setButton(!button)}}/>
            </View>
        </Modal>
      </ScrollView>
    </View>
  )
}