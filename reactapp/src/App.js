import React, { useState } from 'react';
import './App.css';
import Banner from './components/UI/Banner/Banner';
import Button from './components/UI/Button/Button';
import Card from './components/UI/Card/Card';
import questions from './Questions/questions';

class App extends React.Component{

  constructor(){
    super();
    this.state={
      showStart: true,
      showResultBanner: false,
      questionsCorrect: 0,
      currQuestion: 0,
      showResult: false
    }
  }

  startHandler = () => {
    this.setState({
      showStart:false,
      showResult:false,
      showResultBanner:false,
      questionsCorrect:0,
      currQuestion:0
    })
  }

  ResultHandler = () => {
    this.setState({
      showResultBanner:true,
      showStart:true,
      showResult:false
    })
  }

  updateScore=()=>{
    if(this.state.questionsCorrect<5){
      this.setState({
        questionsCorrect:this.state.questionsCorrect+1
      })
    }
  }

  nextQuest=()=>{
    if(this.state.currQuestion==4){
      this.setState({
        showResult:true
      })
    }
    this.setState({
      currQuestion: this.state.currQuestion+1
    })
  }
  render(){
    return (
    <div>
      <h1>Quizz App</h1>
      {this.state.showResultBanner&&(
        <Banner score={this.state.questionsCorrect} />
      )}
      {this.state.showStart&&(
        <div>
          <Button onClick={this.startHandler} disabled={false} >Start Quiz</Button>
        </div>
      )}
      {!(this.state.showStart)&&(
        <div>
          <div className="parent">
                <div className="child">
                    <Card 
                        key={questions[0].questionId} 
                        question={questions[0].question}
                        correctAnswerMarkUpdate={this.updateScore}
                        attempt={this.nextQuest}
                        options={{
                            option1: questions[0].option1,
                            option2: questions[0].option2,
                            option3: questions[0].option3,
                            option4: questions[0].option4
                        }}
                        answer={questions[0].answer}
                    />
                </div>
                <div className="child">
                    <Card 
                        key={questions[1].questionId} 
                        question={questions[1].question}
                        correctAnswerMarkUpdate={this.updateScore}
                        attempt={this.nextQuest}
                        options={{
                            option1: questions[1].option1,
                            option2: questions[1].option2,
                            option3: questions[1].option3,
                            option4: questions[1].option4
                        }}
                        answer={questions[1].answer}
                    />
                </div>
            </div>
            <div>
                <div className="child">
                    <Card 
                        key={questions[2].questionId} 
                        question={questions[2].question}
                        correctAnswerMarkUpdate={this.updateScore}
                        attempt={this.nextQuest}
                        options={{
                            option1: questions[2].option1,
                            option2: questions[2].option2,
                            option3: questions[2].option3,
                            option4: questions[2].option4
                        }}
                        answer={questions[2].answer}
                    />
                </div>
                <div className="child">
                    <Card 
                        key={questions[3].questionId} 
                        question={questions[3].question}
                        correctAnswerMarkUpdate={this.updateScore}
                        attempt={this.nextQuest}
                        options={{
                            option1: questions[3].option1,
                            option2: questions[3].option2,
                            option3: questions[3].option3,
                            option4: questions[3].option4
                        }}
                        answer={questions[3].answer}
                    />
                </div>
                <div className="child">
                    <Card 
                        key={questions[4].questionId} 
                        question={questions[4].question}
                        correctAnswerMarkUpdate={this.updateScore}
                        attempt={this.nextQuest}
                        options={{
                            option1: questions[4].option1,
                            option2: questions[4].option2,
                            option3: questions[4].option3,
                            option4: questions[4].option4
                        }}
                        answer={questions[4].answer}
                    />
                </div>
            </div>
        </div>
      )}
      {this.state.showResult&&(
        <div>
          <Button onClick={this.ResultHandler} disabled={false}>Show Results</Button>
        </div>
      )}
      </div>
  );}
}

export default App;
