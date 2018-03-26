import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Button,
    StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
    boardInput: {
        flexDirection: 'row'
    },
    textInputFace: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        flex: 2          
    }
})
class TextInputChat extends Component {
    constructor(props) {
        super(props);
    }

    onKeyPressTiggerEvents = (key) => {       
        if(this.props.keysTrigger.find(item=> item === key)) {            
            this.props.activateTrigger(key);
        }
        else if(key === ' ') {
            this.props.activateTrigger(key);
        }
        else {
            this.props.activateTrigger('');
        }
    } 

    render() {
        let props = this.props;
        return(
            <View style={{marginTop: 20}}>
               
       
            <KeyboardAvoidingView 
            style={styles.boardInput}
            behavior="padding"
            >             
              <TextInput
                style={styles.textInputFace}
                 onKeyPress={(event)=>this.onKeyPressTiggerEvents(event.nativeEvent.key)}
                 onSelectionChange={(event)=>{props.onSelectionChangeInput(event.nativeEvent.selection)}}
                 onChangeText={(text)=>props.addText(text)}
                 value={props.value}                       
              />
              <Button
                  onPress={()=>props.send()}
                  title={props.titleButon}
                  color="#841584"
                  accessibilityLabel="Get the object to send to the serve"
              />
          </KeyboardAvoidingView>
    
         </View>
        )
    }
}


export default TextInputChat;