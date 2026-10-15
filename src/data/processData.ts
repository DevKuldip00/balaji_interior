import type { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    name: 'Discuss',
    tagline: 'Listening to your lifestyle and spatial requirements',
    description:
      'We meet at our studio or on-site to understand your lifestyle, functional priorities, family routines, aesthetic tastes, and approximate scope. No assumptions—just attentive listening to what you need your home to do.',
    clientRole: 'Share your space dimensions, daily habits, reference styles, and functional must-haves.',
    ourRole: 'Analyze room orientations, spatial opportunities, circulation flow, and establish design parameters.',
  },
  {
    number: '02',
    name: 'Plan',
    tagline: 'Exploring layouts, materials, and design direction',
    description:
      'We formulate 2D spatial layouts, traffic flow maps, and material palettes. We explore options for modular kitchen zones, storage placement, ceiling elevations, and furniture ergonomics before any structural work begins.',
    clientRole: 'Review space configurations, give honest feedback on layouts, and approve the directional concept.',
    ourRole: 'Produce clear layout drawings, material sample swatches, and lighting zoning proposals.',
  },
  {
    number: '03',
    name: 'Design',
    tagline: 'Refining details, custom furniture, and exact finishes',
    description:
      'Every millimeter is resolved. We finalize exact laminate codes, hardware specifications, bespoke furniture dimensions, electrical conduit locations, false ceiling levels, and decorative wall treatments.',
    clientRole: 'Confirm final color schemes, hardware selections, and detailed interior specifications.',
    ourRole: 'Generate detailed fabrication drawings, electrical schematics, and clear procurement schedules.',
  },
  {
    number: '04',
    name: 'Execute',
    tagline: 'Coordinating on-ground carpentry, finishes, and installation',
    description:
      'We oversee the agreed scope of carpentry, civil alterations, electrical work, false ceiling erection, painting, and furniture fitting with skilled local craftsmen in Anand.',
    clientRole: 'Attend periodic milestone walk-throughs to view progress as your home takes shape.',
    ourRole: 'Coordinate trades on-site, inspect finish tolerances, manage installation, and ensure clean handover.',
  },
];

export const WHY_US_POINTS = [
  {
    id: 'space-planning',
    title: 'Thoughtful Space Planning',
    description:
      'Every home has distinct structural rhythms. We optimize spatial flow, daylight distribution, and ergonomic movement so your rooms feel spacious, intuitive, and uncluttered.',
    detail: 'Eliminating wasted dead zones and maximizing functional storage without visual heaviness.',
  },
  {
    id: 'tailored-design',
    title: 'Design Tailored to Your Requirements',
    description:
      'We don’t impose a repetitive signature formula. Whether you prefer clean contemporary minimalism, warm wooden finishes, or traditional Indian cultural accents, each plan is drawn around you.',
    detail: 'Customized drawer heights, tailored wardrobe divisions, and purpose-built entertainment walls.',
  },
  {
    id: 'furniture-finishing',
    title: 'Attention to Furniture & Finishing Details',
    description:
      'True luxury lives in the tactile details—seamless edge-banding, flush joinery, aligned wall panel reveals, smooth drawer runners, and durable laminate selections.',
    detail: 'Precision carpentry built to withstand daily use while maintaining its crisp elegance.',
  },
  {
    id: 'materials-lighting',
    title: 'Coordination of Materials, Lighting & Elements',
    description:
      'A great room is a symphony. We coordinate 3000K warm lighting, textures, stone finishes, fabrics, and wall treatments so every element feels like it belongs together.',
    detail: 'Layering ambient coves, focused task illumination, and decorative fixtures into a unified mood.',
  },
  {
    id: 'local-presence',
    title: 'Direct Anand Studio & On-Ground Coordination',
    description:
      'Located conveniently on Grid Road in Anand, we provide hands-on local oversight, accessible communication, and direct trade coordination throughout Anand and surrounding towns.',
    detail: 'Prompt site visits, accessible face-to-face consultations, and accountable local craftsmanship.',
  },
];
