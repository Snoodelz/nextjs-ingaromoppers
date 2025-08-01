import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function Navbar() {
	useEffect(() => {
		themeChange(false);
	}, []);

	// We define the years here to avoid repeating the list
	const travelYears = [
		2015,
	];

	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex="0" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex="0"
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<Link href="/songs">
								<a>Sånger</a>
							</Link>
						</li>
						
						{/* Mobile dropdown menu for travels */}
						<li tabIndex="0">
							<a className="justify-between">
								Våra resor
								<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
							</a>
							<ul className="p-2 bg-base-100 shadow">
								{travelYears.map((year) => (
									<li key={year}>
										<Link href={`/resor/${year}`}><a>{year}</a></Link>
									</li>
								))}
							</ul>
						</li>

						<li>
							<select
								data-choose-theme
								className="select select-accent w-full max-w-xs"
							>
								<option value="light">Light</option>
								<option value="dark">Dark</option>
								<option value="cyberpunk">Cyberpunk</option>
							</select>
						</li>
					</ul>
				</div>
				<Link href="/">
					<a className="btn btn-ghost normal-case text-xl">Ingarö Moppers</a>
				</Link>
			</div>
			<div className="navbar-end hidden lg:flex">
				<ul className="menu menu-horizontal p-0">
					<li>
						<Link href="/songs">
							<a>Sånger</a>
						</Link>
					</li>

					{/* Desktop dropdown menu for travels */}
					<li tabIndex="0">
						<a>
							Våra resor
							<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
						</a>
						<ul className="p-2 bg-base-100 shadow-lg rounded-box">
							{travelYears.map((year) => (
								<li key={year}>
									<Link href={`/resor/${year}`}><a>{year}</a></Link>
								</li>
							))}
						</ul>
					</li>

					<li>
						<select data-choose-theme className="select pt-2.5">
							<option value="light">Light</option>
							<option value="dark">Dark</option>
							<option value="cyberpunk">Cyberpunk</option>
						</select>
					</li>
				</ul>
			</div>
		</div>
	);
}