import React, { Component } from 'react'
import { FormGroup, Label, Input, StyledContainer, Wrapper } from "./Form";


class SearchBar extends Component {
    
    state = {
        textTerm: ''
    }

    onInputChange = (event) =>{
        this.setState({textTerm: event.target.value})
        
    }

    submitHandler = (e) =>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.textTerm)
    }

    render(){


        return(
            
        <StyledContainer>
                <Wrapper>
                    <FormGroup onSubmit={this.submitHandler}>
                    <Label htmlFor="label">Label</Label>
                    <Input id="label" type="text" value={this.state.textTerm} onChange={this.onInputChange} />
                    </FormGroup>
                </Wrapper>
         </StyledContainer>
         
           )
    }
 }

 export default SearchBar;