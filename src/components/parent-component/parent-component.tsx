import React from 'react';
import ClassChildComponent from '../class-child-component/class-child-component';
import FunctionChildComponent from '../function-child-component/function-child-component';

const ParentComponent: React.FC = () => {
    return (
        <React.Fragment>
            <h1>THE PARENT COMPONENT IS BEING DISPLAYED</h1>
            <p>Paragraph 1</p>

            <p>Paragraph 2</p>

            <div className="section-container1">
                <h2>Using props with CLASS components.</h2>

                <p>Here are two examples of props being passed to children CLASS components:</p>

                <ClassChildComponent myNumProp={7} myStringProp={"Class Child Data 1"}></ClassChildComponent>
                <ClassChildComponent myNumProp={12} myStringProp={"Class Child Data 2"}></ClassChildComponent>

                <div className="todo-container-class">
                    <p>TODO: render the childCLASS component a third time with new values for the prop's attributes.
                        Make the number 15 and the string "Class Child Data 25".</p>
                    {<ClassChildComponent myNumProp={15} myStringProp={"Class Child Data 25"}></ClassChildComponent>}

                </div>
            </div>

            <div className="section-container2 bottom-gap">
                <h2>Using props with FUNCTION components.</h2>

                <p>Here are two examples of props being passed to children FUNCTION components:</p>

                <FunctionChildComponent myNumProp={5} myStringProp={"Function Child Data 1"}></FunctionChildComponent>
                <FunctionChildComponent myNumProp={10} myStringProp={"Function Child Data 2"}></FunctionChildComponent>

                <div className="todo-container-class">
                    <p>TODO: render the child FUNCTION component a third time with new values for the prop's attributes.
                        Make the number 1 and the string "Function Child Data 33".</p>
                    {<ClassChildComponent myNumProp={1} myStringProp={"Class Child Data 33"}></ClassChildComponent>}

                </div>
            </div>

            <div>
                <a href="https://react.dev/learn/describing-the-ui#passing-props-to-a-component">https://react.dev/learn/describing-the-ui#passing-props-to-a-component</a>
            </div>

        </React.Fragment>
    );

    /* OPTIONAL PRACTICE: If you want more practice later, try passing other datatypes as props.
    In this example, we passed strings, numbers, and booleans; you should try passing an
        object and then try passing a function. */
}

export default ParentComponent;