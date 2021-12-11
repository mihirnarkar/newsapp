import React, { Component } from 'react'

export class NewsItem extends Component {

    articles = [
        {
            "source": {
                "id": "nfl-news",
                "name": "NFL News"
            },
            "author": null,
            "title": "Notre Dame safety Kyle Hamilton intends to enter 2022 NFL Draft",
            "description": "Notre Dame safety Kyle Hamilton, one of the top talents in college football, announced on Friday that he intends to enter the 2022 NFL Draft.",
            "url": "https://www.nfl.com/news/notre-dame-safety-kyle-hamilton-intends-to-enter-2022-nfl-draft",
            "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/ubeqbio4gtctok7bxve8",
            "publishedAt": "2021-12-10T18:37:31.3840472Z",
            "content": "A junior, Hamilton is considered one of the top talents in the college game. He played in seven games this season, missing the final five regular-season contests due to a knee injury. The 6-foot-4, 2… [+434 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Chris LowESPN Senior Writer ",
            "title": "Oklahoma Sooners' Brent Venables to get one of richest contracts for first-year head coach in college football history",
            "description": "New Oklahoma football coach Brent Venables will average $7.25 million annually through the 2027 season under a deal that has still yet to be approved by the OU Board of Regents, sources told ESPN.",
            "url": "http://espn.go.com/college-football/story/_/id/32837892/oklahoma-sooners-brent-venables-get-one-richest-contracts-first-year-head-coach-college-football-history",
            "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1206%2Fr947606_1296x729_16%2D9.jpg",
            "publishedAt": "2021-12-10T18:14:00Z",
            "content": "The contract for new Oklahoma Sooners football coach Brent Venables is worth $43.5 million over six years, sources told ESPN on Friday, making it one of the richest contracts for a first-year head co… [+1152 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Alex ScarboroughESPN Staff Writer ",
            "title": "Grambling State hires ex-NFL head coach Hue Jackson to lead football program",
            "description": "Hue Jackson, who was fired by the Cleveland Browns in 2018 and also served as head coach of the NFL's Raiders, has been hired by Grambling State to lead its football program, it was announced Friday.",
            "url": "http://espn.go.com/college-football/story/_/id/32837314/grambling-state-hires-ex-nfl-head-coach-hue-jackson-lead-football-program",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1210%2Fr949070_1296x729_16%2D9.jpg",
            "publishedAt": "2021-12-10T17:00:42Z",
            "content": "Former NFL coach Hue Jackson was named head coach at Grambling State on Friday.\r\nJackson, 56, last served as a head coach with the Cleveland Browns from 2016 to 2018. He also coached the Raiders in 2… [+1114 chars]"
        },
        {
            "source": {
                "id": "nfl-news",
                "name": "NFL News"
            },
            "author": null,
            "title": "Football community reacts to news of Demaryius Thomas' death",
            "description": "News of former NFL wide receiver Demaryius Thomas' death shook the football community on Thursday night. An outpouring of love on Twitter followed.",
            "url": "https://www.nfl.com/news/nfl-community-reacts-to-news-of-demaryius-thomas-death",
            "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/lolngzui5s29evnfosk1",
            "publishedAt": "2021-12-10T14:37:40.8287677Z",
            "content": "Woke up and saw the really devastating news about my teammate and friend, Demaryius Thomas. So many are going to remember him for his athletic ability but Ill be remembering him for his kindness, his… [+146 chars]"
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": "Morgan Moriarty",
            "title": "Strengths and Weaknesses of Each College Football Playoff Team",
            "description": "The College Football Playoff will be here by the end of the month, and all four teams earned their spots in the tournament. In the Cotton Bowl, No. 1 Alabama will face No. 4 Cincinnati in the first semifinal on Dec...",
            "url": "https://bleacherreport.com/articles/2951310-strengths-and-weaknesses-of-each-college-football-playoff-team",
            "urlToImage": "https://img.bleacherreport.net/img/images/photos/003/919/225/hi-res-ee6cc2656fd573d514327d21a2393ce2_crop_exact.jpg?w=1200&h=1200&q=75",
            "publishedAt": "2021-12-10T12:00:09Z",
            "content": "Brynn Anderson/Associated Press\r\nCrimson Tide quarterback Bryce Young might have won the Heisman Trophy with his performance against Georgia in the SEC Championship Game last week. In the second quar… [+1638 chars]"
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": "FOX Sports",
            "title": "Thursday Night Football top plays: Minnesota Vikings lead Pittsburgh Steelers",
            "description": "The Steelers are in Minnesota to face the Vikings on Thursday Night Football on FOX. Here are the top plays!",
            "url": "http://www.foxsports.com/stories/nfl/thursday-night-football-top-plays-pittsburgh-steelers-vs-minnesota-vikings",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/12/1408/814/12.09.21_NFL-Top-PLays-TNF_16x9.jpg?ve=1&tl=1",
            "publishedAt": "2021-12-10T01:54:22Z",
            "content": "Kicking off Week 14 of the NFL, the Pittsburgh Steelers are on the road to take on the Minnesota Vikings. \r\nBoth teams are currently on the bubble of the NFL's playoff picture and looking to secure a… [+969 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Matthew BerryESPN Senior Writer ",
            "title": "Matthew Berry's Love/Hate for Week 14 - Fantasy football gives back",
            "description": "Matthew Berry marks the end of Jimmy V Week and the beginning of the playoffs in the Scott Fish Bowl to highlight the fantasy football community's generosity and how you, the reader, can also give back.",
            "url": "http://espn.go.com/fantasy/football/insider/story/_/id/32825042/matthew-berry-love-hate-week-14-fantasy-football-gives-back",
            "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1203%2Fr945803_1296x729_16%2D9.jpg",
            "publishedAt": "2021-12-09T17:45:00Z",
            "content": "Two distinct but oddly similar things have converged today.\r\nCall it synergy, coincidence or maybe even -- with a slight holiday smile on your face -- a little magical.\r\nWhatever word you want to use… [+30782 chars]"
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": "David Kenyon",
            "title": "B/R's College Football Awards for the 2021 Season",
            "description": "Immediately after conference championships each year, college football starts to hand out the hardware.   While the most prestigious award is the Heisman Trophy, the winners of each ...",
            "url": "https://bleacherreport.com/articles/2951164-brs-college-football-awards-for-the-2021-season",
            "urlToImage": "https://img.bleacherreport.net/img/slides/photos/004/490/806/hi-res-c456daa56b918b63d97fc16064232d85_crop_exact.jpg?w=1200&h=1200&q=75",
            "publishedAt": "2021-12-09T12:00:02Z",
            "content": "Nic Antaya/Getty Images\r\nOne year ago today, you probably hadn't heard of Bailey Zappe. He nearly led Houston Baptist to an upset of Texas Tech in September 2020, throwing for 567 yards and four touc… [+887 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
            "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
            "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
            "publishedAt": "2020-04-27T07:20:43Z",
            "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
        }
    ]

    constructor(){
        super();
        console.log("Hello i am a constructor from news component");
        this.state = {
            articles : this.articles,
            loading : false
        }
    }



    render() {
        let {title,descp,imageUrl} = this.props;
        return (
            <div className='my-2'>
                <div  className="card" style={{width: "18rem"}}>
                    <img src={imageUrl}  className="card-img-top" alt="..."/>
                        <div  className="card-body">
                            <h5  className="card-title">{title}</h5>
                            <p  className="card-text">{descp}</p>
                            <a href="/"  className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
