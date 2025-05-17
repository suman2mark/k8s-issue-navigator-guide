
import { MessageSquare, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

interface QuestionAnswerGraphicProps {
  className?: string;
}

export const QuestionAnswerGraphic = ({ className = "" }: QuestionAnswerGraphicProps) => {
  return (
    <div className={`w-full flex justify-center items-center py-6 ${className}`}>
      <div className="relative max-w-3xl w-full">
        {/* Decorative background elements */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-8">
          {/* Question side */}
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-full bg-k8s-blue bg-opacity-10 p-4 mb-4">
              <HelpCircle className="h-10 w-10 text-k8s-blue" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Find Your Issue</h3>
            <p className="text-gray-600 max-w-xs">Browse through common Kubernetes issues, organized by category and severity</p>
          </motion.div>
          
          {/* Connecting line */}
          <motion.div 
            className="hidden md:block h-0.5 w-20 bg-gradient-to-r from-k8s-blue to-teal-500"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          />
          
          {/* Answer side */}
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="rounded-full bg-teal-100 p-4 mb-4">
              <MessageSquare className="h-10 w-10 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Get Solutions</h3>
            <p className="text-gray-600 max-w-xs">Discover expert-verified solutions and troubleshooting tips for each problem</p>
          </motion.div>
        </div>
        
        {/* Animated dots */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-k8s-blue"
            style={{
              top: `${30 + i * 20}%`,
              left: `${10 + i * 5}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i + 3}
            className="absolute h-2 w-2 rounded-full bg-teal-500"
            style={{
              top: `${20 + i * 20}%`,
              right: `${15 + i * 5}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>
    </div>
  );
};
