import React from "react";
import {BorderedElement} from "./style/emo-post";

const DemoLink = ({ children }) => {
    if (children !== "") {
        return <BorderedElement><a href={children} target={"_blank"}>Demo</a></BorderedElement>;
    } else {
        return ""
    }
}

export default DemoLink;