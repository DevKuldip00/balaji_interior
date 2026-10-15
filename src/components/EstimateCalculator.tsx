import { useState, type FC } from 'react';
import { MessageSquare, Check, Sparkles } from 'lucide-react';
import { createWhatsAppUrl } from '../data/companyInfo';

export const EstimateCalculator: FC = () => {
  const [propertyType, setPropertyType] = useState('3 BHK Apartment');
  const [selectedScopes, setSelectedScopes] = useState<string[]>([
    'Modular Kitchen',
    'Living Room & Media Unit',
    'False Ceiling & Lighting',
  ]);
  const [designStyle, setDesignStyle] = useState('Modern Contemporary with Fluted Wood');
  const [locationArea, setLocationArea] = useState('Anand (Near Grid Road / Town)');

  const propertyOptions = [
    '2 BHK Apartment',
    '3 BHK Apartment',
    '4 BHK / Penthouse',
    'Bungalow / Independent Villa',
    'Tenement / Row House',
    'Commercial Studio / Office',
  ];

  const scopeOptions = [
    'Modular Kitchen',
    'Living Room & Media Unit',
    'False Ceiling & Lighting',
    'Custom Wardrobes & Bed Units',
    'Decorative Wall Panels / Moulding',
    'Under-Stair Zen Courtyard',
    'Dining & Breakfast Bar',
  ];

  const styleOptions = [
    'Modern Contemporary with Fluted Wood',
    'Neo-Classical Wall Moulding & Boiserie',
    'Minimalist Ivory & Warm Bronze Accents',
    'Warm Teak & Traditional Heritage Touches',
  ];

  const locationOptions = [
    'Anand City (Grid Road / Station / 100ft Road)',
    'Vallabh Vidyanagar',
    'Karamsad',
    'Borsad / Mogar / Vassad',
    'Nadiad / Other Central Gujarat',
  ];

  const toggleScope = (scope: string) => {
    if (selectedScopes.includes(scope)) {
      if (selectedScopes.length > 1) {
        setSelectedScopes(selectedScopes.filter((s) => s !== scope));
      }
    } else {
      setSelectedScopes([...selectedScopes, scope]);
    }
  };

  const handleGenerateWhatsApp = () => {
    const message = `Hello Balaji Interior Designer,
I would like to discuss an interior project:
- Property: ${propertyType}
- Location: ${locationArea}
- Scope Needed: ${selectedScopes.join(', ')}
- Preferred Style: ${designStyle}

Could we schedule a consultation at your Saral Chandra Complex studio or on-site in Anand?`;

    window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section py-16 bg-[#1B1C1A] text-white border-y border-stone-800">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans uppercase tracking-widest text-amber-200 bg-stone-900 border border-stone-800 mb-3"
            >
              <Sparkles size={12} className="text-amber-400" />
              <span>Interactive Consultation Helper</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-3">
              Define Your Project Scope.{' '}
              <span className="italic font-light text-amber-100">Direct to WhatsApp.</span>
            </h2>
            <p className="text-sm text-stone-300 font-sans max-w-xl mx-auto">
              Select your property type, areas of focus, and style preferences. We will format your
              requirements into an instant WhatsApp draft to start our conversation.
            </p>
          </div>

          {/* Interactive Card */}
          <div className="bg-[#232421] border border-stone-700/80 rounded-sm p-6 sm:p-10 shadow-2xl">
            {/* Step 1: Property Type */}
            <div className="mb-8">
              <label className="text-xs uppercase tracking-widest text-stone-400 font-sans font-semibold block mb-3">
                1. Select Property Configuration:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {propertyOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setPropertyType(opt)}
                    className={`p-3 text-xs sm:text-sm font-sans rounded-sm text-left transition-all cursor-pointer ${
                      propertyType === opt
                        ? 'bg-amber-100 text-stone-950 font-semibold shadow-md'
                        : 'bg-stone-900/90 text-stone-300 border border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scope Needed */}
            <div className="mb-8">
              <label className="text-xs uppercase tracking-widest text-stone-400 font-sans font-semibold block mb-3">
                2. Select Scope & Interior Elements (Multi-select):
              </label>
              <div className="flex flex-wrap gap-2">
                {scopeOptions.map((scope) => {
                  const isChecked = selectedScopes.includes(scope);
                  return (
                    <button
                      key={scope}
                      type="button"
                      onClick={() => toggleScope(scope)}
                      className={`px-3.5 py-2 text-xs font-sans rounded-sm transition-all cursor-pointer flex items-center gap-2 ${
                        isChecked
                          ? 'bg-amber-700/60 text-amber-100 border border-amber-500/70 font-medium'
                          : 'bg-stone-900/80 text-stone-400 border border-stone-800 hover:text-stone-200'
                      }`}
                    >
                      <div
                        className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center text-[10px] ${
                          isChecked ? 'bg-amber-400 text-stone-950' : 'border border-stone-600'
                        }`}
                      >
                        {isChecked && <Check size={11} strokeWidth={3} />}
                      </div>
                      <span>{scope}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Design Style & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="text-xs uppercase tracking-widest text-stone-400 font-sans font-semibold block mb-2">
                  3. Preferred Aesthetic Style:
                </label>
                <select
                  value={designStyle}
                  onChange={(e) => setDesignStyle(e.target.value)}
                  className="w-full p-3 bg-stone-900 border border-stone-700 rounded-sm text-xs sm:text-sm text-stone-200 font-sans outline-none focus:border-amber-400"
                >
                  {styleOptions.map((st) => (
                    <option key={st} value={st} className="bg-stone-900 text-stone-200">
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-stone-400 font-sans font-semibold block mb-2">
                  4. Location Area in Anand Region:
                </label>
                <select
                  value={locationArea}
                  onChange={(e) => setLocationArea(e.target.value)}
                  className="w-full p-3 bg-stone-900 border border-stone-700 rounded-sm text-xs sm:text-sm text-stone-200 font-sans outline-none focus:border-amber-400"
                >
                  {locationOptions.map((loc) => (
                    <option key={loc} value={loc} className="bg-stone-900 text-stone-200">
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Generated Message Preview & WhatsApp Action */}
            <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="text-xs text-stone-400 font-sans">
                <span className="text-stone-300 font-medium block">
                  Ready to send to +91 83209 77447
                </span>
                <span>Opens directly in WhatsApp with your structured choices.</span>
              </div>

              <button
                type="button"
                onClick={handleGenerateWhatsApp}
                className="btn btn-whatsapp text-xs sm:text-sm py-3 px-6 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <MessageSquare size={16} />
                <span>Discuss This Scope on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
