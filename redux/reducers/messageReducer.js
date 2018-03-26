import * as msgAction from '../actions/messageActions';

let messageStore = {    
    text: "",
    copyText: '',
    mentions: [],
    hashTag: [], 
    sendJSON: '',
    util: {
        toggleListMention: false,
        isBackspace: false,
        isWhiteSpace: false,
        totalUser: 0,
        users: [],
        errorMsg: '',
        positions: {
            start: 0,
            end: 0
        }
        
    }
}

const messageReducer = (store = messageStore, action) => {
    switch(action.type) {
        case msgAction.ADD_MENTION:              
            return {...store, mentions: [...store.mentions, action.mention]}; 

        case msgAction.TOGGLE_LIST_MENTION:
            return { ...store, util: {...store.util, toggleListMention: !store.util.toggleListMention, isBackspace: false } };
        
        case msgAction.ADD_TEXT:
           if(store.util.isBackspace) {
               return { ...store, text: action.text  }
           }
           return {...store, text: action.text, copyText: action.text }
        case msgAction.IS_BACKSPACE:             
            return {...store, util: {...store.util, isBackspace: action.isBackspace, isWhiteSpace: action.isWhiteSpace}}
        case msgAction.LOAD_USER_TO_LIST:
            return {...store,
                     util: {
                            ...store.util, 
                            users: action.items,
                            totalUser: action.totalUser,                            
                           }
                    }
        case msgAction.ERROR_LOAD_USER: 
            return {...store, util: {...store.util, errorMsg: action.errorMsg }}
        case msgAction.SET_POSITION_CARIER:                  
            return {...store, util: { ...store.util, positions: { start: action.start, end: action.end } } }
       case msgAction.SEND_JSON_TO_SERVER:
            return {...store, sendJSON: action.json}
        default:
          return store;
    }
}



export default messageReducer