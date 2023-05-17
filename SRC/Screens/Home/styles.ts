import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create ({
    container: {
      flex:1,
      backgroundColor: "#131016",
      padding: 24  
    },
  
    eventName: {
        color: '#FFF',
        fontsize:300 ,
        fontWeight: 'bold',
        marginTop: 48
    },
  
    eventDate:{
        color:'#FFF',
        fontsize: 16,
    },
    
    input: {
        flex:1,
        height :56,

         backgroundColor:'#A9A9A9',
         borderRadius: 5,
         color: '#000000',
         padding: 16,
         fontsize:16,
         marginRight: 12
        },

    buttonText: {
        color:'#FFF',
        fontSize: 16
    },

    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#00FFFF',
        alignItems: 'center',
        justifyContent: 'center',
    }, 

    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42

    }
  
  });