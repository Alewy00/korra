
import React from "react";
import IndexItem from './question_index_item'
class QuestionShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          question: {},
        }
    
        this.props.recieveQuestion( this.props.questionId )
        .then((question) => {
          this.setState(question);
        });
        // console.log(this.state.question)
      }

      componentDidMount(){
      
      }

    handleDelete(question) {
        this.props.deleteQuestion(question).then(() => {
            this.props.history.push('/');
          })
      }

      editButtons(question) {
          console.log("hit edit")
        if (question.author_id === this.props.currentUser.id) {
          return (
            <div className="delete-button">
                <button className="delete-button" onClick={() => this.handleDelete(question)}>Delete</button>
              </div>
            )
          }
        }
     

    render(){
        function isEmpty(obj) {
            for(const key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
//   const question = this.props.recieveQuestion(this.props.questionId )
        console.log("hi")
        console.log(!isEmpty(this.state.question))
        if(!isEmpty(this.state.question)){
        return(
        <div className="q-show">
            <div className="show-item">
            <IndexItem question={this.state.question} key={this.state.question.id} />
            </div>
            {/* <h1>{this.props.questionId}</h1> */}
            {this.editButtons(this.state.question)}
        </div>
        )
 
    }else{
        return null;
    }
}
}
export default QuestionShow;