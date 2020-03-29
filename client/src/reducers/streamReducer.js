
import _ from 'lodash';
import {

CREATE_STREAM, 
FETCH_STREAMS,
FETCH_STREAM, 
DELETE_STREAM, 
EDIT_STREAM 

} from '../actions/types';

export default ( state ={} ,action) =>{
    switch (action.type)
        {

            case FETCH_STREAMS: return {...state, ..._.mapKeys(action.payload, 'id')}
            case FETCH_STREAM: return {...state, [action.payload.id] : action.payload}
            
            case CREATE_STREAM: return {...state, [action.payload.id] : action.payload}
            
            case EDIT_STREAM: return {...state, [action.payload.id] : action.payload}
            
            case  DELETE_STREAM: return _.omit(state, action.payload);
             default :
             return state;

        }
}







// const animalSounds = {cat: 'meow' , dog : 'bark'};
// undefined
// const animal = 'lion';
// undefined
// const sound = 'roar' 
// undefined
// {... animalSounds , [animal] : sound}
// {cat: "meow", dog: "bark", lion: "roar"}

// const streamReducer = ( state = [] , action) => {
// switch (action.type){
//     case EDIT_STREAM:
//     return state.map(stream => {
//         if  (stream.id === action.payload.id){
//             return action.apyload;
//         }
//         else{
//             return stream;
//         }
//     });
//     default : return state;
//     }
// };


// how mapkeys works
// const colors = [ 
//     { hue:'green'},
//     { hue:'blue'},
//     { hue:'yellow'},
//   ];
  
//   _.mapKeys(colors, 'hue')
//{"green":{"hue":"green"},"blue":{"hue":"blue"},"yellow":{"hue":"yellow"}}}