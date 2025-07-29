import Head from "next/head";
import Image from "next/image";
import logo from "../img/moppersLogga.png";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Adrian from "../img/Adrian.jpg";
import Albin from "../img/Albin.jpg";
import David from "../img/David.jpg";
import Felix from "../img/Felix.jpg";
import Filip from "../img/Filip.jpg";
import Gustav from "../img/Gustav.jpg";
import Ludwig from "../img/Ludwig.jpg";
import Max from "../img/Max.jpg";
import Nazar from "../img/Nazar.jpg";
import React, { useState, useEffect } from "react";

function Countdown() {
	const calculateTimeLeft = () => {
		// The target date for prague is August 8th of the current year
		const targetDate = new Date(new Date().getFullYear(), 7, 7); // Month is 0-indexed, so 7 is August
		const difference = +targetDate - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	// useState hook to store the time left.
	// It's like a component-level variable that re-renders the component when it changes.
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	// useEffect hook to run the timer.
	// This code runs after the component mounts and updates every second.
	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
		// This cleans up the timer when the component is removed to prevent memory leaks.
		return () => clearTimeout(timer);
	});

	return (
		<div className="text-center">
			<h2 className="text-2xl font-bold mb-2">Prag Countdown! 🍻</h2>
			<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
				<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
					<span className="countdown font-mono text-5xl">
						<span style={{ "--value": timeLeft.days || 0 }}></span>
					</span>
					days
				</div>
				<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
					<span className="countdown font-mono text-5xl">
						<span style={{ "--value": timeLeft.hours || 0 }}></span>
					</span>
					hours
				</div>
				<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
					<span className="countdown font-mono text-5xl">
						<span style={{ "--value": timeLeft.minutes || 0 }}></span>
					</span>
					min
				</div>
				<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
					<span className="countdown font-mono text-5xl">
						<span style={{ "--value": timeLeft.seconds || 0 }}></span>
					</span>
					sec
				</div>
			</div>
		</div>
	);
}

export default function Home({ animals }) {
	return (
		<div>
			<Navbar />

			<main className="max-w-4xl mx-auto p-4">
				<Image
					src={logo}
					objectPosition="center top"
					alt="Moppers logo"
					layout="intrinsic"
				/>

				{/* Wrapper div for positioning avatars and countdown */}
				<div className="flex justify-around items-center mt-8">
					<div>
						<em className="block text-center mb-2">We are moppers</em>
						<div className="avatar-group -space-x-6">
							<Avatar url={Adrian} namn={"Adrian"} />
							<Avatar url={Albin} namn={"Albin"} />
							<Avatar url={David} namn={"David"} />
							<Avatar url={Felix} namn={"Felix"} />
							<Avatar url={Filip} namn={"Filip"} />
							<Avatar url={Gustav} namn={"Gustav"} />
							<Avatar url={Max} namn={"Max"} />
							<Avatar url={Nazar} namn={"Nazar"} />
							<Avatar url={Ludwig} namn={"Ludwig"} />
						</div>
					</div>

					{/* Adding the Countdown component to the page */}
					<Countdown />
				</div>
			</main>
		</div>
	);
}

function Avatar({ url, namn }) {
	return (
		<div className="avatar">
			<div className="w-12 ">
				<Image src={url} alt={namn} />
			</div>
		</div>
	);
}