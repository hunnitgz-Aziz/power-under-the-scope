const CardAPI = {
	cards: [
		{
			id: 1,
			name: 'Colin',
			l_name: 'Pieters',
			link: '/colin',
			image: 'http://placekitten.com/g/64/64',
			fictional_character: "Static Shock",
			occupation: "Photographer",
			age: "24",
			gender: "M",
			username: "colin",
			nextPage: '/specimens/2',
			prevPage: '/specimens/5'
		},
		{
			id: 2,
			name: 'Carlson',
			l_name: 'Sinclair',
			link: '/carlson',
			image: 'http://placekitten.com/g/64/64',
			fictional_character: "Samson",
			occupation: "Musician",
			age: "22",
			gender: "M",
			username: "carlson",
			nextPage: '/specimens/3',
			prevPage: '/specimens/1'
		},
		{
			id: 3,
			name: 'Oskar',
			l_name: 'Sinclair',
			link: '/oskar',
			image: 'http://placekitten.com/g/64/64',
			fictional_character: "Garnet",
			occupation: "Public Speaker/Sex Educator",
			age: "24",
			gender: "F",
			username: "oskar",
			nextPage: '/specimens/4',
			prevPage: '/specimens/2'
		},
		{
			id: 4,
			name: 'Rughda',
			l_name: 'Baldo',
			link: '/rughda',
			image: 'http://placekitten.com/g/64/64',
			fictional_character: "Static Shock",
			occupation: "Cinematographer/Musician",
			age: "24",
			gender: "F",
			username: "rughda",
			nextPage: '/specimens/5',
			prevPage: '/specimens/3'
		},
		{
			id: 5,
			name: 'Zahir',
			l_name: 'Ramos',
			link: '/zahir',
			image: 'http://placekitten.com/g/64/64',
			fictional_character: "Static Shock",
			occupation: "Designer/Musician",
			age: "23",
			gender: "M",
			username: "zahir",
			prevPage: '/specimens/4',
			nextPage: '/specimens/1'
		}
	],

	all: function() {
		return this.cards
	},

	get: function(id) {
		const isCard = c => c.id === id
		return this.cards.find(isCard)
	}
}

export default CardAPI;