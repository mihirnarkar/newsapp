import React, { Component } from 'react'

export class NewsItem extends Component {



    render() {
        let { title, descp, imageUrl, newsUrl } = this.props;
        return (
            <div className='my-2'>
                {/* style={{ width: "18rem" }} */}
                <div className="card" >
                    <img src={ (!imageUrl) ? "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/d9crgmwwy5hkpvgg_1639395877.jpeg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}..</h5>
                        <p className="card-text">{descp}..</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default NewsItem
