import SearchCard from '../components/SearchCard'

const Battle = () => {
	return (
		<section className='flex justify-center'>
			<SearchCard
				title='Player One'
				label='Hero/Vilain'
				inputId='playerOne'
				textButton='Submit'
				onSubmitCallback={() => null}
			/>
			<SearchCard
				title='Player Two'
				label='Hero/Vilain'
				inputId='playerTwo'
				textButton='Submit'
				onSubmitCallback={() => null}
			/>
		</section>
	)
}

export default Battle