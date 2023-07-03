import { Component } from "react";

class ErrorBoundary extends Component {

     constructor(props, context){
          super()
          this.state = {hasError:false}
     }
     componentDidCatch(error) {
      
          this.setState({hasError:true});
         
     }

     render(){
      
          if(this.state.hasError){

             return <p>Oops something went wrong</p>

          }
          
          return this.props.children;
     }

}