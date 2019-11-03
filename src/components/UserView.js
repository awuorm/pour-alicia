import React from "react";
import {StyledUserView} from "../styles";
import pour_alicia_logo_2 from "../imgs/pour_alicia_logo_2.png";

const UserView = () => {
    return (<StyledUserView>
        <figure>
        <img alt="logo of pour alicia" src={pour_alicia_logo_2}/>
        </figure>
    </StyledUserView>)
}

export default UserView;