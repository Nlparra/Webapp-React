const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			comic: []
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
				fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${process.env.APIKEY}`)
					.then(res => res.json())
					.then(data => {
						// console.log("yolo", data.data.results),
						setStore({ people: data.data.results });
					})
					.catch(err => console.log(err));
			},
			getComic: () => {
				fetch(`https://gateway.marvel.com:443/v1/public/comics?apikey=${process.env.APIKEY}`)
					.then(res => res.json())
					.then(data => {
						// console.log(data.data.results),
						setStore({ comic: data.data.results });
					})
					.catch(err => console.log(err));
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
