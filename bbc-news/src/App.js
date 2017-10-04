import React, { Component } from 'react';
import './App.css';
import axios from "axios"
import Display from "./Display"

class App extends Component {
  constructor(){
    super()
    this.state = {
      article: []
    }
    this.getArticles = this.getArticles.bind(this)
  }

  getArticles(){
    axios.get("https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=9618a7c6df4946c0b5ba0da63ea1448a")
         .then(response => {
           this.setState({
             article: response.data.articles
           })
         })
  }

  render() {
    console.log(this.state.article)
    var news = this.state.article.map((article) => {
      return(
        <Display title={article.title} imgUrl={article.urlToImage} description={article.description} url={article.url}/>
      )
    })
    return (
      <div className="App">
        <button onClick={this.getArticles}>Get News</button>
        {news}
      </div>
    );
  }
}

export default App;
