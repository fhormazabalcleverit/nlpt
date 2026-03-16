import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode, forwardRef } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  blur?: boolean;
  className?: string;
  viewportOnce?: boolean;
  id?: string;
}

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.8,
  y = 40,
  blur = true,
  className = "",
  viewportOnce = true,
  id
}: FadeInProps) => {
  return (
    <motion.div
      id={id}
      initial={{ 
        opacity: 0, 
        y: y,
        filter: blur ? 'blur(10px)' : 'none'
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        filter: 'blur(0px)'
      }}
      viewport={{ once: viewportOnce, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  staggerChildren?: number;
}

export const StaggerContainer = forwardRef<HTMLDivElement, StaggerContainerProps>(
  ({ children, staggerChildren = 0.1, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          animate: {
            transition: {
              staggerChildren: staggerChildren
            }
          }
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

StaggerContainer.displayName = 'StaggerContainer';

export const StaggerItem = ({ 
  children,
  y = 40,
  blur = true,
  className = "",
  duration = 0.8
}: { 
  children: ReactNode;
  y?: number;
  blur?: boolean;
  className?: string;
  duration?: number;
}) => {
  return (
    <motion.div
      className={className}
      variants={{
        initial: { 
          opacity: 0, 
          y: y,
          filter: blur ? 'blur(10px)' : 'none'
        },
        animate: { 
          opacity: 1, 
          y: 0,
          filter: 'blur(0px)',
          transition: {
            duration: duration,
            ease: [0.21, 0.47, 0.32, 0.98]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};
