import React, { Component } from 'react'
import NewsItems from './NewsItems'
import InfiniteScroll from "react-infinite-scroll-component"
import Spinner from './Spinner'

export default class NewsContainer extends Component {
    apikey = process.env.REACT_APP_API_KEY;
    constructor() {
        super()
        this.state = {
            "articles": [],
            "loading": true,
            TotalArticles: 0,
            pageSize: 5,
            page: 1,
        }
    }
    componentDidMount = () => {
        let date = new Date();
        let mm = date.getUTCMonth()
        let dd = date.getUTCDate()
        let yy = date.getUTCFullYear()
        let url = `https://newsapi.org/v2/top-headlines?country=in&from=${yy}-${mm}-${dd}&category=${this.props.category}&pageSize=${this.state.pageSize}&page=${this.state.page}&apiKey=${this.apikey}`;
        fetch(url)
            .then(response => response.json()) // Return the JSON data here
            .then(data => {
                this.setState({
                    articles: data.articles,
                    loading: false,
                    TotalArticles: data.totalResults
                })
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }
    fetchMoreData = () => {
        this.setState({ page: this.state.page + 1 })
        let date = new Date();
        let mm = date.getUTCMonth()
        let dd = date.getUTCDate()
        let yy = date.getUTCFullYear()
        let url = `https://newsapi.org/v2/top-headlines?country=in&from=${yy}-${mm}-${dd}&category=${this.props.category}&pageSize=${this.state.pageSize}&page=${this.state.page}&apiKey=${this.apikey}`;
        fetch(url)
            .then(response => response.json()) // Return the JSON data here
            .then(data => {
                this.setState({
                    articles: this.state.articles.concat(data.articles)
                })
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }
    capitalizeFirstLetter= (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    render() {
        let{mode,color} = this.props

        document.body.style.backgroundColor = mode==="dark"?"black":"white";
        document.body.style.color = color;


        let i = 0
        return (
            <>
                <div className='container my-4'>
                    <h1 className='text-center '>News-Monkey: Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                    {this.state.loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length < this.state.TotalArticles}
                        loader={<Spinner />}
                        style={{overflow:'hidden'}}
                    >
                        <div className="container my-4">
                                {this.state.articles.map((element) => {
                                    if (element.title !== "[Removed]") {
                                        return <NewsItems key={i++} title={element.title} urlToImage={element.urlToImage} description={element.description} url={element.url} publishedAt={new Date(element.publishedAt).toUTCString()} author={element.author} mode={mode} />
                                    }
                                    return null;
                                })
                                }
                            </div>
                    </InfiniteScroll>
                </div>
            </>
        )
    }
}
