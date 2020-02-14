import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        // eslint-disable-next-line
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterOutput value={this.props.ctr} />
                {/* click prop is just a reference that i wanna
                pass down to countercountrol component , so
                when i execute onclick , i pass a function down which should be 
                executed. i no longer wanna
                pass this anymous function.  i now wanna pass onIncrementCounter but
                without executing it so without (), This will then refer to this prop which holds a reference to this anonymous function which will then

be executed which will then dispatch this action. With that we're dispatching an action*/}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
            </div>
        );
    }
}

//map/pass state in redux to props here; expects the state from redux
const mapStateToProps = state =>{
    return {
        //meaning: give me the global redux state counter and gimme in the form of ctr to be used here
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch =>{
    //left holds reference to the function and then get dispatched as a funciton
    return {
        //holds a value, which is an anymous function, things on the right is automatically returned
        //when onIncremetcounter is exectued as a function then dispatch method
        //is going to get executed; we pass the js object in dispatch
        onIncrementCounter: () => dispatch({type:'INCREMENT'})
    }
}
//decides which states and actions goes in here to action
export default connect(mapStateToProps,mapDispatchToProps)(Counter);