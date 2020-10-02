# README
 Korra is an project where a user can ask questions about anything they might be curious about, and other users
can answer this question to the best of their abilities. It's a great way to learn new things and spread your own vast knowledge to others!

**Try it out!**
 
https://korra09.herokuapp.com/#/

# How it works

 ### Technoligies used to create Korra

* React.js

* SASS

* PostgreSQL

* Ruby on Rails


### This projects uses **Ruby on Rails** in the backend to create intances of

* Users 

* Login-Sessions

* Questions

* Answers

* The data for each of these is stored by **PostgesSQL** in a table format
* These tables are accessed by the frontend using  the **JavaScript AJAX** library, and _Thunk_ middleware.
* _Thunk_ sends the data returned by the _AJAX request_ to **React.js** 
* The App is a _single-page-App_ using **React.js** to rerender on _state changes_ without having to refresh the entire page
* Finally, **SASS** is used to correctly style the frontend to look as simliar to the app Quora https://www.quora.com/

## Interesting Challenges faced when implementing features

Korra has multiple pages that display _Answers_ and _Questions_ in varying ways, along with varying module formatting for thier CRUD options

In an effort to keep my code DRY, I passed the Components customized props to specify how they should be formatted for that specific page

One specific intance of this was specifying whether a Answer was _alone_ ( Meaning it was rendering on the splash page)
or if it was part of a greater list of Answers ( On the Question_show page)

#### In Question_index
```javascript
return(
           <AnswerItem 
           answer={answers[0]}  
           currentUser={this.props.currentUser}
           alone={true}
            >
 )
 ```
 #### In Question_show_page
 ```javascript
 {answers.map((answer, i) => (
        <li key={i} className="answer-items">
                < AnswerItem answer={answer} currentUser={currentUser} alone={false} />
       </li>
                    
 ))}
```
 #### In Answer_Item
 ```javascript
editButtons(answer) {
    if (answer.author.id === this.props.currentUser.id) {
      return (
            <EditAnswer answer={answer} alone={this.props.alone} />
        )
      }
  }
```
 ```javascript
alone(){
      const answer = this.props.answer;
      if(!this.props.alone){
        return(
          <div className="answer-header">
            <div className="a-user-icon">
                <i id="a-user-circle" className="fas fa-user-circle"></i>
            </div>
          <h2 id="answer-header">{answer.author.first_name + " " + answer.author.last_name }</h2>
        </div>
        )

      }
    }
 ```
 
 ## Future Plans and Directions
  
 * Implement a page that will render Questions by _Topic_
 
 * Implement Upvoting Answers
 
 * Implement comments on Answers








# korra
