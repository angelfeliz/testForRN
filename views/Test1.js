import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View 
         ,Text
         ,TextInput
         ,ScrollView
         ,Button
         ,TouchableWithoutFeedback
         ,Keyboard         
         ,StyleSheet
         ,KeyboardAvoidingView
    } from 'react-native';
import  * as messageActions  from '../redux/actions/messageActions'
import DropDownList from '../components/DropDownList';
import { connect } from 'react-redux';
import setMentionOnText from '../utils/setMentionOnText';
import removeMentionFromText from '../utils/removeMentionFromText';
import TextInputChat from '../components/TextInputChat';

const styles=  StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        paddingTop: 30
        
    },
    board: {
        flex: 3,        
        backgroundColor: 'powderblue',        
    },
   
})

class Test1 extends Component {
    constructor(props) {
        super(props);       
    }
    static navigationOptions = {
        title: 'Test-1'
    };

    selectedItemMentionFromList = (mention) => {
        this.props.toggleListMention();             
        let newText = setMentionOnText(mention, this.props.message.text, this.props.message.util.positions.start);        
        this.props.addText(newText);
    }

    addText = (text) => {        
        this.props.addText(text);
    }

    onKeyPressTiggerEvents = (key) => {       
        switch(key) {
            case 'Backspace':    
               if(!this.props.message.util.toggleListMention)  {                                      
                  this.props.isBackspace(true);
               }                
              break;
            case '@':                
                this.props.toggleListMention();                
              break;
            case ' ':
                if(this.props.message.util.toggleListMention) {
                    this.props.toggleListMention();
                }         
              break;       
            defualt:
               this.props.isBackspace(false);            
            return false;
        }
    } 
    
    isBackspaceAtMention = ({start, end}, text, isWhiteSpace) => {             
        if(start) {           
            let firstHalfMention = text.substr(0, start).match(/@\w*|\w*/g) || [];    
             
            if(firstHalfMention.length > 0){
                let first = firstHalfMention.filter(item => item !== '');
            
               return first[first.length-1].match(/@\w*/) ? true : false;
            }     
            return firstHalfMention;
        }
    }
    
    onSelectionChangeInputChat = (positions) => {       
        
        this.props.setPositions(positions);
        let text = this.props.message.text;    
      
        if(text.length > 0) {//if you delete all the text it wont go throw this part           
            if(this.props.message.util.isBackspace) {                
                if(this.isBackspaceAtMention(positions, text)) {     
                    this.props.isBackspace(false);                     
                    let newText = removeMentionFromText(positions,text);
                    this.props.addText(newText);
                }      
            }  
            else if(this.props.message.util.toggleListMention) {            
              let textToSearch  = text.substr(0, positions.start).match(/@\w*/g);  
              if(textToSearch) {
                  let characters = textToSearch[textToSearch.length-1].replace('@','');            
                  if(characters.length >= 1) {
                      this.props.getUserFromApi(characters);                               
                    } 
                }                                              
            }
       }
        else if(this.props.message.util.toggleListMention) {
          this.props.toggleListMention();
        }
    }
    
    sendJSON = () => {
        let text = this.props.message.text;    
        let sendObj = {
            userName: 'angel',
            sendDate: new Date(),
            mentions: text.match(/@\w*/g),
            text: text            
        }
        this.props.setSendJSON(JSON.stringify(sendObj));        
    }
    componentDidMount() {
        this.props.getALlUser();
    }

    render() {        
        return (        
            <TouchableWithoutFeedback
              onPress={Keyboard.dismiss}
              accessible={false}
              
            >    
             <View 
              style={styles.container}              
              >               
           
                   <Button
                        title="Go to Test-2"
                        onPress={() => this.props.navigation.navigate('Page')}
                   />
                     <TextInputChat
                    keysTrigger={['@', 'Backspace']}
                    activateTrigger={this.onKeyPressTiggerEvents}
                    onSelectionChangeInput={this.onSelectionChangeInputChat}
                    addText={this.addText}
                    value={this.props.message.text}
                    send={this.sendJSON}
                    titleButon={'Post'}
                    
                />
              {this.props.message.util.toggleListMention ? 
                <DropDownList  
                  onPress={this.selectedItemMentionFromList}
                  loadedList={this.props.message.util.users}
                  errorMsg = {this.props.message.util.errorMsg}
                />
                :
                null    
              }
               <View style={styles.board}>
                  <Text>
                    {this.props.message.sendJSON.split(',').map((item, index) => {
                        return <Text key={index}>{item},{"\n"}</Text>
                    })}
                  </Text>
                </View>                
              
            
                  
              </View>
            
            </TouchableWithoutFeedback>
           
        )
    }
}
const mapStateToProps = state => (
    {
        message: state.messageStore
    }
)

const mapDispatchToProps = dispatch => (
    {
       addMention: (mention) => {
           dispatch(messageActions.add_mention(mention))
       },
       toggleListMention: () => {
           dispatch(messageActions.toggle_list_mention())
       },
       addText: (text) => {
           dispatch(messageActions.add_text(text))
       },
       isBackspace: (isBackspace, isWhiteSpace = false) => {
           dispatch(messageActions.is_backspace(isBackspace, isWhiteSpace))
       },
       getUserFromApi: (characters, positions) => {
        dispatch(messageActions.get_user_from_api(characters, positions));
       },
       setPositions: (positions) => {
           dispatch(messageActions.add_position_carie(positions))
       },
       getALlUser: () => {
           dispatch(messageActions.get_all_api());
       },
       setSendJSON: (JSON) => {
           dispatch(messageActions.send_json_to_server(JSON));
       }
    
    }
)

Test1 = connect(mapStateToProps, mapDispatchToProps)(Test1);
export default Test1