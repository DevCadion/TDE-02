import { StyleSheet } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    },
    boxtop:{
        height:200,
        width:"100%",
        alignItems:"center",
        backgroundColor:"white"

    },
    boxmid:{
        alignContent:"center",
        justifyContent:"center",
        height:200,
        width:"100%",
        backgroundColor:"white"

    },
    button:{
        height:375,
        width:"100%",
        backgroundColor:"white",
        alignItems: "center"
    },
    deus:{
        width:200,
        height:100,
        marginTop:25
    },
    txttop:{
        fontWeight:"bold",
        marginTop:40,
    },
    btt:{
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:"#0F8DF2",
        height:50,
        margin:100,
        marginTop:180,
        borderRadius:24
    },
    txtimpp:{
        alignContent:"center",
        justifyContent:"center",
        marginLeft:80,

    },
    impt:{
        alignContent:"center",
        justifyContent:"center",
        marginLeft:80,
        marginTop:10,
        backgroundColor:"#dcdcdc",
        marginRight:80,
        height:40,
        borderRadius:24,
        paddingHorizontal:20


    }
})
