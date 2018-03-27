import React, { Component }  from 'react';
import {
    View
    ,Text
    ,Button
    ,StyleSheet,
    Modal
    ,TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    }
    ,mention: {
        padding: 3,
        backgroundColor: 'rgba(138, 178, 242, 0.6)'
    }
    ,buttonCustome: {
        marginBottom: 10,
        marginTop:5
       , marginLeft: 10
        ,marginRight: 10
        ,backgroundColor: '#f0f8ff'       
    }
})
class Test2 extends Component {
    constructor(){
        super();
        this.state={
            modalVisible:false
        }
    }
    static  navigationOptions = {
        title: 'Title-2'
    }
    render(){
     const { navigate } = this.props.navigation;
    return (
        <View style = {styles.container}>     
        <View style={styles.buttonCustome}>      
            <Button
              title="Go to Test-1"
        onPress={() =>
          navigate('Home', { name: 'Home' })
        }/>
        </View>
        <Text>
            Here are the mention:
            <Text
            onPress={()=>this.setState({modalVisible: !this.state.modalVisible})}
            style={styles.mention}>@superMan</Text>
        </Text>
        
        <Modal
        style = {{height:50}}
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
           <View style={{
          flex: 1,
          flexDirection: 'column'
          ,marginTop: 60
         }}>
    <View style={{
            width: 300,
            height: 300}}>
              <Text>Hello SuperMan!</Text>
              <View style={{flexDirection:'row'}}>
                  <View><Text>Strengh: <Text>Max</Text></Text></View>                  
              </View>
              <View style={{flexDirection:'row'}}>
                  <View><Text>Speed: <Text>9</Text></Text></View>
              </View>
              <View style={{flexDirection:'row'}}>
                  <View><Text>Special: <Text>Fly</Text></Text></View>
              </View>
            </View>
            <Button
                onPress={() => {this.setState({modalVisible: !this.state.modalVisible}); }    
                }
                title={"Close modal"}/>
          </View>
        </Modal>
        
            </View>
    )
}
}

export default Test2