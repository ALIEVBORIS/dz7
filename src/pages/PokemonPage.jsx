import React, { useState, useEffect } from 'react';
import './style.css';

const PokemonPage = () => {
	const [pokemonList, setPokemonList] = useState([]);
	const [selectedPokemon, setSelectedPokemon] = useState(null);
	const [filterType, setFilterType] = useState('');

	useEffect(() => {
		const fakePokemonList = [
			{
				id: 1,
				name: 'Bulbasaur',
				type: 'Grass/Poison',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
			},
			{
				id: 2,
				name: 'Charmander',
				type: 'Fire',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
			},
			{
				id: 3,
				name: 'Squirtle',
				type: 'Water',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
			},
			{
				id: 4,
				name: 'Pikachu',
				type: 'Electric',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
			},
			{
				id: 5,
				name: 'Jigglypuff',
				type: 'Normal/Fairy',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
			},
			{
				id: 6,
				name: 'Geodude',
				type: 'Rock/Ground',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png',
			},
			{
				id: 7,
				name: 'Magikarp',
				type: 'Water',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png',
			},
			{
				id: 8,
				name: 'Eevee',
				type: 'Normal',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
			},
			{
				id: 9,
				name: 'Snorlax',
				type: 'Normal',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
			},
			{
				id: 10,
				name: 'Mewtwo',
				type: 'Psychic',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
			},
			{
				id: 11,
				name: 'Gengar',
				type: 'Ghost/Poison',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
			},
			{
				id: 12,
				name: 'Dragonite',
				type: 'Dragon/Flying',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
			},
			{
				id: 13,
				name: 'Lapras',
				type: 'Water/Ice',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
			},
			{
				id: 14,
				name: 'Arcanine',
				type: 'Fire',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
			},
			{
				id: 15,
				name: 'Alakazam',
				type: 'Psychic',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png',
			},
			{
				id: 16,
				name: 'Venusaur',
				type: 'Grass/Poison',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
			},
			{
				id: 17,
				name: 'Machamp',
				type: 'Fighting',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png',
			},
			{
				id: 18,
				name: 'Gyarados',
				type: 'Water/Flying',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
			},
			{
				id: 19,
				name: 'Golem',
				type: 'Rock/Ground',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png',
			},
			{
				id: 20,
				name: 'Jolteon',
				type: 'Electric',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png',
			},
		];
		setPokemonList(fakePokemonList);
	}, []);

	const handlePokemonClick = pokemon => {
		setSelectedPokemon(pokemon);
	};

	const handleFilterChange = event => {
		setFilterType(event.target.value);
	};

	const filteredPokemonList = filterType
		? pokemonList.filter(pokemon => pokemon.type.includes(filterType))
		: pokemonList;

	return (
		<div className='container'>
			<h1 className='Pokemon'>PokemonPage</h1>
			<div className='filter'>
				<label htmlFor='filter'>Filter by Type:</label>
				<select
					id='filter'
					value={filterType}
					onChange={handleFilterChange}
				>
					<option style={{ fontSize: '30px' }} value=''>
						All
					</option>
					<option style={{ fontSize: '30px' }} value='Grass'>
						Grass
					</option>
					<option style={{ fontSize: '30px' }} value='Fire'>
						Fire
					</option>
					<option style={{ fontSize: '30px' }} value='Water'>
						Water
					</option>
					<option style={{ fontSize: '30px' }} value='Electric'>
						Electric
					</option>
					<option style={{ fontSize: '30px' }} value='Normal'>
						Normal
					</option>
					<option style={{ fontSize: '30px' }} value='Psychic'>
						Psychic
					</option>
					<option style={{ fontSize: '30px' }} value='Rock'>
						Rock
					</option>
					<option style={{ fontSize: '30px' }} value='Ground'>
						Ground
					</option>
					<option style={{ fontSize: '30px' }} value='Dragon'>
						Dragon
					</option>
					{/* Добавьте другие типы здесь */}
				</select>
			</div>
			<ul className='pokemon-list'>
				{filteredPokemonList.map(pokemon => (
					<li
						key={pokemon.id}
						onClick={() => handlePokemonClick(pokemon)}
					>
						{pokemon.name}
					</li>
				))}
			</ul>
			{selectedPokemon && (
				<div className='pokemon-details'>
					<h2>{selectedPokemon.name}</h2>
					<p>Type: {selectedPokemon.type}</p>
					<img src={selectedPokemon.img} alt={selectedPokemon.name} />
				</div>
			)}
		</div>
	);
};

export default PokemonPage;
