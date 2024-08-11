import About from "../../components/home-one/about";
import AutoSlider from "../../components/home-one/auto-slider";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import Teams from "../../components/home-one/teams";
import Testimonial from "../../components/home-one/testimonial";
import WhyChooseUs from "../../components/home-one/why-choose-us";
import PortfolioTwoColumn from "../portfolio/PortfolioTwoColumn";
// Teams images
import Cat1Img from "../../assets/images/category/Accesorios.jpg"
import Cat2Img from "../../assets/images/category/Cuerda.jpg";
import Cat3Img from "../../assets/images/category/Percusion.jpg";
import Cat4Img from "../../assets/images/category/Teclado.jpg";
import Cat5Img from "../../assets/images/category/Viento.jpg";



const categoryData = [
	{
		id: 1,
		name: "Accesorios",
		img: Cat1Img,
	},
	{
		id: 2,
		name: "Cuerda",
		img: Cat2Img,
	},
	{
		id: 3,
		name: "Percusión",
		img: Cat3Img,
	},
	{
		id: 4,
		name: "Teclado",
		img: Cat4Img,
	},
	{
		id: 5,
		name: "Viento",
		img: Cat5Img,
	},

];

function HomeOne() {
	return (
		<>
			<Hero />
			<Teams teams={categoryData} />
			<PortfolioTwoColumn/>
			{/* <About />
			<Projects />
			<WhyChooseUs />
			<Testimonial />
			<AutoSlider /> */}
		</>
	);
}

export default HomeOne;
