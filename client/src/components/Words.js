import React, { Component } from 'react'
import { connect } from 'react-redux'
import Divider from '@material-ui/core/Divider'
import WordCard from './WordCard'
import { handleInitialData } from '../actions/word'

class Words extends Component {
    render() {
        const { words } = this.props
        console.log(words);
        return (
            <div className="container">
                <h4 className="heading">{this.props.text}</h4>
                <Divider />
                <div className="word-container">
                    {words.map(word => (
                        <WordCard key={word.word} word={word} />
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (words) => {
    return {
        words
    }
}

export default connect(mapStateToProps, { handleInitialData })(Words)