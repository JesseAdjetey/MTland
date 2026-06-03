"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type AppData = {
  id: string;
  name: string;
  logo: string;
  url: string;
  info: string;
};

const apps: AppData[] = [
  {
    id: "pipeline",
    name: "Pipeline",
    logo: "P",
    url: "https://pipeline.mtapps.live",
    info: "Top to bottom funnel for VCs.",
  },
  {
    id: "followr",
    name: "Followr",
    logo: "F",
    url: "https://followr.mtapps.live",
    info: "Automate your follow-ups and build stronger relationships with your network.",
  },
  {
    id: "dealseek",
    name: "Dealseek",
    logo: "D",
    url: "https://dealseek.mtapps.live",
    info: "Discover, analyze, and secure the best deals in your industry.",
  },
  {
    id: "nodify",
    name: "Nodify",
    logo: "N",
    url: "https://nodify.mtapps.live",
    info: "Leverage the networks of people within your organization.",
  }
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Start fading out after 1.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      // Remove from DOM after fade out transition (0.5s)
      setTimeout(() => setShowPreloader(false), 500);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPreloader && (
        <div className={`preloader ${!loading ? 'fade-out' : ''}`}>
          <div className="preloader-logo-container">
            <Image 
              src="/mt-logo.png" 
              alt="Microtraction Logo" 
              width={160} 
              height={160} 
              className="pulse-animation"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      )}

      <main className={`hub-container ${!showPreloader ? 'content-fade-in' : ''}`} style={{ opacity: showPreloader ? 0 : 1 }}>
        <header className="hero-section">
          <Image 
            src="/mt-logo.png" 
            alt="Microtraction Logo" 
            width={80} 
            height={60} 
            className="hero-logo"
            style={{ objectFit: 'contain' }}
            priority
          />
          <h1 className="typography-title">mtapps</h1>
          <p className="typography-subtitle">by Microtraction</p>
        </header>

        <section className="apps-grid">
          {apps.map((app) => (
            <a
              key={app.id}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="app-card"
            >
              <div className="app-logo">{app.logo}</div>
              <h2 className="app-name">{app.name}</h2>
              <p className="app-info">{app.info}</p>
            </a>
          ))}
        </section>
      </main>
    </>
  );
}
