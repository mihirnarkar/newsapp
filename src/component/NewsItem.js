import React, { Component } from 'react'

export class NewsItem extends Component {



    render() {
        let { title, descp, imageUrl, newsUrl, author, publishedAt, source } = this.props;
        return (
            <div className='my-2'>
                <div className="card" >
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ zIndex: "1", left: "89%" }}>
                        {source}
                        <span class="visually-hidden">unread messages</span>
                    </span>
                    <img src={(!imageUrl) ? "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/d9crgmwwy5hkpvgg_1639395877.jpeg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}..</h5>
                        <p className="card-text">{descp}..</p>
                        <p className="card-text text-dark">By {!author ? "Unknown" : author}  on {new Date(publishedAt).toGMTString()}</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default NewsItem
