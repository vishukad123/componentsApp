import React ,{Component} from 'react';
import {connect} from 'react-redux';

class CompA extends Component{
   constructor(props){
       super(props);
       this.state={
          
       }
   }
    render(){
        return(
            <div style={{display:'block',border:'1px solid #facdcd',background:'#facdcd',borderRadius:'10px',height:'200px',width:'300px'}}>
               <h1>Component A</h1>
               {/* {this.props.userA} */}
               <input style={{border:'none',borderBottom:"1px solid #f52825" , background :"#facdcd"}}
               value={this.props.userA}/>
            </div>
        )
    }

}
const mapStateToProps = state => ({
   userA:state.userA
  });

  const mapDispatchToProps = {
   
  };
export default connect(mapStateToProps,mapDispatchToProps)(CompA)