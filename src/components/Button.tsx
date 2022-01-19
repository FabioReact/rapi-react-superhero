type Props = {
	children?: React.ReactNode
	onClick?: () => void
}

const Button = ({ children, onClick }: Props) => {
	return (
		<button onClick={onClick} className='border border-black bg-black text-white py-1 px-5 rounded text-sm hover:text-black hover:bg-white duration-200'>{children}</button>
	)
}

export default Button