import axios from 'axios';

export const ADD_MENTION = 'ADD_MENTION';
export const TOGGLE_LIST_MENTION = 'TOGGLE_LIST_MENTION';
export const ADD_TEXT = 'ADD_TEXT';
export const IS_BACKSPACE = 'IS_BACKSPACE';
export const LOAD_USER_TO_LIST = 'LOAD_USER_TO_LIST';
export const ERROR_LOAD_USER = 'ERROR_LOAD_USER';
export const SET_POSITION_CARIER = 'SET_POSITION_CARIER';
export const SEND_JSON_TO_SERVER = 'SEND_JSON_TO_SERVER';


export const add_position_carie = ({start, end}) => ({
    type: SET_POSITION_CARIER,
    start,
    end
})
export const add_mention = (mention) => (
    {
        type: ADD_MENTION,
        mention
    }
)

export const toggle_list_mention = () => ({
    type: TOGGLE_LIST_MENTION
})

export const add_text = (text) => ({
    type: ADD_TEXT,
    text
})

export const is_backspace = (isBackspace, isWhiteSpace) => ({
    type: IS_BACKSPACE,
    isBackspace,
    isWhiteSpace
})

export const load_user_to_list = ({totalCount, items, characters,positions}) => ({
    type: LOAD_USER_TO_LIST,
    totalCount,
    items,
    characters    
})

export const send_json_to_server = (json) => ({
    type: SEND_JSON_TO_SERVER,
    json
})


export const erro_loading_user = (log) => ({
    type: ERROR_LOAD_USER,
    errorMsg: "Sorry it look like the list is not available.",
    errorLog: log
})

export const get_user_from_api = (characters) => {
   return (dispatch) => {       
       //console.log('characters to search ', characters)
        axios.get(`https://api.github.com/search/users?q=${characters}+in%3Alogin&type=Users`)
        .then(function(response){           
            if(response.data) {                
                let obj = {totalCount: 0, items:[], characters: ''};                
                    obj = {...obj, totalCount: response.data.total_count, characters};                    
                    obj.items = response.data.items.map(item => item.login);

                    dispatch(load_user_to_list(obj));
                               
                 return true;
            }            
        })
        .catch(function(error) {
            console.log('error', error, 'characters - ', characters);
            dispatch(erro_loading_user(error.data));
        })
   }   
}

export const get_all_api = () => {
    return (dispatch) => {       
        //console.log('characters to search ', characters)
         axios.get(`https://api.github.com/users`)
         .then(function(response){           
             if(response.data) {                
                 let obj = {totalCount: 0, items:[], characters: null };                
                     obj = {...obj, totalCount: response.data.length};                    
                     obj.items = response.data.map(item => item.login);
                      
                     dispatch(load_user_to_list(obj));
                                
                  return true;
             }            
         })
         .catch(function(error) {
             console.log('error ',error);
             dispatch(erro_loading_user(error.data));
         })
    }   
 }