import React, { useContext } from "react";
import OCol from "../../07-objects/o-col/o-col";
import OContainer from "../../07-objects/o-container/o-container";
import { MainContext } from "../../../context/Main.context";

const BAbout = () => {


    const p = 'b-about';
    const { globalData } = useContext(MainContext);
    const aboutData = globalData[`${p}`]

    const BAboutBox = ({ i }) => {
        const title = aboutData[`${p}__box-${i}-title`]
        const content = aboutData[`${p}__box-${i}-content`]

        return (
            <div className={`${p}__box`}>
                <div className={`${p}__box-wrapper-title`}>
                    <div className={`${p}__box-title | ${p}__box-title--${i} | o-font-title`}>{title}</div>
                </div>
                <div className={`${p}__box-wrapper-content`}>
                    <div className={`${p}__box-content | ${p}__box-content--${i} | o-font-text`}
                        dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </div>
        )
    }

    return (
        <div className={`${p}`} >
            <div className={`${p}__mask`}></div>
            <div className={`${p}__wrapper`}>
                <OContainer p={p}>
                    <OCol p={p} cols={{ lg: 6, lgPush: 3, md: 6, sm: 4 }}>
                        <BAboutBox i={1} />
                    </OCol>
                    <OCol p={p} cols={{ lg: 6, md: 6, sm: 4 }}>
                        <BAboutBox i={2} />
                    </OCol>
                    <OCol p={p} cols={{ lg: 6, md: 6, sm: 4 }}>
                        <BAboutBox i={3} />
                    </OCol>
                </OContainer>
            </div>
        </div >
    )
}

export default BAbout;