import {StyleSheet, Dimensions} from 'react-native';


const styles = StyleSheet.create({
    image:{
      width: '100%',
      height: 500,
      resizeMode: 'cover', 
      justifyContent: 'center', 
    },  
    title:{
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25
    },
    button:{
        backgroundColor: '#fff',
        width: 200,
        marginLeft: 25,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,

    },
    buttonText:{
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
    searchButton:{
        backgroundColor: '#fff',
        height: 60,
        width: Dimensions.get('screen').width - 20,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: 20,
        zIndex: 100,
        elevation: 2,
        marginHorizontal: 10,
    },
    searchButtonText:{
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
})

export default styles;