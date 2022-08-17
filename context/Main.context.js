import React, { createContext, useState, useEffect } from "react"

export const MainContext = createContext();

export const MainProvider = ({ globalData, children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const isMenuOpenClass = 'is-menu-open';

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add(isMenuOpenClass)
        } else {
            document.body.classList.remove(isMenuOpenClass)
        }
    }, [menuOpen])

    return (
        <MainContext.Provider
            value={{
                menuOpen,
                setMenuOpen,
                globalData
            }}
        >{children}</MainContext.Provider>
    )
}
