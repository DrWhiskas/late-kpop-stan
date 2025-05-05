import React from 'react';
import { Heart, Calendar, Star, Users, Music, Trophy } from 'lucide-react';
import './ArtistCard.css';


interface ArtistCardProps {
	name: string;
	image: string;
	description?: string;
	followers: string;
}

export default function ArtistCard({ name, image, followers }: ArtistCardProps) {

     return (
    <div className="artist-card">
      <div className="artist-card-content">
        <div className="artist-image-container">
          <img src={image} alt={name} className="artist-image" />
          <button className="favorite-button">
            <Heart className="favorite-icon" />
          </button>
        </div>
        <div className="artist-info">
          <div className="artist-header">
            <h3 className="artist-name">{name}</h3>
            <div className="followers-preview">
              <div className="follower-dots">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="follower-dot" />
                ))}
              </div>
              <span className="follower-count">+2.5k</span>
            </div>
          </div>
          
          <div className="stats">
            <div className="stat">
              <Users className="stat-icon" />
              <span className="stat-value">{followers}</span>
            </div>
            <div className="stat">
              <Music className="stat-icon" />
              <span className="stat-value">125</span>
            </div>
            <div className="stat">
              <Trophy className="stat-icon" />
              <span className="stat-value">48</span>
            </div>
          </div>

          <div className="actions">
            <button className="book-button">
              <Calendar className="book-icon" />
              <span>Book</span>
            </button>
            <button className="favorite-action">
              <Star className="favorite-action-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
