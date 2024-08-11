import { Link } from "react-router-dom";
function TeamCard({ team: { name, designation, img } }) {
	return (
		<div className="col-xl-2 col-md-6">
			<div className="aximo-team-wrap">
				<div className="aximo-team-thumb">
					<img src={img} alt={name} />
				</div>
				<div className="aximo-team-data">
					<Link to="/single-team">
						<h3>{name}</h3>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default TeamCard;
