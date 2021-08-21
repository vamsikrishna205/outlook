import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: '20px',
    },
}));

export default function TransitionsMob() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button id="mob_mail" class="Mob_Mail" type="button" variant="contained" onClick={handleOpen}>
                <MailOutlineIcon />
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div class="cancel_pop"><ClearRoundedIcon /></div>
                        <div id="transition-modal-title" class="pop_field"><input class="pop1" type="text" id="popsearch1" onkeyup="myFunction()" placeholder="To:" title="Type in a category"></input></div>
                        <div id="transition-modal-description" class="pop_field"><input class="pop2" type="text" id="popsearch2" onkeyup="myFunction()" placeholder="Subject.." title="Type in a category"></input></div>
                        <div class="pop_field"><input class="pop3" type="text" id="popsearch3" onkeyup="myFunction()" placeholder="Type Something..." title="Type in a category"></input></div>
                        <div><Button id="pop_Button"><MailOutlineIcon id="pop_mail" />Send</Button></div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
