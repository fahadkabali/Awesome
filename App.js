import { View } from "react-native";

export default function App(){
  return(
    <View style={{flex:1, backgroundColor:"plum", alignItems:"center", marginTop:"200"}}>
      <View style={{width:200, height:200, backgroundColor:"skyblue",padding:"4rem", alignItems:"center"}}></View>
      <View style={{width:200, height: 200, backgroundColor:"black"}}></View>
    </View>
  )
}