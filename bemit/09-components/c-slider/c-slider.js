import React from "react";
import OContainer from "../../07-objects/o-container/o-container"
import OCol from "../../07-objects/o-col/o-col"

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
const Cslider = ({ post }) => {

    const p = 'c-slider';
    const cols = { md: 12, sm: 8, xs: 4 };

    return (
        <div className={`${p}`}>
            <OContainer>
                <OCol cols={cols}>
                    <div className={`${p}__wrapper`}>
                        content here
                    </div>
                </OCol>
            </OContainer>
        </div>
    )
}