import HeroContent from "./HeroContent";
import Search from "./Search"

function HeroSection() {
	return (
		<div className="aximo-hero-section">
			<div className="container position-relative">
				<div className="row">
					<div className="col-lg-12">
						<HeroContent />
					</div>
					<div className="col-lg-12">
						<Search />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
