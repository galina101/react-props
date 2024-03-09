import React from 'react';

interface MyProps {
    myNumProp: number;
    myStringProp: string;
}
class ClassChildComponent extends React.Component<MyProps>{
    render() {

        return (
            <React.Fragment>
                <h4>Class Child Display</h4>
                <p>Here is the "myStringProp" prop data: {this.props.myStringProp}</p>

                <div className="todo-container">
                    <p>Here is the "myNumProp" prop data: {this.props.myNumProp}</p>
                </div>
            </React.Fragment>
        );
    }
}

export default ClassChildComponent;
