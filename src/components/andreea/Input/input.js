import React,{Component} from 'react';
import InputMask from 'react-input-mask';
import './Input.css';
class Input extends Component{
    state = {
        value: '',
        initValue: false
    }
    
    constructor(props){
        super(props);
        this.onChangeEvent=this.onChangeEvent.bind(this);
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

    render(){
        let input;
        const inputProps = Object.assign({}, this.props);
        delete inputProps.hasClearIcon;
        delete inputProps.inputValueChanged;

        if(this.props.mask !== undefined){
            input = (<InputMask {...inputProps} value={this.state.initValue? this.props.value : this.state.value} onChange={this.onChangeEvent} />);
        }
        else{
            input=<input {...inputProps} value={this.state.initValue? this.props.value : this.state.value} onChange={this.onChangeEvent}/>;
        }

        let clearIcon=null;
        if(this.props.hasClearIcon !== undefined && this.state.value!==""){
            clearIcon = (<i className="clearIcon" onClick={this.clearInputValue}>&times;</i>);
        }

        let divClassname="centric-mat-input";
        let evalIcon = null;

        if(this.props.className !== undefined){
            divClassname = divClassname + " " + this.props.className; 
            let arrClassName = this.props.className.split(" ");
            if(arrClassName.indexOf("input-success") > -1 || arrClassName.indexOf("input-warning") > -1 || arrClassName.indexOf("input-invalid") > -1){
                evalIcon= (<span className="evalIcon"></span>);
            }
        }
        
        return (<div className={divClassname}>
            {input}
            {clearIcon}
            {evalIcon}
            </div>);
    }
}
export default Input;
