import react, { Component } from 'react';
import './styles.css';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import maylee from '../Images/maylee.png';
import hale from '../Images/hale.png';
import Jody from '../Images/Jody.png';
import Alex from '../Images/Alex.png';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import HDWY from '../Images/HDWY.png'
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import Ios_Switch from '../Switch/Toggle_Switch'
import IconButton from '@material-ui/core/IconButton';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export class Classprops extends Component {

    render() {

        return (
            <div class="Main_Body_Container" >
                <div class="empty_cont"></div>
                <div class="Body_Part_Container">
                    <div class="Mobile_nav">
                        <div class="Mob_menu">
                            <div class="Mob_Logo">
                                <img class="Mob_HD" src={HDWY} />
                            </div>
                            <div>MENU</div>
                        </div>
                        <div class="Mob_Icons">
                            <IconButton><NotificationsIcon /></IconButton>
                            <IconButton><SettingsIcon /></IconButton>
                            <IconButton id="ios_mob"><Ios_Switch /></IconButton>
                        </div>
                    </div>
                    <div class='message_container' >
                        <div class="message_header">
                            <div class="message_title">
                                Messages
                            </div>
                            <div class="compose_container">
                                <Button variant="contained" Id="Button_Compose">
                                    <EditIcon />Compose
                                </Button>
                            </div>
                        </div>
                        <div class="maylee_chat">
                            <div class="message_wrap">
                                <div class="maylee_img">
                                    <img class="mayle_image" alt="Remy Sharp" src={maylee} />
                                </div>
                                <div class="Maylee_content">
                                    <div class="maylee_header">
                                        <div class="Maylee_sideheader">Welcome Abroad!</div>
                                        <div class="maylee_time">9:33 AM</div>
                                    </div>
                                    <div class="maylee_subcontent">
                                        Have a good weekend! See you Monday morning!
                                    </div>
                                </div>
                                <div class="spot_dot">
                                    <div class="blue_dot"></div>
                                </div>
                            </div>
                        </div>
                        <div class="maylee_chat">
                            <div class="message_wrap1">
                                <div class="hale_img">
                                    <img class="hale_image" alt="Remy Sharp" src={hale} />
                                </div>
                                <div class="hale_content">
                                    <div class="maylee_header">
                                        <div class="Maylee_sideheader">Welcome!</div>
                                        <div class="maylee_time">9:02 AM</div>
                                    </div>
                                    <div class="maylee_subcontent">
                                        Hi Conner, Welcome to the team! You should be receiving an email...
                                    </div>
                                </div>
                                <div class="spot_dot">
                                    <div class="blue_dot"></div>
                                </div>
                            </div>

                        </div>
                        <div class="maylee_chat">
                            <div class="message_wrap3">
                                <div class="Jody_img">
                                    <img class="mayle_image" alt="Remy Sharp" src={Jody} />
                                </div>
                                <div class="Jody_content">
                                    <div class="maylee_header">
                                        <div class="Maylee_sideheader">Getting Started</div>
                                        <div class="maylee_time">7:35 AM</div>
                                    </div>
                                    <div class="maylee_subcontent">
                                        Hey Conner, When you get up and running you should see an invite...
                                    </div>
                                </div>
                                <div class="spot_dot">
                                    <div class="blue_dot"></div>
                                </div>
                            </div>
                        </div>
                        <div class="Mob_Mail"><MailOutlineIcon fontSize="large" id="mob_mail" /></div>
                    </div>
                    <div class="Chat_Container" >
                        <div class="Chat_Board">
                            <div class="Welcome_title">
                                Welcome Abroad!
                            </div>
                            <div class="Chat_Icons">
                                <div class="group_images">
                                    <img class="group_image" src={maylee} />
                                    <img class="group_image" src={hale} />
                                    <img class="group_image" src={Jody} />
                                    <AddIcon id="Add_img" />
                                </div>
                                <div class="three_dots">...</div>
                            </div>
                        </div>
                        <Divider />
                        <div class="Maylee_chat1">
                            <div class="maylee_head">
                                <div class="Mayle_image1">
                                    <div class="mayle_img1">
                                        <img class="mayle_image1" alt="Remy Sharp" src={maylee} />
                                    </div>
                                    <div class="mayle_name">Maylee</div>
                                </div>
                                <div class="mayle_timer">9:30 AM</div>
                            </div>
                            <div class="mayle_matter1">
                                Hi Conner! I just wanted to welcome you aboard!
                            </div>
                        </div>
                        <div class="Jody_chat">
                            <div class="maylee_head">
                                <div class="Mayle_image1">
                                    <div class="mayle_img1">
                                        <img class="hale_image1" alt="Remy Sharp" src={hale} />
                                    </div>
                                    <div class="mayle_name">Jody A.</div>

                                </div>
                                <div class="mayle_timer">9:33 AM</div>
                            </div>
                            <div class="jody_matter1">
                                Thanks Maylee! I’m so stoked to join this crew and work on products that affect people’s lives in such a positive way. Can’t wait to get started!
                            </div>
                        </div>
                        <div class="Alex_chat">
                            <div class="maylee_head">
                                <div class="Mayle_image1">
                                    <div class="mayle_img1">
                                        <img class="jody_image" alt="Remy Sharp" src={Jody} />
                                    </div>
                                    <div class="mayle_name">Alex S.</div>
                                </div>
                                <div class="mayle_timer">9:33 AM</div>
                            </div>
                            <div class="Alex_matter1">
                                Hey Conner! Stoked to have you on board as well! Cheers!
                            </div>
                            <div class="Alex_matter1">
                                I just placed a box of team gear on your desk.
                            </div>
                        </div>
                        <div class="Maylee_chat2">
                            <div class="maylee_head">
                                <div class="Mayle_image1">
                                    <div class="mayle_img1">
                                        <img class="mayle_image1" alt="Remy Sharp" src={maylee} />
                                    </div>
                                    <div class="mayle_name">Maylee</div>
                                </div>
                                <div class="mayle_timer">9:40 AM</div>
                            </div>
                            <div class="mayle_matter2">
                                Thank you very much Alex! Looking forward into it!
                            </div>
                        </div>
                        <div class="Maylee_chat3">
                            <div class="maylee_head">
                                <div class="Mayle_image1">
                                    <div class="mayle_img1">
                                        <img class="mayle_image1" alt="Remy Sharp" src={Alex} />
                                    </div>
                                    <div class="mayle_name">Hale B.</div>
                                </div>
                                <div class="mayle_timer">9:45 AM</div>
                            </div>
                            <div class="mayle_matter1">
                                Have a good weekend! See you Monday morning!
                            </div>
                        </div>
                        <div class="Bottom_input">
                            <div class="input_field"><input class="input1" type="text" id="mySearch" onkeyup="myFunction()" placeholder="Type a message..." title="Type in a category"></input></div>
                            <div class="add_icon"><AddIcon /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Classprops;