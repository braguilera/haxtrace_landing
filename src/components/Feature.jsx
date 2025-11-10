import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

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
            className="text-center lg:px-4 py-2 sm:py-4 rounded-md"
        >
            <Check className="inline-block w-8 h-8 mb-2 bg-primary rounded-full text-white p-2" />
            <h3 className="text-sm lg:text-base font-semibold py-1 text-zinc-600">{title}</h3>
            <p className="text-xs lg:text-sm text-zinc-500">
                {description}
            </p>
        </motion.article>
    )
}


export default Feature
