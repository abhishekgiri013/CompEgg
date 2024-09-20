export const heroVariants = {
    container: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    content: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    },
    title: {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    },
    text: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    },
    button: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
};

export const featureVariants = {
    container: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    title: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    },
    card: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    },
};

export const howItWorksVariants = {
    container: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    title: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    },
    step: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    },
};

export const apiVariants = {
    container: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    title: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    },
    logo: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    },
    text: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    },
};

export const footerVariants = {
    container: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    link: {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    },
};

export const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

export const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};



export const fadeContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

export const slideUpItem = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export const scaleButton = {
    rest: { scale: 1 },
    hover: { scale: 1.1, transition: { type: "spring", stiffness: 300 } },
};
