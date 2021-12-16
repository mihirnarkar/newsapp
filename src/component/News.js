import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


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


    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `NewsMonkey - ${this.capitalize(this.props.category)}`;
    }


    async UpdateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=479ad1f0f10c4fb2ad92a370d04d56c9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        console.log(parsedData);
        this.setState({ 
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults, 
            loading: false,
        })
        this.props.setProgress(100);
    }



    async componentDidMount() {
        this.UpdateNews();
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=479ad1f0f10c4fb2ad92a370d04d56c9&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }


    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.UpdateNews();
    }


    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 })
        this.UpdateNews();
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=479ad1f0f10c4fb2ad92a370d04d56c9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
    };


    



    render() {
        return (
            <>
                <br></br>
                <center><h2 className='text-primary my-3'><b>NewsMonkey - Top {this.capitalize(this.props.category)} headlines </b></h2></center>
                <br />
                {this.state.loading && <Spinner />}
                {/* !this.state.loading &&  */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 63) : ""} descp={element.description ? element.description.slice(0, 78) : ""} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

                <br></br>
                <br></br>

                {/* <div className="container d-flex justify-content-between">
                <button disabled={this.state.page <= 1} type="button" className="btn btn-primary btn-sm" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary btn-sm" onClick={this.handleNextClick}>Next &rarr;</button>
            </div> */}

                <br></br>
                <br></br>
            </>

        )
    }
}

export default News
