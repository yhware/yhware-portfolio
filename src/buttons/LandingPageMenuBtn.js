import React from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';

const styles = {
    wrapper: {
        display: "inline-block",
        width: 100,
        textAlign: "center"
    },
    icon: {
        color: "#fff"
    },
    text: {
        margin: '5px 0 0 0',
        color: "#fff",
        fontWeight: 600,
        fontSize: "1.5em",
        textAlign: "center"
    }
};

const LandingPageMenuBtn = ({icon, icon_name}) => {
    return (
        <div style={styles.wrapper}>
            <MaterialIcon icon={icon} size={85} color="#FFF"/>
            <p style={styles.text}>{icon_name}</p>
        </div>
    )
};

export default LandingPageMenuBtn;