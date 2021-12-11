import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <center><h2>NewsMonkey - Top Headlines</h2></center>
                <br/>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="News1" descp="This is news 1" imageUrl="https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/ubeqbio4gtctok7bxve8" />
                    </div>

                    <div className="col-md-4">
                        <NewsItem title="News2" descp="This is news 2" imageUrl="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1206%2Fr947606_1296x729_16%2D9.jpg" />
                    </div>

                    <div className="col-md-4">
                        <NewsItem title="News3" descp="This is news 3" imageUrl="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1210%2Fr949070_1296x729_16%2D9.jpg" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
