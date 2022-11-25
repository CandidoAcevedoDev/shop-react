import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import flag from "../../assets/img/flag.png";
import "./Navbar.scss";

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='wrapper navbar__container'>
				<div className='navbar__left'>
					<div className='navbar__image'>
						<img src={flag} alt='Cambiar idioma' />
						<KeyboardArrowDownIcon />
					</div>
					<div className='navbar__coin'>
						<span>USD</span>
						<KeyboardArrowDownIcon />
					</div>
					<div className='navbar__menu'>
						<Link to='/products/1'>Women</Link>
						<Link to='/products/2'>Men</Link>
						<Link to='/products/3'>Children</Link>
					</div>
				</div>

				<div className='navbar__center'>
					<Link to='/'>LELESTORE</Link>
				</div>

				<div className='navbar__right'>
					<div className='navbar__menu'>
						<Link to='/'>HomePage</Link>
						<Link to='/'>About</Link>
						<Link to='/'>Contact</Link>
						<Link to='/'>Store</Link>
					</div>
					<div className='navbar__icons'>
						<SearchIcon />
						<PersonOutlineOutlinedIcon />
						<FavoriteBorderOutlinedIcon />
						<div className='card__icon'>
							<ShoppingCartOutlinedIcon />
							<span className='card__icon--span'>0</span>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
