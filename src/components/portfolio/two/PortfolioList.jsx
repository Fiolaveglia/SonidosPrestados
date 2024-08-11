import img1 from "../../../assets/images/instruments/GuitarraClasicaYamaha.jpg";
import img2 from "../../../assets/images/instruments/PianoAcusticoYamaha.png";
import img3 from "../../../assets/images/instruments/ViolinCervini.jpg";
import img4 from "../../../assets/images/instruments/AcordeonMemphis.jpg";
import img5 from "../../../assets/images/instruments/BajoElectricoIbanez.jpg";
import img6 from "../../../assets/images/instruments/BangoMemphis.jpg";
import img7 from "../../../assets/images/instruments/BateriaMapexTornado.jpg";
import img8 from "../../../assets/images/instruments/SaxoMemphis.jpg";
import img9 from "../../../assets/images/instruments/TrompetaLincoln.jpg";
import img10 from "../../../assets/images/instruments/UkeleleMahalo.jpg";

import PortfolioCard from "./PortfolioCard";

const portfolioListData = [
	{
        "id": 1,
        "instrumento": "Guitarra Clasica Yamaha",
        "categoria": "cuerda",
        "img" : img1,
        "detalle": "La mejor guitarra",
        "proveedor": {
            "name": "a",
            "email": "proveedora@gmail.com",
            "cel": "099123456",
            "precioProveedor": 15
        },
        "precioAlquiler": 5,
        "stock": 10
    },
    {
        "id": 2,
        "instrumento": "Piano Acustico Yamaha",
        "categoria": "teclado",
        "img" : img2,
        "detalle": "Piano de gran calidad",
        "proveedor": {
            "name": "b",
            "email": "proveedorb@gmail.com",
            "cel": "099123456",
            "precioProveedor": 10
        },
        "precioAlquiler": 5,
        "stock": 5
    },
    {
        "id": 3,
        "instrumento": "Violin Cervini",
        "categoria": "cuerda",
        "img" : img3,
        "detalle": "Ideal para comenzar a practicar",
        "proveedor": {
            "name": "c",
            "email": "proveedorc@gmail.com",
            "cel": "099123456",
            "precioProveedor": 20
        },
        "precioAlquiler": 5,
        "stock": 7
    },
    {
        "id": 4,
        "instrumento": "Saxo Memphis",
        "categoria": "viento",
        "img" : img8,
        "detalle": "El mejor saxo",
        "proveedor": {
            "name": "c",
            "email": "proveedorc@gmail.com",
            "cel": "099123456",
            "precioProveedor": 30
        },
        "precioAlquiler": 4,
        "stock": 8
    },
    {
        "id": 5,
        "instrumento": "Bongo Memphis",
        "categoria": "percusion",
        "img" : img6,
        "detalle" : "Construído en madera resistente",
        "proveedor": {
            "name": "b",
            "email": "proveedorb@gmail.com",
            "cel": "099123456",
            "precioProveedor": 13
        },
        "precioAlquiler": 6,
        "stock": 5
    },
    {
        "id": 6,
        "instrumento": "Bajo Electrico Ibanez",
        "categoria": "cuerda",
        "img" : img5,
        "detalle" : "Mástil delgado y rápido",
        "proveedor": {
            "name": "d",
            "email": "proveedord@gmail.com",
            "cel": "099123456",
            "precioProveedor": 14
        },
        "precioAlquiler": 4,
        "stock": 7
    },
    {
        "id": 7,
        "instrumento": "Ukelele Mahalo Mh2",
        "categoria": "cuerda",
        "img" : img10,
        "detalle" : "Tamaño soprano",
        "proveedor": {
            "name": "d",
            "email": "proveedord@gmail.com",
            "cel": "099123456",
            "precioProveedor": 10
        },
        "precioAlquiler": 3,
        "stock": 10
    },
    {
        "id": 8,
        "instrumento": "Trompeta Lincoln",
        "categoria": "viento",
        "img" : img9,
        "detalle" : "Tres pistones de acero inoxidable",
        "proveedor": {
            "name": "e",
            "email": "proveedore@gmail.com",
            "cel": "099123456",
            "precioProveedor": 20
        },
        "precioAlquiler": 10,
        "stock": 3
    },
    {
        "id": 9,
        "instrumento": "Bateria Mapex Tornado",
        "categoria": "percusion",
        "img" : img7,
        "detalle" : "Completa: incluye asiento, platillos y atriles",
        "proveedor": {
            "name": "e",
            "email": "proveedore@gmail.com",
            "cel": "099123456",
            "precioProveedor": 50
        },
        "precioAlquiler": 12,
        "stock": 2
    },
    {
        "id": 10,
        "instrumento": "Acordeon Memphis",
        "categoria": "teclado",
        "img" : img4,
        "detalle" : "42 notas, incluye colgante y estuche de madera",
        "proveedor": {
            "name": "e",
            "email": "proveedore@gmail.com",
            "cel": "099123456",
            "precioProveedor": 25
        },
        "precioAlquiler": 7,
        "stock": 3
    },

];
function PortfolioList() {
	return (
		<div className="section aximo-project-page aximo-section-padding5">
			<div className="container">
				<div className="row">
					{portfolioListData.map((portfolio) => (
						<PortfolioCard key={portfolio.id} portfolio={portfolio} />
					))}
				</div>
			</div>
		</div>
	);
}

export default PortfolioList;
