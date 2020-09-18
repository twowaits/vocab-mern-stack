import React, { Component } from 'react'
import { connect } from 'react-redux'
import Divider from '@material-ui/core/Divider'
import WordCard from './WordCard'
import WordDetail from './WordDetail'
import { handleInitialData } from '../actions/word'

class Words extends Component {
    state = {
        open: false,
        modalData: {}
    }

    toggleModal() {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    handleClick(wordName) {
        const modalData = this.props.words.filter(word => word.word === wordName)[0]
        console.log(modalData)
        this.setState({ modalData })
        this.toggleModal()
    }

    render() {
        const { words } = this.props
        const { open, modalData } = this.state

        return (
            <div className="container">
                <h4 className="heading">{this.props.text}</h4>
                <Divider />
                <div className="word-container">
                    {words.map(word => (
                        <WordCard key={word.word} handleClick={() => this.handleClick(word.word)} word={word} />
                    ))}
                </div>
                <WordDetail word={modalData} handleClose={this.toggleModal.bind(this)} open={open} />
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