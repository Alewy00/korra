
import React from "react";
class QuestionShow extends React.Component {

    render(){
        return(
        <div className="q-show">
            <h1>{this.props.questionId}</h1>
        </div>
        )
    }
}
export default QuestionShow;