import {
  Headphones, MousePointerClick, Plane, DollarSign,
  Map, Users, Clock, Award
} from 'lucide-react'

// === SERVICES (Our Services section on home) ===
export const services = [
  {
    id: 1,
    icon: Headphones,
    title: '24/7 SUPPORT',
    description: 'While using our services, you are assured of 24/7 quality customer support.'
  },
  {
    id: 2,
    icon: MousePointerClick,
    title: 'EASY BOOKING',
    description: 'Our booking and check out process is easy and aimed at fitting your unique needs and concerns.'
  },
  {
    id: 3,
    icon: Plane,
    title: 'FREE TRANSPORT',
    description: 'Our tour services include a quality and comfortable transport medium ranging from flights to luxury cars.'
  },
  {
    id: 4,
    icon: DollarSign,
    title: 'ALL CURRENCIES SUPPORTED',
    description: 'We accept all currencies and transaction rates are pegged on global forex prices.'
  }
]

// === WHY CHOOSE US (4 numbered steps) ===
export const whyChooseUs = [
  {
    number: '01',
    icon: Map,
    title: 'Travel Plan',
    description: 'Personalized itineraries designed to match your unique travel style and preferences.'
  },
  {
    number: '02',
    icon: Users,
    title: 'Expert Guides',
    description: 'Knowledgeable local guides to enhance your experience with insider tips and stories.'
  },
  {
    number: '03',
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance to ensure your journey is smooth and worry-free.'
  },
  {
    number: '04',
    icon: Award,
    title: 'Best Value',
    description: 'Premium experiences at competitive prices with no hidden fees or charges.'
  }
]

// === TESTIMONIALS ===
export const testimonials = [
  {
    id: 1,
    name: 'Khalif Muhammad',
    role: 'CEO, XYZ Company',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5.0,
    quote: 'They took care of everything from transport to accommodations, making the whole trip completely stress-free and thoroughly enjoyable. The attention to detail was exceptional!'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Marketing Director, TechCorp',
    avatar: 'https://i.pravatar.cc/150?img=47',
    rating: 5.0,
    quote: 'An unforgettable experience! The tour guides were knowledgeable, the itinerary was perfectly planned, and every moment felt special. Highly recommended for anyone seeking adventure.'
  },
  {
    id: 3,
    name: 'Robert Chen',
    role: 'Senior Engineer, Innovate Labs',
    avatar: 'https://i.pravatar.cc/150?img=33',
    rating: 5.0,
    quote: "The best travel experience of my life. From booking to departure, everything was seamless. The team's professionalism and dedication made our family vacation perfect."
  },
  {
    id: 4,
    name: 'Aisha Al-Mansouri',
    role: 'Founder, Sandstone Studio',
    avatar: 'https://i.pravatar.cc/150?img=49',
    rating: 5.0,
    quote: 'Rwamps Tours turned our anniversary into a dream. The desert experience, the hotel, the little surprises — every detail was thought through. Truly exceptional service.'
  },
  {
    id: 5,
    name: 'James O\'Connor',
    role: 'Travel Blogger',
    avatar: 'https://i.pravatar.cc/150?img=15',
    rating: 5.0,
    quote: 'I\'ve travelled with many agencies but Rwamps stands apart. Honest pricing, world-class guides, and a team that genuinely cares about your experience.'
  }
]

// === POPULAR DESTINATIONS (for Home map section) ===
export const popularDestinations = [
  {
    id: 'burj-khalifa',
    name: 'BURJ KHALIFA',
    type: 'attraction',
    rating: 4.8,
    address: '1 Sheikh Mohammed bin Rashid Blvd, Downtown Dubai',
    price: 'AED 169+',
    description: "The world's tallest building with breathtaking views of Dubai from its observation decks.",
    tags: ['Observation Deck', 'Restaurants', 'Fountain Show'],
    image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8f5?w=800&q=80',
    coords: [25.1972, 55.2744]
  },
  {
    id: 'atlantis-the-palm',
    name: 'ATLANTIS THE PALM',
    type: 'hotel',
    rating: 4.7,
    address: 'Crescent Rd, Palm Jumeirah, Dubai',
    price: 'AED 1200+',
    description: 'Iconic ocean-themed resort on Palm Jumeirah with waterpark, aquarium, and signature dining.',
    tags: ['Waterpark', 'Aquarium', 'Dining'],
    image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8f5?w=800&q=80',
    coords: [25.1308, 55.1175]
  },
  {
    id: 'al-fanar',
    name: 'AL FANAR RESTAURANT',
    type: 'restaurant',
    rating: 4.5,
    address: 'The Dubai Mall, Financial Centre Rd, Dubai',
    price: 'AED 150+',
    description: 'Authentic Emirati cuisine in a nostalgic 1960s Dubai setting.',
    tags: ['Emirati Cuisine', 'Heritage', 'Mall'],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    coords: [25.1972, 55.2796]
  },
  {
    id: 'jumeirah-beach',
    name: 'JUMEIRAH BEACH',
    type: 'beach',
    rating: 4.6,
    address: 'Jumeirah Road, Dubai',
    price: 'Free',
    description: 'Pristine white-sand public beach with views of Burj Al Arab and turquoise waters.',
    tags: ['Public Beach', 'Burj Al Arab View', 'Swimming'],
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
    coords: [25.2048, 55.2424]
  }
]

