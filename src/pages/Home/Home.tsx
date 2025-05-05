import React from 'react';
import Header from '../../components/Header/Header';
import './Home.css';
import Features from '../../components/Features/Features';
import ArtistCard from '../../components/ArtistCard/ArtistCard';

export default function Home() {

    return (
			<section className="home">
				<Header />

				<header className="hero">
					<div className="hero-content">
						<h1 className="hero-title">Book Your K-pop Experience</h1>
						<p className="hero-description">
							Connect with your favorite K-pop artists and secure your spot at
							their next performance.
						</p>
						<div className="hero-buttons">
							<button className="primary-button">Browse Artists</button>
							<button className="secondary-button">View Calendar</button>
						</div>
					</div>
				</header>
				<Features />
				<h2 className="text">Featured Artists</h2>
				<ArtistCard
					name="Stray Kids"
					image="https://k-gen.fr/wp-content/uploads/2025/05/stray-kids-hollow-03-felix.jpg"
					followers='31.6M'
				/>
			</section>
		);
}