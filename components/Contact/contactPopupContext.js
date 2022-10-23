import React from "react";

const ContactPopupContext = React.createContext();

function contactReducer(state, action) {
    switch (action.type) {
        case "open": {
            return { open: true };
        }
        case "close": {
            return { open: false };
        }
        default:
            return { open: false };
    }
}

function ContactPopupProvider({ children }) {
    const [state, dispatch] = React.useReducer(contactReducer, { open: false });
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = {
        open: state.open,
        openPopup: () => dispatch({ type: "open" }),
        closePopup: () => dispatch({ type: "close" }),
    };
    return (
        <ContactPopupContext.Provider value={value}>
            {children}
        </ContactPopupContext.Provider>
    );
}

function useContactPopup() {
    const context = React.useContext(ContactPopupContext);
    if (context === undefined) {
        throw new Error(
            "useContactPopup must be used within a ContactPopupProvider",
        );
    }
    return context;
}

export { ContactPopupProvider, useContactPopup };
