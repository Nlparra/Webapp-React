const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planet: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getPeople: () => {
				fetch("https://swapi.co/api/people")
					.then(res => res.json())
					.then(data => {
						console.log(data.results), setStore({ people: data });
					});
			},
			getPlanets: () => {
				fetch("https://swapi.co/api/planets")
					.then(res => res.json())
					.then(data => {
						console.log(data.results), setStore({ planets: data });
					});
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
