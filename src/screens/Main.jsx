import haxtrace_mockup from '../assets/haxtrace_mockup.webp'
import quadrant_logo from '../assets/quadrant_logo.svg'
import haxtrace_logo from '../assets/haxtrace_logo.webp'
import Feature from '../components/Feature';
import FloatingOrb from '../components/FloatingOrb';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2, 
      staggerChildren: 0.1, 
    },
  },
};

const mockupContainerVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const MockupVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  },
};

function Main() {

  const features = [
  {
    title: 'Remitos digitales con validación inteligente',
    description: 'QR desde el móvil para validación instantánea.'
  },
  {
    title: 'Información centralizada',
    description: 'Decisiones rápidas con datos en tiempo real.'
  },
  {
    title: 'Registros multimedia de incidencias',
    description: 'Fotos, videos y audios capturados en campo.'
  },
  ] 
  
  return (
    <>
      <section
        className='overflow-hidden flex lg:flex-row flex-col lg:h-screen min-h-screen items-center lg:justify-start justify-center px-8 py-10 lg:pl-16 lg:pr-0 relative bg-white'
      >
        <FloatingOrb 
          size={400} 
          color="#E8E6FF" 
          blur={120}
          initialX={-100}
          initialY={50}
          animationDuration={25}
          moveRange={40}
        />

        <FloatingOrb 
          size={300} 
          color="#E0DDFF" 
          blur={90}
          initialX={300}
          initialY={200}
          animationDuration={28}
          moveRange={45}
        />
        <FloatingOrb 
          size={250} 
          color="#F5F3FF" 
          blur={80}
          initialX={500}
          initialY={80}
          animationDuration={22}
          moveRange={30}
        />
        
        <motion.article
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='flex flex-col gap-2 lg:w-2/4 xl:w-2/5 w-full z-10'
        >
          <motion.img
            src={haxtrace_logo}
            variants={itemVariants}
            className='h-3 w-auto md:h-5 '
            alt="HaxTrace Logo"
          />
          <motion.h1
            variants={itemVariants}
            className='text-4xl lg:text-5xl xl:text-6xl font-bold text-zinc-600'
          >
            Trazabilidad de mercadería
            <span className='text-primary pl-4'>
              en tiempo real
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className='text-zinc-500 text-sm lg:text-lg'
          >
            Visualizá el estado de cada envío en tiempo real. Control total desde la salida del almacén hasta la confirmación de entrega.
          </motion.p>
          <motion.article
            variants={containerVariants}
            className='flex flex-col gap-0 sm:flex-row justify-center sm:gap-4'
          >
            {features.map((feature, index) => (
              <Feature key={index} title={feature.title} description={feature.description} index={index} />
            ))}
          </motion.article>
          <motion.footer
            variants={itemVariants}
            className='flex flex-col gap-2 py-4 w-full items-center'
          >
            <motion.div
              whileTap={{ scale: 0.95 }}
              className='relative w-full rounded-md p-[3px] animate-shine hover:scale-102 transition-all duration-400'
              style={{
                backgroundImage: 'linear-gradient(90deg, rgba(133, 126, 224, 0.6) 0%, rgba(200, 195, 255, 0.9) 45%, rgba(255, 255, 255, 1) 50%, rgba(200, 195, 255, 0.9) 55%, rgba(133, 126, 224, 0.6) 100%)',
                backgroundSize: '200% 100%',
              }}
            >
              <a
                className='block bg-primary text-white px-4 py-2 w-full text-center rounded-md text-2xl font-semibold '
                href="#" target="_blank" rel="noopener noreferrer"
              >
                Iniciar sesión
              </a>
            </motion.div>
            <motion.a
              className='border-2 cursor-pointer border-primary rounded-md w-full text-center py-2 px-4 text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-400'
              href="#" target="_blank" rel="noopener noreferrer"

              whileTap={{ scale: 0.99 }}
            >
              Descargar Logifleet
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className='text-primary underline text-sm hover:font-semibold transition-all duration-200'
              href="https://www.quadrant.com.ar/" target="_blank" rel="noopener noreferrer"
            >
              Ir a Quadrant
            </motion.a>
          </motion.footer>
        </motion.article>
        <motion.aside
          variants={mockupContainerVariants}
          initial="hidden"
          animate="visible"
          className='lg:absolute relative right-0 bottom-0 lg:w-2/4 xl:w-2/4 2xl:w-2/5 w-3/4 lg:h-full h-auto flex items-end justify-end '
        >
          <motion.img
            variants={MockupVariants}
            src={haxtrace_mockup}
            className='lg:h-full h-auto w-full object-contain lg:object-right-bottom object-center'
            alt="HaxTrace Dashboard"
          />
          <div className='absolute bottom-0-0 left-0 w-full h-1/5 bg-gradient-to-t from-white via-white/70 to-white/0 pointer-events-none'></div>
        </motion.aside>
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.8 } }}
          className='absolute bottom-0 w-full lg:h-10 h-auto pt-6 pb-4 lg:py-2 items-center justify-center lg:left-0 z-20 px-4 text-zinc-400 text-xs flex flex-row'
        >
          <p>
            Powered By
          </p>
          <a
            href="https://www.quadrant.com.ar/" target="_blank" rel="noopener noreferrer"
            className='flex flex-row items-center'
          >
            <img
              src={quadrant_logo}
              className='h-5 ml-1'
              alt="Logo de Quadrant"
            />
          </a>
        </motion.footer>
      </section>
    </>
  )
}

export default Main