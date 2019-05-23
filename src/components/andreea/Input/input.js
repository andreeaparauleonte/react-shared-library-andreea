import React,{Component} from 'react';
import InputMask from 'react-input-mask';
import './Input.css';
class Input extends Component{
    constructor(props){
        super(props);
        this.onChangeEvent=this.onChangeEvent.bind(this);
    }
    state = {
        value: ''
      }
    
    onChangeEvent = (event) => {
        console.log(this.props);
        this.setState({
          value: event.target.value
        });
        if(this.props.onChange !== undefined){
            this.props.onChange();
        }
      }
    
    render(){
        let input;
        if(this.props.mask!==undefined){
                input = (<InputMask {...this.props} onChange={this.onChangeEvent} />);
        }
        else{
            input=<input {...this.props} onChange={this.onChangeEvent}/>;
        }
        let clearIcon=null;
        if(this.props.hasClearIcon !== undefined && this.state.value!==""){
            clearIcon = (<i className="clearIcon">&times;</i>);
        }
        return (<div className="centric-mat-input">{input}{clearIcon}</div>);
    }
}
export default Input;
