import { Link } from "react-router-dom";
function HeaderButton() {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<Link className="aximo-default-btn pill aximo-header-btn" to="/">
				Crear Cuenta
			</Link>
			<Link className="aximo-default-btn pill aximo-header-btn" to="/">
				Registrarse
			</Link>

		</div>
	);
}

export default HeaderButton;
