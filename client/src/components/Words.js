import React, { Component } from 'react'
import { connect } from 'react-redux'
import Divider from '@material-ui/core/Divider'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import WordCard from './WordCard'
import WordDetail from './WordDetail'
import AddWordModal from './AddWordModal'
import { handleInitialData } from '../actions/word'

class Words extends Component {
    state = {
        openDetailModal: false,
        openAddWordModal: false,
        modalData: {}
    }

    toggleAddNewWordModal() {
        this.setState(prevState => ({
            openAddWordModal: !prevState.openAddWordModal
        }))
    }

    toggleModal() {
        this.setState(prevState => ({
            openDetailModal: !prevState.openDetailModal
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
        const { openDetailModal, modalData, openAddWordModal } = this.state

        return (
            <div className="container">
                <h4 className="heading">{this.props.text}</h4>
                <Divider />
                <div className="word-container">
                    {words.map(word => (
                        <WordCard key={word.word} handleClick={() => this.handleClick(word.word)} word={word} />
                    ))}
                </div>
                <WordDetail word={modalData} handleClose={this.toggleModal.bind(this)} open={openDetailModal} />
                <AddWordModal handleClose={this.toggleAddNewWordModal.bind(this)} open={openAddWordModal} />
                <div className="addBtn">
                    <IconButton onClick={() => this.toggleAddNewWordModal()} edge="end" color="inherit" aria-label="close">
                        <AddIcon />
                    </IconButton>
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