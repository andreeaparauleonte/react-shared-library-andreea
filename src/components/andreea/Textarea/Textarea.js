import React,{Component} from 'react';
import './Textarea.css';

class Textarea extends Component{
    state = {
        value: '',
        initValue: false
    }
    
    constructor(props){
        super(props);
        this.onChangeEvent=this.onChangeEvent.bind(this);
        this.getCounterValue=this.getCounterValue.bind(this);
    }

    componentDidMount = () => {
        if(this.props.value !==undefined){
            this.setState({value:this.props.value, initValue:true});
        }
    }

    onChangeEvent = (event) => {
        this.setState({
          value: event.target.value,
          initValue:false
        });
        if(this.props.onChange !== undefined){
            this.props.onChange();
        }
        if(this.props.inputValueChanged !==undefined){
            this.props.inputValueChanged(event.target.value);
        }
      }

    clearInputValue = (event) =>{
          this.setState({
            value: ""
          });
    }

    getCounterValue = () =>{
        let max = 1000;
        if(this.props.maxlength !== undefined){
            max = this.props.maxlength;
        }

        return max - this.state.value.length;
    }

    render(){
        
        const textareaProps = Object.assign({}, this.props);
        
        delete textareaProps.inputValueChanged;

        let clearIcon=null;
        if(this.state.value!==""){
            clearIcon = (<i className="clearIcon" onClick={this.clearInputValue}>&times;</i>);
        }

        let divClassname="centric-mat-textarea";
        if(this.props.className !== undefined){
            divClassname = divClassname + " " + this.props.className;           
        }
        
        return (<div className={divClassname}>
            <textarea  {...textareaProps} onChange={this.onChangeEvent} value={this.state.value}></textarea>
            <span className="textarea-counter">{this.getCounterValue()}</span>
            {clearIcon}
            
            </div>);
    }
}
export default Textarea;
