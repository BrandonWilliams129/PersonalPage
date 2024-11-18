import React from 'react';
import Image from 'next/image';

interface ImageSet {
  before: string;
  after: string;
  description: string;
}

export default function RemodelPage() {
  const rooms: ImageSet[] = [
    {
      before: '/images/projects/remodel/Living-room-progress (1).jpg',
      after: '/images/projects/remodel/Living-room-finished (1).jpg',
      description: 'Living Room Transformation'
    },
    {
      before: '/images/projects/remodel/Berroom-progress (1).jpg',
      after: '/images/projects/remodel/Bedroom_finished (1).jpg',
      description: 'Bedroom Transformation'
    }
  ];

  const aiOutputs = [
    '/images/projects/remodel/SD-bedroom-output (1).png',
    '/images/projects/remodel/SD-bedroom-output (2).png',
    '/images/projects/remodel/SD-bedroom-output (3).png',
    '/images/projects/remodel/SD-bedroom-output (4).png',
    '/images/projects/remodel/SD-bedroom-output (5).png',
  ];

  return (
    <div className="container-wrapper py-16">
      <h1 className="section-title mb-8">AI-Guided Condo Remodel</h1>
      
      <div className="prose prose-invert prose-lg mb-12">
        <p>
          Using AI as my interior designer, I completely transformed my living space. 
          Starting with Stable Diffusion to generate design concepts, I reimagined my condo 
          with a modern grey theme. The project involved everything from floor leveling and 
          wall preparation to installing smart home features.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">AI Design Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiOutputs.map((output, index) => (
            <div key={index} className="relative aspect-video rounded-lg overflow-hidden bg-black">
              <Image
                src={output}
                alt={`AI Design Concept ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <p className="mt-4 text-[var(--foreground)]/80">
          Stable Diffusion helped visualize the potential of the space, generating multiple design concepts
          that guided the renovation process.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Before & After</h2>
        {rooms.map((room, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-xl font-semibold mb-4">{room.description}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                <Image
                  src={room.before}
                  alt="Before"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded">
                  Before
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                <Image
                  src={room.after}
                  alt="After"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded">
                  After
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Project Details</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Improvements Made</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Removed old carpet and leveled floors</li>
              <li>Sanded and painted walls with modern grey theme</li>
              <li>Replaced air registers and electrical covers</li>
              <li>Installed smart thermostat with AI control</li>
              <li>Modernized lighting fixtures</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">AI Integration</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Used Stable Diffusion for design visualization</li>
              <li>AI-powered climate control (though it runs a bit extreme on temperatures! 😅)</li>
              <li>Color palette selection assisted by AI</li>
              <li>Space optimization suggestions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
