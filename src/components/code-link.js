import React from "react";
import {BorderedElement} from "./style/emo-post";

const CodeLink = ({ children }) => {
    if (children !== "") {
        return <BorderedElement><a href={children} target={"_blank"}>Code Repo</a></BorderedElement>;
    } else {
        return ""
    }
}

export default CodeLink;