export const popularDestinationCategories = ['Hotels', 'Attractions', 'Restaurants', 'Beaches']

// === FAQs ===
export const faqs = [
  {
    id: 1,
    category: 'Booking',
    question: 'HOW DO I BOOK A TOUR PACKAGE?',
    answer: 'You can book directly through our website, contact our support team, or visit our physical offices. Online booking is available 24/7 with instant confirmation.',
    updated: '2 days ago',
    helpful: 95
  },
  {
    id: 2,
    category: 'Payment',
    question: 'WHAT PAYMENT METHODS DO YOU ACCEPT?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and cash payments at our offices. All transactions are secure and encrypted.',
    updated: '2 days ago',
    helpful: 95
  },
  {
    id: 3,
    category: 'Booking',
    question: 'CAN I CANCEL OR MODIFY MY BOOKING?',
    answer: 'Yes, you can cancel or modify your booking up to 48 hours before departure. Some premium packages may have different cancellation policies which will be clearly stated during booking.',
    updated: '2 days ago',
    helpful: 95
  },
  {
    id: 4,
    category: 'Travel',
    question: 'DO YOU PROVIDE TRAVEL INSURANCE?',
    answer: 'We offer comprehensive travel insurance as an add-on during booking. It covers medical emergencies, trip cancellations, lost luggage, and other travel-related incidents.',
    updated: '2 days ago',
    helpful: 95
  },
  {
    id: 5,
    category: 'Travel',
    question: 'WHAT DOCUMENTS DO I NEED FOR INTERNATIONAL TOURS?',
    answer: "Typically you'll need a valid passport with at least 6 months validity, visa (if required), travel insurance, and vaccination certificates. Our team will provide a detailed checklist based on your destination.",
    updated: '2 days ago',
    helpful: 95
  },
  {
    id: 6,
    category: 'General',
    question: 'ARE FLIGHTS INCLUDED IN THE TOUR PACKAGES?',
    answer: "Most of our international packages include return flights. Domestic tours usually include transport but not flights. Package details clearly specify what's included. You can also opt for land-only packages.",
    updated: '2 days ago',
    helpful: 95
  },
  {
    id: 7,
    category: 'Payment',
    question: 'HOW DO GROUP DISCOUNTS WORK?',
    answer: 'We offer special rates for groups of 6 or more people. Discounts range from 10-25% depending on group size and package. Contact our group booking department for customized quotes.',
    updated: '2 days ago',
    helpful: 95
  },
  {
    id: 8,
    category: 'Travel',
    question: 'WHAT HAPPENS IN CASE OF BAD WEATHER?',
    answer: 'We monitor weather conditions closely. If activities are cancelled due to bad weather, we offer alternative experiences or refunds for the affected portions. Safety is our top priority.',
    updated: '2 days ago',
    helpful: 95
  }
]

export const faqCategories = ['All Questions', 'Booking', 'Payment', 'Travel', 'General']

// === COMPANY / CONTACT ===
export const companyInfo = {
  name: 'Rwamps Tours',
  tagline: 'Discover Arabian Wonders',
  address: 'Dubai Marina, Al Marsa Street, Building 12, Floor 8, Dubai, United Arab Emirates',
  shortAddress: 'Dubai Marina, Dubai, UAE',
  phone: '+971 4 123 4567',
  email: 'contact@rwampstours.com',
  supportEmail: 'support@rwampstours.com',
  hours: 'Sunday - Thursday, 8:00 AM - 8:00 PM GST',
  socials: {
    facebook: 'https://facebook.com/rwampstours',
    instagram: 'https://instagram.com/rwampstours',
    twitter: 'https://twitter.com/rwampstours',
    linkedin: 'https://linkedin.com/company/rwampstours',
    youtube: 'https://youtube.com/@rwampstours'
  }
}

export const stats = {
  customerSatisfaction: 98,
  happyTravelers: '5K+',
  destinations: 150,
  supportAvailability: '24/7'
}

export const contactCountries = [
  'United Arab Emirates','Saudi Arabia','Qatar','Oman','Kuwait','Bahrain',
  'United States','United Kingdom','India','Pakistan','Australia','Canada',
  'Germany','France','Other'
]

export const contactSubjects = [
  'General Inquiry','Booking Assistance','Payment Issue','Tour Modification',
  'Cancellation Request','Group Booking','Corporate Travel','Feedback/Suggestion',
  'Complaint','Partnership'
]
