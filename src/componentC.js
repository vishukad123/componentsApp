import React ,{Component} from 'react';
import {connect} from 'react-redux';


class CompC extends Component{
   constructor(props){
       super(props);
       this.state={

       }
   }
    render(){
        return(
            <div style={{display:'flex',justifyContent:'center'}}>
                <button style={{height:"50px",width:"150px",borderRadius:'10px',background:"#0c65f5"}} 
                onClick={this.props.hitTwo}> button A</button>
                <button  style={{height:"50px",width:"150px",borderRadius:'10px',background:"#0c65f5"}} 
                onClick={this.props.hitOne}>button B</button>
            </div>
        )
    }

}
const mapStateToProps = state => ({
   
  });

  const mapDispatchToProps =dispatch=>{
    return{
    hitOne: ()=> dispatch({type:"HITONE"}),
    hitTwo:()=> dispatch({type:"HITTWO"})

    }  
  };
export default connect(mapStateToProps,mapDispatchToProps)(CompC)