import React, { Fragment } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export default function WordDetail(props) {
    const { word } = props
    return (
        <Dialog fullScreen open={props.open} onClose={props.handleClose} TransitionComponent={Transition}>
            <div className='closeBar'>
                <IconButton edge="end" color="inherit" onClick={() => props.handleClose()} aria-label="close">
                    <CloseIcon />
                </IconButton>
            </div>
            <div style={{ padding: '10px 20px' }}>
                {word.word ? (
                    <Fragment>
                        <Typography variant="h3" component="h2">
                            {word.word}
                        </Typography>
                        <Divider style={{ marginTop: 10 }} />
                        {word.entries.map((entry, index) => (
                            <div key={index} style={{ marginTop: 10 }}>
                                <Typography variant="body2" color="textSecondary" component="i">
                                    {entry.partOfSpeech}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {entry.origin.length !== 0 && (<span>Origin:</span>)} {entry.origin[0]}
                                </Typography>
                                <Typography variant="subtitle2" style={{ marginTop: 10 }} component="p">
                                    {entry.definitions[0]}
                                </Typography>
                                <ul style={{ paddingLeft: 30, fontSize: '14px', marginTop: 10 }}>
                                    {entry.examples.map((example, index) => (<li key={index}>{example}</li>))}
                                </ul>
                                <Divider style={{ marginTop: 10 }} />
                            </div>
                        ))}
                    </Fragment>
                ) : ''}
            </div>
        </Dialog>
    )
}
