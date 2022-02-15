
export const animation = {
    home: {
        hidden: {
            x: -200,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.1}
        })
    },
    aboutRight: {
        hidden: {
            y: 200,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.3}
        })
    },
    aboutLeft: {
        hidden: {
            y: -200,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.3}
        })
    },
    skills: {
        hidden: {
            y: 800,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.3}
        })
    },
    contacts: {
        hidden: {
            x: 400,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.1}
        })
    },
    contactsMap: {
        hidden: {
            x: -400,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.1}
        })
    }
}