import React from 'react';
import flv from 'flv.js';
import {connect} from 'react-redux';
import {fetchStream } from '../../actions';

class StreamShow extends React.Component{

    constructor(props){
        super(props);
        this.videoRef = React.createRef();
    };


    componentDidMount(){
        console.log("didmount");
        const {id} = this.props.match.params;
        this.props.fetchStream(id);
        this.buildPlayer();

    }

    componentDidUpdate(){
        console.log("didupdate");

           this.buildPlayer();
    }

    componentWillUnmount(){

        console.log("didunmount" , this.player);

        if  (    this.player != undefined){
            this.player.pause();
            this.player.unload();
            this.player.detachMediaElement();
            this.player.destroy();
            this.player = null;
                  
        }
           
    }






    buildPlayer(){

        console.log( this.player , this.props.stream , this.videoRef );

        if ( this.player  || !this.props.stream ){
            console.log("return")
                return;
        }


        const {id} = this.props.match.params;

        this.player = flv.createPlayer({
            type : 'flv',
            url : `http://localhost:8000/live/${id}.flv`
        });

        console.log(this.player)
        if  (this.videoRef.current != null){
            this.player.attachMediaElement(this.videoRef.current); 
            this.player.load();
    
        }
        
    }


    render () {


        if( !this.props.stream) {
           return <div>Loading ...</div>
        }

        const {title , description} = this.props.stream;
        return (
            <div>
                <video ref={this.videoRef} style ={{width:'100%'}} controls={true}/>
                <h1>{title}</h1>
        <h5>{description}</h5>
            </div>
        )
    };

}

const mapStateToProps = (state , ownProps ) => {
    return {stream :  state.streams[ownProps.match.params.id]}
    
    };
    
    
 
export default connect (mapStateToProps,{fetchStream})(StreamShow);
