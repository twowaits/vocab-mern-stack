import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { handleAddWord } from '../actions/word'

class AddWordModal extends Component {
    state = {
        input: ''
    }

    setInput(input) {
        this.setState({ input })
    }

    handleAddBtn(e) {
        e.preventDefault()
        if (this.state.input !== '') {
            this.props.handleAddWord(this.state.input)
                .then(res => {
                    if (!res) alert('Not Added')
                    else alert('Added')
                })
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
                        onChange={e => this.setInput(e.target.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={(e) => this.handleAddBtn(e)} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

const mapStateToProps = (words) => {
    return {
        words
    }
}

export default connect(mapStateToProps, { handleAddWord })(AddWordModal)
