import React, { useEffect } from "react";
import OCol from "../../07-objects/o-col/o-col";
import OContainer from "../../07-objects/o-container/o-container";


const BDebug = (props) => {

    const p = 'b-debug';
    const isDebugClass = 'is-debug';
    const cols = { lg: 1, md: 1, sm: 1 };

    const handlerKeyPress = (e) => {
        const { keyCode, ctrlKey } = e;
        //hacemos la accion de CTRL + .
        if (keyCode == 190 && ctrlKey) {
            document.body.classList.toggle(isDebugClass);
        }
    };

    useEffect(() => {
        document.body.addEventListener('keypress' && 'keydown', handlerKeyPress, false);
        return () => {
            document.body.classList.remove(isDebugClass);
            document.body.removeEventListener('keypress' && 'keydown', handlerKeyPress, false);
        };
    }, []);


    return (
        <div className={`${p}`} >
            <OContainer p={p} >
                <OCol p={p} cols={cols}>
                    <div className={`${p}__col-content`}></div>
                </OCol>
                <OCol p={p} cols={cols}>
                    <div className={`${p}__col-content`}></div>
                </OCol>
                <OCol p={p} cols={cols}>
                    <div className={`${p}__col-content`}></div>
                </OCol>
                <OCol p={p} cols={cols}>
                    <div className={`${p}__col-content`}></div>
                </OCol>
                <OCol p={p} cols={cols} extraClasses={`u-display-none@only-sm`}>
                    <div className={`${p}__col-content`}></div>
                </OCol>
                <OCol p={p} cols={cols} extraClasses={`u-display-none@only-sm`}>
                    <div className={`${p}__col-content`}></div>
                </OCol>
                <OCol p={p} cols={cols} extraClasses={`u-display-none@only-md u-display-none@only-sm`}>
                    <div className={`${p}__col-content`}></div>
                </OCol>
                <OCol p={p} cols={cols} extraClasses={`u-display-none@only-md u-display-none@only-sm`}>
                    <div className={`${p}__col-content`}></div>
                </OCol>
                <OCol p={p} cols={cols} extraClasses={`u-display-none@only-md u-display-none@only-sm`}>
                    <div className={`${p}__col-content`}></div>
                </OCol>
                <OCol p={p} cols={cols} extraClasses={`u-display-none@only-md u-display-none@only-sm`}>
                    <div className={`${p}__col-content`}></div>
                </OCol>
                <OCol p={p} cols={cols} extraClasses={`u-display-none@only-md u-display-none@only-sm`}>
                    <div className={`${p}__col-content`}></div>
                </OCol>
                <OCol p={p} cols={cols} extraClasses={`u-display-none@only-md u-display-none@only-sm`}>
                    <div className={`${p}__col-content`}></div>
                </OCol>
            </OContainer>
        </div >
    )
}

export default BDebug;