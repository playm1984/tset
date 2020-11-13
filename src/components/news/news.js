import React, { Component } from 'react'

import './news.css'

import {connect} from 'react-redux'
import {addNewsBtn, delNewsBtn, agreeNewsBtn} from '../../redux/action'

class News extends Component {
    state = {
        search: ''
    }

    renderNews = news => {
        // const {search} = this.state;
        return(
            <div className='news-item' key={news.id}>
                    <div className='news-inner'>
                        <h3>{news.title}</h3>
                        <span>{news.date}</span>
                        <p>{news.text}</p>
                    </div>
                </div>
        )
    }

    onchange = e => {
        this.setState({ search: e.target.value });
    };

    render() {
        const {addNewsBtn, delNewsBtn, agreeNewsBtn, category} = this.props;
        const {search} = this.state;
    
        const {addNews} = this.props.usersNow.property;
        const {delNews} = this.props.usersNow.property;
        const {agreeNews} = this.props.usersNow.property;

        const newsItems = Object.keys(category).map((key) => {
            return category[key]
        })

        const filteredNews = newsItems.filter(newsItems => {
            return newsItems.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });

        return (
            <div className='news'>
                <div className='searchNews' >
                    <p>Введите новость для поиска</p>
                    <input type='text' onChange={this.onchange}/>
                    <div className='buttons'>
                        {addNews ? <button onClick={addNewsBtn}>Добавить</button> : null}
                        {delNews ? <button onClick={delNewsBtn}>Удалить</button> : null}
                        {agreeNews ? <button onClick={agreeNewsBtn}>Одобрить</button> : null}
                    </div>
                </div>
                <div className='content'>
                    {category && filteredNews.map(news => {
                        return this.renderNews(news)
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({usersNow, category}) => {
    return{usersNow, category}
}

const mapDispatchToProps = {
    addNewsBtn, delNewsBtn, agreeNewsBtn
}

export default connect (mapStateToProps, mapDispatchToProps)(News)
