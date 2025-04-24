import React from 'react';
import { Calendar, TrendingUp, Users2 } from 'lucide-react';
import './Features.css';

export default function Features() {
    const features = [
    {
      icon: <Calendar className="feature-icon" />,
      title: "Latest Releases",
      description: "Stay updated with the newest K-pop releases and comebacks"
    },
    {
      icon: <TrendingUp className="feature-icon" />,
      title: "Charts & Rankings",
      description: "Track your favorite artists' performance on music charts"
    },
    {
      icon: <Users2 className="feature-icon" />,
      title: "Fan Community",
      description: "Connect with other K-pop fans worldwide"
    }
  ];

  return (
    <section className="features-section container">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="animate-float">
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};