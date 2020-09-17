import React from 'react'
import Divider from '@material-ui/core/Divider'
import WordCard from './WordCard'

export default function Words(props) {
    return (
        <div className="words">
            <h4 className="heading">{props.text}</h4>
            <Divider style={{ marginTop: 10 }} />
            <WordCard />
        </div>
    )
}