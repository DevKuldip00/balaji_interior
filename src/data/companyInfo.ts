export const COMPANY_INFO = {
  name: 'Balaji Interior Designer',
  shortName: 'Balaji Interiors',
  tagline: 'Beautiful spaces. Designed around you.',
  phoneDisplay: '+91 83209 77447',
  phoneRaw: '+918320977447',
  whatsappNumber: '918320977447',
  email: 'balajiinteriors.anand@gmail.com', // Demo contact email
  address: {
    line1: '1st Floor, Saral Chandra Complex, Balaji Interiors',
    line2: 'Grid Road, opposite Vishal Bakery',
    city: 'Anand',
    state: 'Gujarat',
    pincode: '388001',
    country: 'India',
    full: '1st Floor, Saral Chandra Complex, Balaji Interiors, Grid Road, opposite Vishal Bakery, Anand, Gujarat 388001, India',
  },
  serviceAreas: [
    'Anand City',
    'Vallabh Vidyanagar',
    'Karamsad',
    'Borsad',
    'Mogar',
    'Nadiad & Nearby Charotar Region',
  ],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Saral+Chandra+Complex+Grid+Road+opposite+Vishal+Bakery+Anand+Gujarat+388001',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=Saral%20Chandra%20Complex%2C%20Grid%20Road%2C%20opposite%20Vishal%20Bakery%2C%20Anand%2C%20Gujarat%20388001&t=&z=15&ie=UTF8&iwloc=&output=embed',
  businessHours: 'Monday – Saturday: 10:00 AM – 8:00 PM (Sunday by Appointment)',
};

export const createWhatsAppUrl = (messageText: string): string => {
  const encoded = encodeURIComponent(messageText);
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`;
};

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hello Balaji Interior Designer, I would like to discuss an interior design project.';
