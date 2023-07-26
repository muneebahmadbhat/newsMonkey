import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor(){
    super();
    console.log("Hello I am a constructor from News component");
    this.state ={
      articles:[],
      loading:false
    }
  }


 async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=78ff19aa95f644c5ad71a395108b2797 ";
    let data = await fetch( url);
    let parsedData = await data.json()
    this.setState({articles:parsedData.articles})
  }

  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
        <NewsItem  title = {element.title?element.title.slice(0,44):""} description= {element.description?element.description.slice(0,88):""} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
</div>
        })}
        </div>
      </div>
    )
  }
}
