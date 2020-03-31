import React ,{Component} from 'react';
import {connect} from 'react-redux';

class CompB extends Component{
   constructor(props){
       super(props);
       this.state={

       }
   }
    render(){
        return(
             <div style={{display:'block',border:'1px solid #fabd6e',background:'#fabd6e',borderRadius:'10px',height:'200px',width:'300px'}}>
                  <h1>Component B</h1>
                  {/* {this.props.userB} */}
                  <input style={{border:'none',borderBottom:"1px solid #f77707", background :"#fabd6e"}}
               value={this.props.userB}/>
            </div>
        )
    }

}
const mapStateToProps = state => ({
   userB:state.userB
  });

  const mapDispatchToProps = {
   
  };
export default connect(mapStateToProps,mapDispatchToProps)(CompB)