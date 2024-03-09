import React from 'react';

interface MyProps {
    myNumProp: number;
    myStringProp: string;
}

const FunctionChildComponent: React.FC<MyProps> = (props: MyProps) => {
    return (
        <React.Fragment>
            <h4>Function Child Display</h4>
            <p>Here is the "myStringProp" prop data: {props.myStringProp}</p>

            <div className="todo-container">
                <p>Here is the "myNumProp" prop data: {props.myNumProp}</p>
            </div>

        </React.Fragment>
    );
}

export default FunctionChildComponent;