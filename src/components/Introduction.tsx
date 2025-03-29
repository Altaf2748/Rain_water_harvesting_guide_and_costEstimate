import React from 'react';
import { motion } from 'framer-motion';
import { CloudRainIcon, LeafIcon, PiggyBankIcon, DropletIcon, TreesIcon as TreeIcon, HomeIcon } from 'lucide-react';

const Introduction = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const benefits = [
    {
      icon: CloudRainIcon,
      title: "What is Rainwater Harvesting?",
      description: "A sustainable method of collecting and storing rainwater for future use, reducing reliance on municipal water supply.",
      color: "blue"
    },
    {
      icon: LeafIcon,
      title: "Environmental Impact",
      description: "Reduce water wastage, prevent stormwater runoff, and contribute to sustainable water management.",
      color: "green"
    },
    {
      icon: PiggyBankIcon,
      title: "Cost Benefits",
      description: "Save on water bills while increasing property value with a sustainable water solution.",
      color: "yellow"
    }
  ];

  const stats = [
    { icon: DropletIcon, value: "40%", label: "Water Bill Reduction" },
    { icon: TreeIcon, value: "1000+", label: "Systems Installed" },
    { icon: HomeIcon, value: "50+", label: "Years Experience" }
  ];

  return (
    <div className="space-y-12">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-gray-900">Welcome to RainWise</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Your comprehensive guide to sustainable water management through rainwater harvesting.
          Join thousands of homeowners who are making a difference.
        </p>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-3 gap-8"
        variants={{
          animate: { transition: { staggerChildren: 0.1 } }
        }}
        initial="initial"
        animate="animate"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className={`bg-${benefit.color}-50 rounded-xl p-6 transform transition-all duration-300 hover:scale-105`}
          >
            <benefit.icon className={`h-12 w-12 mx-auto text-${benefit.color}-600`} />
            <h3 className="mt-4 text-lg font-semibold text-center">{benefit.title}</h3>
            <p className="mt-2 text-gray-600 text-center">{benefit.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg transform -skew-y-2" />
        <div className="relative grid md:grid-cols-3 gap-8 bg-white rounded-lg shadow-xl p-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <stat.icon className="h-8 w-8 mx-auto text-blue-600" />
              <div className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="relative h-80 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1589634749000-1e72ec00a13f?auto=format&fit=crop&w=1200&q=80"
            alt="Rainwater collection system"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Start Your Journey Today</h2>
            <p className="text-gray-200">
              Join the sustainable water movement and make a positive impact on the environment.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="prose max-w-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold">Why Choose Rainwater Harvesting?</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <ul className="space-y-2">
            <li className="flex items-center text-gray-700">
              <DropletIcon className="h-5 w-5 text-blue-600 mr-2" />
              Reduce dependency on municipal water supply
            </li>
            <li className="flex items-center text-gray-700">
              <PiggyBankIcon className="h-5 w-5 text-blue-600 mr-2" />
              Lower your monthly water bills
            </li>
            <li className="flex items-center text-gray-700">
              <LeafIcon className="h-5 w-5 text-blue-600 mr-2" />
              Help conserve precious water resources
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-700">
              <HomeIcon className="h-5 w-5 text-blue-600 mr-2" />
              Create a sustainable water source for your garden
            </li>
            <li className="flex items-center text-gray-700">
              <TreeIcon className="h-5 w-5 text-blue-600 mr-2" />
              Contribute to environmental conservation
            </li>
            <li className="flex items-center text-gray-700">
              <CloudRainIcon className="h-5 w-5 text-blue-600 mr-2" />
              Increase your property's resilience and value
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Introduction;