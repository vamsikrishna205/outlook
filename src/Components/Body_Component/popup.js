import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './styles.css';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(0),
    },
}));

export default function SimplePopover() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button aria-describedby={id} variant="contained" color="secondary" onClick={handleClick} id="Button_Compose">
                <EditIcon />compose
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography className={classes.typography}>
                    <div class="main_pop">
                        <div class="pop_field"><input class="pop1" type="text" id="popsearch1" onkeyup="myFunction()" placeholder="To:" title="Type in a category"></input></div>
                        <div class="pop_field"><input class="pop2" type="text" id="popsearch2" onkeyup="myFunction()" placeholder="Subject.." title="Type in a category"></input></div>
                        <div class="pop_field"><input class="pop3" type="text" id="popsearch3" onkeyup="myFunction()" placeholder="Type Something..." title="Type in a category"></input></div>
                        <div><Button id="pop_Button"><MailOutlineIcon id="pop_mail" />Send</Button></div>
                    </div>

                </Typography>
            </Popover>
        </div>
    );
}