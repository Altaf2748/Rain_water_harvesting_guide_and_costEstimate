import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DropletIcon, HomeIcon, CalculatorIcon, BookOpenIcon, Users2Icon, MenuIcon, XIcon } from 'lucide-react';
import Introduction from './components/Introduction';
import DiyGuide from './components/DiyGuide';
import CostCalculator from './components/CostCalculator';
import Maintenance from './components/Maintenance';
import Community from './components/Community';

function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { id: 'intro', name: 'Introduction', icon: DropletIcon },
    { id: 'guide', name: 'DIY Guide', icon: HomeIcon },
    { id: 'calculator', name: 'Cost Calculator', icon: CalculatorIcon },
    { id: 'maintenance', name: 'Maintenance', icon: BookOpenIcon },
    { id: 'community', name: 'Community', icon: Users2Icon },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'intro':
        return <Introduction />;
      case 'guide':
        return <DiyGuide />;
      case 'calculator':
        return <CostCalculator />;
      case 'maintenance':
        return <Maintenance />;
      case 'community':
        return <Community />;
      default:
        return <Introduction />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <DropletIcon className="h-8 w-8 text-blue-600" />
                </motion.div>
                <span className="ml-2 text-xl font-bold text-gray-900">RainWise</span>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMobileMenuOpen ? (
                  <XIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden w-full"
              >
                <div className="bg-white rounded-lg shadow-md p-4">
                  {navigation.map((item) => (
                    <motion.button
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center px-4 py-3 rounded-md text-sm font-medium ${
                        activeSection === item.id
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className="h-5 w-5 mr-3" />
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Sidebar */}
          <div className="hidden md:block md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
              {navigation.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-md text-sm font-medium ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex-1"
          >
            <div className="bg-white rounded-lg shadow-md p-6">
              {renderContent()}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;