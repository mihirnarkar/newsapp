import React, { useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const UpdateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setloading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setarticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        setloading(false);
        props.setProgress(100);
    }


    useEffect(() => {
        document.title = `NewsMonkey - ${capitalize(props.category)}`;
        UpdateNews(); 
        //eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setpage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json()
        setarticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults);
    };

    return (
        <>
            <br></br>
            <h1 className="text-center text-primary" style={{ margin: '35px 0px', marginTop: '93px' }}>NewsMonkey - Top {capitalize(props.category)} Headlines</h1>
            <br />
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 63) : ""} descp={element.description ? element.description.slice(0, 78) : ""} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>

            <br></br>
            <br></br>

            <br></br>
            <br></br>
        </>

    )

}

News.defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
