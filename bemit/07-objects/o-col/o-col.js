import React from "react";
import classNames from 'classnames';

const OCol = ({ p, extraClasses, cols, children }) => {
    const { lg, md, sm, lgPush, mdPush, smPush } = cols;

    const arrayClasses = [
        { [`${p}__col`]: p },
        { [`${extraClasses}`]: extraClasses },
        { [`o-col-${lg}@lg`]: lg },
        { [`o-col-push-${lgPush}@lg`]: lgPush },
        { [`o-col-${md}@md`]: md },
        { [`o-col-push-${mdPush}@md`]: mdPush },
        { [`o-col-${sm}@sm`]: sm },
        { [`o-col-push-${smPush}@sm`]: smPush },
    ]

    let classes = classNames(arrayClasses);
    classes = classes.split(' ').join(' | ');

    return (
        <div className={classes}>{children}</div>
    )
}

export default OCol;