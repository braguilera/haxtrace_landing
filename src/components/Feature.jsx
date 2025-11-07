import { motion } from 'framer-motion';

const Feature = ({title, description, index}) => {

    const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
            }
        },
    };

    return (
        <motion.article 
            key={index}
            variants={itemVariants} 
            className="border border-primary px-4 py-1 rounded-md"
        >
            <h3 className="text-sm font-semibold text-zinc-600">{title}</h3>
            <p className="text-xs text-zinc-500">
                {description}
            </p>
        </motion.article>
    )
}


export default Feature
