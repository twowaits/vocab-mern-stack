import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Divider from '@material-ui/core/Divider'
import WordCard from './WordCard'
import WordDetail from './WordDetail'
import debounce from 'lodash.debounce'
import { handleInitialData } from '../actions/word'

class Search extends Component {
    state = {
        input: '',
        searchResult: [],
        openDetailModal: false,
        modalData: {}
    }

    setInput = debounce((input) => {
        this.setState({ input })
        const expression = `.*${this.state.input}.*`
        const regex = new RegExp(expression, "g");
        const searchResult = this.props.words.filter(word => word.word.match(regex))
        this.setState({ searchResult })
        if (this.state.input === '') this.setState({ searchResult: [] })
    }, 1000)

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
        const words = this.state.searchResult
        const { openDetailModal, modalData } = this.state

        return (
            <Fragment>
                <div className="header" >
                    <input
                        type="text"
                        className="searchInput"
                        placeholder="Search"
                        onChange={e => this.setInput(e.target.value)}
                    />
                    <Link to='/'>
                        <IconButton aria-label="close" color="inherit">
                            <CloseIcon />
                        </IconButton>
                    </Link>
                </div>
                <div className="container">
                    <h4 className="heading">Search Result</h4>
                    <Divider />
                    <div className="word-container">
                        {words.map(word => (
                            <WordCard key={word.word} handleClick={() => this.handleClick(word.word)} word={word} />
                        ))}
                    </div>
                    <WordDetail word={modalData} handleClose={this.toggleModal.bind(this)} open={openDetailModal} />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (words, { props }) => {
    return {
        words
    }
}

export default connect(mapStateToProps, { handleInitialData })(Search)