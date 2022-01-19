import { NavLink } from 'react-router-dom'

const Navbar = (): JSX.Element => {
	const getClassNames = ({ isActive }: { isActive: boolean }) => {
		if (isActive) return 'text-red-600'
		return ''
	}
	return (
		<header>
			<nav>
				<ul className='flex gap-5 justify-center font-bold py-2'>
					<li><NavLink className={getClassNames} to="/">Home</NavLink></li>
					<li><NavLink className={getClassNames} to="battle">Battle</NavLink></li>
					<li><NavLink className={getClassNames} to="heroes">Heroes</NavLink></li>
					<li><NavLink className={getClassNames} to="search">Search</NavLink></li>
					<li><NavLink className={getClassNames} to="cities">Cities</NavLink></li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar