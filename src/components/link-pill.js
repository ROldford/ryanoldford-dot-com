import React from "react";
import {BorderedElement} from "./style/emo-post";

const LinkPill = ({ children, title }) => {
    if (children !== "") {
        return <BorderedElement><a href={children} target={"_blank"} rel={"noreferrer"}>{title}</a></BorderedElement>;
    } else {
        return ""
    }
}

export default LinkPill;