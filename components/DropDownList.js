import React from 'react';
import { 
        View, 
        Text,        
        ScrollView,      
        TouchableOpacity
        ,StyleSheet
      } from 'react-native';

const styles = StyleSheet.create({
  listContainer: {    
    borderColor: 'black',
    borderWidth: 1
    ,backgroundColor: '#caccce'
    
  }
  ,items: {
    padding: 10  
    ,marginTop: 2.5
    ,marginBottom: 2.5
    ,backgroundColor: 'white'
  }
})


const DropDownList = (props) => {
  
   return (      
    <ScrollView style={{height:110 }}>
      <View   
       style={styles.listContainer}>

       { props.loadedList.length > 0 ?
           props.loadedList.map((item, key) =>
              <TouchableOpacity 
                key={key}
                onPress={()=>props.onPress(item)}                
              >
                <View style={styles.items}>
                  <Text>{item}</Text>
                 </View>
              </TouchableOpacity> 
           )       
           :
          <Text>{`Loading...${props.errorMsg}`}</Text>     
    }
    </View>  
    </ScrollView> 
)
}

export default DropDownList