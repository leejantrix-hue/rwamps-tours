// Static data for premium destinations across UAE / Gulf region
// Each destination has the fields needed by DestinationCard + TourDetail page

export const destinations = [
{
  id: 'dubai',
  name: 'DUBAI',
  image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
  pricePerPerson: 2400,
  currency: 'AED',
  rating: 4.8,
  location: 'Downtown Dubai - Near Burj Khalifa',
  country: 'United Arab Emirates',
  tags: ['Luxury', 'Beach', 'Shopping'],
  category: ['Beach Resorts', 'Beautiful Malls', 'Exclusive Hotels'],
  durationDays: 5,
  maxPeople: 8,
  stars: 5,
  description: 'Experience the dazzling heights of Burj Khalifa, the glamour of Palm Jumeirah, and the bustling souks of Old Dubai. A perfect blend of modern marvels and Arabian heritage.',
  highlights: [
    'Burj Khalifa observation deck access',
    'Desert safari with BBQ dinner',
    'Dubai Marina yacht cruise',
    'Old Dubai cultural walking tour',
    'Premium hotel accommodation'
  ],
  coords: [25.2048, 55.2708]
},
{
  id: 'riyadh',
  name: 'RIYADH',
  image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=1200&q=80',
  pricePerPerson: 2100,
  currency: 'AED',
  rating: 4.6,
  location: 'King Abdulaziz Road, Al-Murabba District',
  country: 'Saudi Arabia',
  tags: ['Cultural', 'Desert', 'History'],
  category: ['Sandy Dunes', 'Mountain Views'],
  durationDays: 4,
  maxPeople: 6,
  stars: 4,
  description: 'Discover the heart of Saudi Arabia — historic forts, modern skyscrapers, and the iconic Edge of the World. A cultural deep-dive into Arabian heritage.',
  highlights: [
    'National Museum & Al-Masmak Fort tour',
    'Edge of the World hike',
    'Souq Al-Zal traditional shopping',
    'Kingdom Centre skydeck',
    'Authentic Saudi cuisine experiences'
  ],
  coords: [24.7136, 46.6753]
},
{
  id: 'abu-dhabi',
  name: 'ABU DHABI',
  image: 'https://images.unsplash.com/photo-1542852869-c1ec1c6c5089?w=1200&q=80',
  pricePerPerson: 2900,
  currency: 'AED',
  rating: 4.9,
  location: 'Sheikh Zayed Grand Mosque Area',
  country: 'United Arab Emirates',
  tags: ['Premium', 'Architecture', 'Luxury'],
  category: ['Exclusive Hotels', 'Beautiful Malls'],
  durationDays: 6,
  maxPeople: 10,
  stars: 5,
  description: 'The capital of the UAE offers stunning architecture, the Louvre Abu Dhabi, and the breathtaking Sheikh Zayed Grand Mosque. Luxury at every turn.',
  highlights: [
    'Sheikh Zayed Grand Mosque private tour',
    'Louvre Abu Dhabi guided experience',
    'Ferrari World thrill rides',
    'Yas Marina Circuit tour',
    'Emirates Palace high tea'
  ],
  coords: [24.4539, 54.3773]
},
{
  id: 'sharjah',
  name: 'SHARJAH',
  image: 'https://images.unsplash.com/photo-1583425423320-08fa42aa9667?w=1200&q=80',
  pricePerPerson: 1800,
  currency: 'AED',
  rating: 4.4,
  location: 'Al Qasba Cultural District',
  country: 'United Arab Emirates',
  tags: ['Cultural', 'Art', 'Museum'],
  category: ['Beautiful Malls'],
  durationDays: 3,
  maxPeople: 4,
  stars: 4,
  description: 'The cultural capital of the UAE, home to over 20 museums and the iconic Al Qasba waterfront. Perfect for art lovers and history enthusiasts.',
  highlights: [
    'Sharjah Museum of Islamic Civilization',
    'Al Qasba waterfront stroll',
    'Heart of Sharjah heritage walk',
    'Al Noor Mosque visit',
    'Sharjah Art Foundation tour'
  ],
  coords: [25.3463, 55.4209]
},
{
  id: 'fujairah',
  name: 'FUJAIRAH',
  image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80',
  pricePerPerson: 3200,
  currency: 'AED',
  rating: 4.7,
  location: 'East Coast Mountains & Beaches',
  country: 'United Arab Emirates',
  tags: ['Adventure', 'Beach', 'Mountains'],
  category: ['Beach Resorts', 'Mountain Views', 'Cold Bond Fires'],
  durationDays: 7,
  maxPeople: 12,
  stars: 5,
  description: 'Where the mountains meet the sea. Snorkel coral reefs, hike the Hajar Mountains, and unwind on pristine beaches on the UAE\'s east coast.',
  highlights: [
    'Snoopy Island snorkeling',
    'Hajar Mountains hike',
    'Al Bidyah Mosque (oldest in UAE)',
    'Fujairah Fort tour',
    'Beach resort relaxation'
  ],
  coords: [25.1288, 56.3265]
},
{
  id: 'al-ain',
  name: 'AL AIN',
  image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&q=80',
  pricePerPerson: 1950,
  currency: 'AED',
  rating: 4.5,
  location: 'Oasis City, Garden City Region',
  country: 'United Arab Emirates',
  tags: ['Nature', 'Heritage', 'Family'],
  category: ['Mountain Views', 'Sandy Dunes'],
  durationDays: 4,
  maxPeople: 6,
  stars: 4,
  description: 'The Garden City offers lush oases, Jebel Hafeet mountain, and rich Bedouin heritage. A serene escape from the bustle of the coast.',
  highlights: [
    'Jebel Hafeet mountain drive',
    'Al Ain Oasis UNESCO tour',
    'Al Ain Zoo & safari',
    'Hili Archaeological Park',
    'Camel market visit'
  ],
  coords: [24.2075, 55.7447]
},
{
  id: 'muscat',
  name: 'MUSCAT',
  image: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=1200&q=80',
  pricePerPerson: 2750,
  currency: 'AED',
  rating: 4.8,
  location: 'Oman Coastal Road, Muttrah Area',
  country: 'Oman',
  tags: ['Luxury', 'Coastal', 'Spa'],
  category: ['Beach Resorts', 'Exclusive Hotels'],
  durationDays: 5,
  maxPeople: 8,
  stars: 5,
  description: 'Oman\'s elegant capital with white-washed buildings, the Sultan Qaboos Grand Mosque, and the bustling Mutrah Souq overlooking turquoise waters.',
  highlights: [
    'Sultan Qaboos Grand Mosque',
    'Mutrah Corniche & Souq',
    'Wadi Shab swimming',
    'Royal Opera House Muscat',
    'Beach spa retreat'
  ],
  coords: [23.5859, 58.4059]
},
{
  id: 'doha',
  name: 'DOHA',
  image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=1200&q=80',
  pricePerPerson: 2200,
  currency: 'AED',
  rating: 4.6,
  location: 'West Bay, Pearl District',
  country: 'Qatar',
  tags: ['Modern', 'Shopping', 'Luxury'],
  category: ['Beautiful Malls', 'Exclusive Hotels'],
  durationDays: 4,
  maxPeople: 6,
  stars: 4,
  description: 'A futuristic skyline rising from the Arabian Gulf. Explore the Museum of Islamic Art, Souq Waqif, and the man-made Pearl-Qatar island.',
  highlights: [
    'Museum of Islamic Art tour',
    'Souq Waqif evening walk',
    'The Pearl-Qatar shopping',
    'Desert safari to Inland Sea',
    'Dhow boat cruise'
  ],
  coords: [25.2854, 51.5310]
}
]

export const destinationCategories = [
'All Type',
'Sandy Dunes',
'Cold Bond Fires',
'Exclusive Hotels',
'Beautiful Malls',
'Beach Resorts',
'Mountain Views'
]

export const budgetRanges = [
'AED 1000 - 2500',
'AED 2600 - 5000',
'AED 5000 - 7500',
'AED 7500 - 10000',
'AED 10000 - 15000',
'AED 15000 - 20000'
]

export const destinationCities = [
'Abu Dhabi', 'Dubai', 'Ajman', 'Fujairah', 'Ras Al Khaimah', 'Umm Al Quwain', 'Sharjah'
]
