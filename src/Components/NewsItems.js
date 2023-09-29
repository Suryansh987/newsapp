import React, { Component } from 'react'


export default class NewsItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ImgErr:false,
        }
    }
    handleImgErr = (e) =>{
        this.setState({ImgErr:true})
    }
    render() {
        let { title, urlToImage, url, description, publishedAt, author, mode} = this.props
        return (
            <div className={`card mb-3 bg-${mode}`} style={{ maxWidth: "95vw" }}>
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={this.state.ImgErr?"https://jbordendotcom.files.wordpress.com/2020/04/498dc-breakingnews.jpg":(urlToImage ? urlToImage : "https://jbordendotcom.files.wordpress.com/2020/04/498dc-breakingnews.jpg")} className="img-fluid rounded-start" alt="..." onError={this.handleImgErr} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title" onClick={this.handleTitleClick = () => { window.open(url, '_blank') }} style={{ cursor: 'pointer' }}>{title ? title : ""}</h5>
                            <p className="card-text">{description ? description : ""}</p>
                            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {publishedAt ? publishedAt : ""}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
