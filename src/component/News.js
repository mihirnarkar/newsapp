import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 12,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor(props) {
        super(props);
        console.log("Hello i am a constructor from news component");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `NewsMonkey - ${this.capitalize(this.props.category)}`;
    }


    async UpdateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=479ad1f0f10c4fb2ad92a370d04d56c9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }



    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=479ad1f0f10c4fb2ad92a370d04d56c9&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }


    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.UpdateNews();
    }


    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 })
        this.UpdateNews();
    }


    capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
    }



render() {
    return (
        <>
            <div className='container my-3'>
                <center><h2 className='text-primary'><b>NewsMonkey - Top {this.capitalize(this.props.category)} headlines </b></h2></center>
                <br />
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 63) : ""} descp={element.description ? element.description.slice(0, 78) : ""} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name} />
                        </div>
                    })}
                </div>
            </div>
            <br></br>
            <br></br>

            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page <= 1} type="button" className="btn btn-primary btn-sm" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary btn-sm" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>

            <br></br>
            <br></br>
        </>

    )
}
}

export default News
