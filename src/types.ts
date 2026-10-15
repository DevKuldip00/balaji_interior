export interface ProjectItem {
  id: string;
  title: string;
  category: 'Living Spaces' | 'Kitchen & Dining' | 'Feature Walls' | 'Architectural Details';
  categoryLabel: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  aspectRatio: 'landscape' | 'portrait' | 'wide';
  scope: string[];
  materials: string[];
  lightingStyle: string;
  locationLabel: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  suitedFor: string;
}

export interface ProcessStep {
  number: string;
  name: string;
  tagline: string;
  description: string;
  clientRole: string;
  ourRole: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  projectType: string;
  locationArea: string;
  message: string;
}
