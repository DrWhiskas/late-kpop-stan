import React, { useState } from 'react';
import { Music2, Search, Bell, Menu } from 'lucide-react';
import './Header.css';


export default function Header() {

    const[isMenuOpen, setIsMenuOpen] = useState(false);
    return (
			<nav className="header">
				<div className="container header-container">
					<div className="logo-container">
						<Music2 className="logo-icon" />
						<span className="logo-text">Late Kpop Stan</span>
					</div>

					<div className="nav-menu">
						<div className="search-container">
							<input
								type="text"
								placeholder="Search artists..."
								className="search-input"
							/>
							<Search className="search-icon" />
						</div>

						<button className="notification-button">
							<Bell className="notification-icon" />
							<span className="notification-badge">3</span>
						</button>

						<button className="connect-button">Connect Wallet</button>
					</div>

					<button
						className="menu-button"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<Menu className="menu-icon" />
					</button>
				</div>
				{isMenuOpen && (
					<div className="mobile-menu">
						<div className="mobile-menu-content">
							<div className="search-container">
								<input
									type="text"
									placeholder="Search artists..."
									className="search-input"
								/>
								<Search className="search-icon" />
							</div>
							<button className="connect-button">Connect Wallet</button>
						</div>
					</div>
				)}
			</nav>
		);
}