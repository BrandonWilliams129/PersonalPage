import React from 'react';
import Image from 'next/image';

interface ImageSet {
  title: string;
  description: string;
  beforeImages: string[];
  afterImages: string[];
}

export default function RemodelPage() {
  const rooms: ImageSet[] = [
    {
      title: 'Living Room',
      description: 'Complete transformation with modern design and smart lighting',
      beforeImages: [
        '/PersonalPage/images/projects/remodel/Living-room-progress-(1).jpg',
        '/PersonalPage/images/projects/remodel/Living-room-progress-(2).jpg',
        '/PersonalPage/images/projects/remodel/Living-room-progress-(4).jpg',
        '/PersonalPage/images/projects/remodel/Living-room-progress-(5).jpg',
        '/PersonalPage/images/projects/remodel/Living-room-progress-(6).jpg',
        '/PersonalPage/images/projects/remodel/Living-room-progress-(7).jpg',
        '/PersonalPage/images/projects/remodel/Living-room-progress-(8).jpg',
        '/PersonalPage/images/projects/remodel/Living-room-progress-(9).jpg',
        '/PersonalPage/images/projects/remodel/Living-room-progress-(10).jpg',
        '/PersonalPage/images/projects/remodel/Living-room-progress-(11).jpg',
        '/PersonalPage/images/projects/remodel/Living-room-progress-(12).jpg'
      ],
      afterImages: [
        '/PersonalPage/images/projects/remodel/Living-room-finished-(1).jpg',
        '/PersonalPage/images/projects/remodel/Living-room-finished-(2).jpg',
        '/PersonalPage/images/projects/remodel/Living-room-finished-(3).jpg',
        '/PersonalPage/images/projects/remodel/Living-room-finished-(4).jpg'
      ]
    },
    {
      title: 'Bedroom',
      description: 'Modernized space with improved lighting and organization',
      beforeImages: [
        '/PersonalPage/images/projects/remodel/bed-room-progress (1).jpg',
        '/PersonalPage/images/projects/remodel/bed-room-progress (2).jpg',
        '/PersonalPage/images/projects/remodel/bed-room-progress (3).jpg',
        '/PersonalPage/images/projects/remodel/bed-room-progress (4).jpg',
        '/PersonalPage/images/projects/remodel/bed-room-progress (5).jpg',
        '/PersonalPage/images/projects/remodel/bed-room-progress (6).jpg'
      ],
      afterImages: [
        '/PersonalPage/images/projects/remodel/Bed-room_finished-(1).jpg',
        '/PersonalPage/images/projects/remodel/Bed-room_finished-(2).jpg',
        '/PersonalPage/images/projects/remodel/Bed-room_finished-(3).jpg',
        '/PersonalPage/images/projects/remodel/Bed-room_finished-(4).jpg',
        '/PersonalPage/images/projects/remodel/Bed-room_finished-(5).jpg'
      ]
    }
  ];

  const aiOutputs = [
    '/PersonalPage/images/projects/remodel/SD-bedroom-output-(1).png',
    '/PersonalPage/images/projects/remodel/SD-bedroom-output-(2).png',
    '/PersonalPage/images/projects/remodel/SD-bedroom-output-(3).png',
    '/PersonalPage/images/projects/remodel/SD-bedroom-output-(4).png',
    '/PersonalPage/images/projects/remodel/SD-bedroom-output-(5).png',
  ];

  return (
    <div className="container-wrapper py-16">
      <h1 className="section-title mb-8">AI-Guided Condo Remodel</h1>
      
      <div className="prose prose-invert prose-lg mb-12 max-w-none">
        <p>
          This project showcases how AI can transform living spaces. Using Stable Diffusion for design inspiration
          and smart home technology for functionality, I completely renovated my condo with a modern aesthetic
          while incorporating cutting-edge technology.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Design Vision</h2>
        <p className="text-[var(--foreground)]/80 mb-6">
          Before starting the physical renovation, I used Stable Diffusion to visualize different design possibilities.
          These AI-generated concepts helped guide the overall aesthetic and layout decisions.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {aiOutputs.map((src, index) => (
            <div key={index} className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src={src}
                alt={`AI Design Concept ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {rooms.map((room, roomIndex) => (
        <section key={roomIndex} className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{room.title} Transformation</h2>
          <p className="text-[var(--foreground)]/80 mb-6">{room.description}</p>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">The Journey</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {room.beforeImages.map((src, index) => (
                  <div key={index} className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <Image
                      src={src}
                      alt={`${room.title} Progress ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs">
                      Step {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Final Result</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {room.afterImages.map((src, index) => (
                  <div key={index} className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <Image
                      src={src}
                      alt={`${room.title} Final ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Smart Home Integration</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[var(--secondary)] p-6 rounded-lg border border-[var(--primary)] shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Automated Climate Control</h3>
            <p className="text-[var(--foreground)]/80 mb-4">
              Smart thermostat learns from usage patterns and adjusts temperatures automatically.
              While it sometimes gets a bit enthusiastic (too cold in winter, too warm in summer),
              it's continuously learning and adapting to preferences.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--foreground)]/70">
              <li>AI-driven temperature optimization</li>
              <li>Schedule-based adjustments</li>
              <li>Remote control via app</li>
            </ul>
          </div>

          <div className="bg-[var(--secondary)] p-6 rounded-lg border border-[var(--primary)] shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Alexa Integration</h3>
            <p className="text-[var(--foreground)]/80 mb-4">
              Amazon Alexa serves as the central hub for controlling various smart home features.
              Voice commands enable seamless control of the entire living space.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--foreground)]/70">
              <li>Voice-controlled lighting</li>
              <li>Temperature adjustments</li>
              <li>Custom routines and schedules</li>
              <li>Multi-room audio control</li>
            </ul>
          </div>

          <div className="bg-[var(--secondary)] p-6 rounded-lg border border-[var(--primary)] shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Smart Lighting System</h3>
            <p className="text-[var(--foreground)]/80 mb-4">
              Automated lighting system with scheduled routines and scene presets for different
              times of day and activities.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--foreground)]/70">
              <li>Automated schedules</li>
              <li>Custom scene presets</li>
              <li>Motion-activated responses</li>
              <li>Energy usage optimization</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
