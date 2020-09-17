import React from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search'

export default function Header() {
    return (
        <div className="header">
            <Typography className="logo" variant="h6">
                Vocab
            </Typography>
            <Link to='/search'>
                <IconButton aria-label="search" color="inherit">
                    <SearchIcon />
                </IconButton>
            </Link>
        </div>
    )
}