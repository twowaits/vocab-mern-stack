import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withSnackbar } from 'notistack'
import { handleAddWord } from '../actions/word'

class AddWordModal extends Component {
    state = {
        input: '',
        isDuplicate: false,
        loading: false
    }

    setInput(input) {
        this.setState({ input })
        const isDuplicate = this.props.words.some(word => word.word === input)
        if (isDuplicate) this.setState({ isDuplicate })
        else this.setState({ isDuplicate })
    }

    handleAddBtn(e) {
        if (this.state.input !== '') {
            this.setState({ loading: true })
            this.props.handleAddWord(this.state.input)
                .then(res => {
                    if (!res.word) this.props.enqueueSnackbar("Unable to add new word")
                    else this.props.enqueueSnackbar("New word is added to dictionary")
                    this.props.handleClose()
                    this.setState({ loading: false })
                })
                .catch(() => this.props.enqueueSnackbar("Unable to add new word"))
        }
    }

    render() {
        const { open, handleClose } = this.props
        return (
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add To Dictionary</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="word"
                        label="New Word"
                        type="Text"
                        onKeyUp={e => this.setInput(e.target.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    {this.state.loading ?
                        (<Button><CircularProgress color="secondary" /></Button>) :
                        (<Button disabled={this.state.isDuplicate} onClick={(e) => this.handleAddBtn(e)} color="primary">
                            Add
                        </Button>)}
                </DialogActions>
            </Dialog >
        )
    }
}

const mapStateToProps = (words) => {
    return {
        words
    }
}

export default connect(mapStateToProps, { handleAddWord })(withSnackbar(AddWordModal))
