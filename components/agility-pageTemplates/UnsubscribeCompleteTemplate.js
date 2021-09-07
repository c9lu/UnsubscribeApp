import React from "react";
import { ContentZone } from "@agility/nextjs";
import {getModule} from "components/agility-pageModules";

const UnsubscribeCompleteTemplate=(props)=>{
    return (
        <ContentZone name="UnsubscribeCompleteZone" {...props} getModule={getModule}/>


    );

};

export default UnsubscribeCompleteTemplate;