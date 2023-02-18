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

export default function Home({ animals }) {
	return (
		<div>
			<Navbar />

			<main className=" max-w-4xl mx-auto">
				<Image
					src={logo}
					objectPosition="center top"
					alt="Moppers logo"
					layout="intrinsic"
				/>
				<em>We are moppers</em>
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
