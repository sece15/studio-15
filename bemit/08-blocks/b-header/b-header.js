import React, { useState, useEffect, useContext } from "react";
import OCol from "../../07-objects/o-col/o-col";
import OContainer from "../../07-objects/o-container/o-container";
import Link from "next/link";
import { MainContext } from "../../../context/Main.context";

const BHeader = () => {

    const p = 'b-header';
    const { globalData } = useContext(MainContext);
    const logo = globalData[`${p}`][`${p}__text-logo`]

    const [currentTime, setCurrentTime] = useState(false);
    const formatter = new Intl.DateTimeFormat('es-ES', { timeStyle: "medium" });

    const updateTime = () => {
        const dataTime = new Date();
        const formattedDateTime = formatter.format(dataTime);
        setCurrentTime(formattedDateTime);
    }

    useEffect(() => {
        if (!currentTime) {
            updateTime();
        } else {
            setTimeout(updateTime, 1000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentTime]);

    const htmlContent = (
        <>

            <div className={`${p}__wrapper-logo`}>
                <Link href="/">
                    <a className={`${p}__logo | o-font-text`}>{logo}</a>
                </Link>
            </div>
            <div className={`${p}__wrapper-info`}>
                <div className={`${p}__info  | o-font-text`}>Perú-{currentTime}</div>
            </div>

        </>
    )

    return (
        <div className={`${p}`} >
            <OContainer p={p}>
                <OCol p={p} cols={{ lg: 2, lgPush: 5, md: 6, sm: 4 }}>
                    <div className={`${p}__wrapper`}>
                        <div className={`${p}__inner`}>
                            <div className={`${p}__wrapper-block | o-font-text`}>
                                {htmlContent}
                            </div>
                            <div className={`${p}__wrapper-block | ${p}__wrapper-block--alt`}>
                                {htmlContent}
                            </div>
                        </div>
                    </div>
                </OCol>
            </OContainer>
        </div >
    )
}

export default BHeader;