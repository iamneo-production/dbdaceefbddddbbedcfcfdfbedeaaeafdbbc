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