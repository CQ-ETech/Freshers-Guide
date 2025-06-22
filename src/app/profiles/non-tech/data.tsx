import Consult from './assets/consult.jpg';
import Finance from './assets/finance.jpg';
import Product from './assets/product.jpg';

export const data = [
  {
    name: 'Consult',
    description: 'Dive into structured problem-solving, data-backed decisions, and strategic thinking to tackle complex business challenges across industries.',
    image: Consult,
    bgColor: 'bg-[#736146]',
    bottomGradient: 'bg-gradient-to-b from-[#736146]/30 via-[#635437] to-[#53472d]',
    textCol: 'text-gray-200',
    navCol: 'text-[#736146]',
    strokeColor: '#736146',
    href: '/profiles/non-tech/Consult',
    id: 0
  },
  {
    name: 'Finance',
    description: 'A deep dive into financial systems, market dynamics, and analytical decision-making — ideal for those curious about how capital drives business.',
    image: Finance,
    bgColor: 'bg-[#3e413c]',
    bottomGradient: 'bg-gradient-to-b from-gray-300/30 via-gray-400 to-gray-500',
    textCol: 'text-gray-200',
    navCol: 'text-[#4d8300]',
    strokeColor: '#4d8300',
    href: '/profiles/non-tech/finance',
    id: 1
  },
  {
    name: 'Product',
    description: 'Explore how data, design, and user insights come together to build products that solve real-world problems and scale with impact.',
    image: Product,
    bgColor: 'bg-[#e5cdb1]',
    bottomGradient: 'bg-gradient-to-t from-brown-500 via-brown-400 to-brown-300',
    textCol: 'text-gray-200',
    navCol: 'text-[#e5cdb1]',
    strokeColor: '#e5cdb1',
    href: '/profiles/non-tech/Product',
    id: 2
  },
]