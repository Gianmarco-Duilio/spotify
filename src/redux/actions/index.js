export const GET_SONGS = "GET_SONGS";
export const GET_SELECTED = "GET_SELECTED";

export const addToSelected = (songSelecteted) => {
  return {
    type: GET_SELECTED,
    payload: songSelecteted,
  };
};

export const getSongs = (searchQuery) => {
  return (dispatch, getState) => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella ricerca delle canzoni");
        }
      })
      .then(({ data }) => {
        console.log("Risultati della ricerca:", data);
        console.log("GETSTATE, SECONDO PARAMETRO DELLA FUNZIONE ASINCRONA", getState());

        dispatch({
          type: GET_SONGS,
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  };
};
