import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Home = () => {
	const navigate = useNavigate()
	return (
		<section className='text-center'>
			<h1 className='text-xl font-bold'>Heroes Arena</h1>
			<h2 className='text-lg'>The arena where Yoda can fight Hulk!</h2>
			<Button onClick={() => navigate('/battle')}>Battle</Button>
		</section>
	)
}

export default Home