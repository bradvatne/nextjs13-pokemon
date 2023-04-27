import SearchInput from "./components/SearchInput";
import { store } from "./store";
import { setStartupPokemon } from "./store/searchSlice";
import Providers from "./components/Provider";
import Preloader from "./components/Preloader";

export const Home = async () => {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();
  store.dispatch(setStartupPokemon(data));
  return (
    <div>
      <Preloader pokemons={data} />
      <Providers>
        <SearchInput />
      </Providers>
    </div>
  );
};

export default Home;
