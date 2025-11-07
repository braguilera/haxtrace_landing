import './App.css'
import haxtrace_mockup from './assets/haxtrace_mockup.webp'
import quadrant_logo from './assets/quadrant_logo.svg'
import haxtrace_logo from './assets/haxtrace_logo.webp'
import Feature from './components/Feature';
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

const pcMockupVariants = {
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

function App() {

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
        className='overflow-hidden flex lg:flex-row flex-col lg:h-screen min-h-screen items-center justify-center px-8 py-10 lg:px-10 relative'
      >
        <motion.article
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='flex flex-col gap-2'
        >
          <motion.img
            src={haxtrace_logo}
            variants={itemVariants}
            className='h-4 lg:h-5 w-fit'
            alt="Logifleet Logo"
          />
          <motion.h1
            variants={itemVariants}
            className='text-4xl lg:text-6xl font-bold text-zinc-600'
          >
            Trazabilidad de mercadería
            <span className='text-primary pl-4'>
              en tiempo real
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className='text-zinc-500 text-sm lg:text-base'
          >
            Visualizá el estado de cada envío en tiempo real. Control total desde la salida del almacén hasta la confirmación de entrega.
          </motion.p>
          <motion.article
            variants={containerVariants}
            className='flex flex-col gap-4'
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='relative w-full rounded-md p-[3px] animate-shine'
              style={{
                backgroundImage: 'linear-gradient(90deg, rgba(133, 126, 224, 0.6) 0%, rgba(200, 195, 255, 0.9) 45%, rgba(255, 255, 255, 1) 50%, rgba(200, 195, 255, 0.9) 55%, rgba(133, 126, 224, 0.6) 100%)',
                backgroundSize: '200% 100%',
              }}
            >
              <a
                className='block bg-primary text-white px-4 py-2 w-full text-center rounded-md text-2xl font-semibold'
                href="#" target="_blank" rel="noopener noreferrer"
              >
                Iniciar sesión
              </a>
            </motion.div>
            <motion.a
              whileHover={{ scale: 1.05, color: '#32B39C' }}
              whileTap={{ scale: 0.95 }}
              className='text-zinc-300 text-sm hover:font-semibold transition-all duration-200'
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
          className='relative sm:h-fit px-0 lg:h-auto sm:px-20'
        >
          <motion.img
            variants={pcMockupVariants}
            src={haxtrace_mockup}
            className='h-full'
            alt="Logifleet en PC"
          />
        </motion.aside>
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.8 } }}
          className='lg:absolute relative bottom-0 lg:h-10 h-auto mt-8 lg:mt-0 items-center justify-center lg:left-1/2 lg:-translate-x-1/2 z-20 px-4 py-2 text-zinc-400 text-xs flex flex-row'
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

export default App