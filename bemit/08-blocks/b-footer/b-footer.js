import React, { useContext } from "react";
import OCol from "../../07-objects/o-col/o-col";
import OContainer from "../../07-objects/o-container/o-container";
import { MainContext } from "../../../context/Main.context";

const BFooter = () => {


    const p = 'b-footer';
    const { globalData, menuOpen, setMenuOpen } = useContext(MainContext);
    const textToOpen = globalData[`${p}`][`${p}__text-default`]
    const textToClose = globalData[`${p}`][`${p}__text-alt`]


    const handleOnClick = () => {
        setMenuOpen(!menuOpen);

    }

    return (
        <div className={`${p}`} >
            <OContainer p={p}>
                <OCol p={p} cols={{ lg: 2, lgPush: 5, md: 6, sm: 4 }}>
                    <div className={`${p}__wrapper-button`}>
                        <button
                            className={`${p}__button`}
                            onClick={handleOnClick}
                            data-to-close={textToClose}
                        >{textToOpen}</button>
                    </div>
                </OCol>
            </OContainer>
        </div >
    )
}

export default BFooter;