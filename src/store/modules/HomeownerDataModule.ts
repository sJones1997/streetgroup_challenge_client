import Homeowner from "@/interfaces/HomeownerDataInterfaces/Homeowner";
import HomeownerDataState from "@/interfaces/HomeownerDataInterfaces/HomeownerDataState";


const HomeownerDataModule = {
    state: (): HomeownerDataState => ({
        homeowners: []
    }),
    mutations: {
        setHomeowners(state: HomeownerDataState, homeowners: Homeowner[]){
            state.homeowners = homeowners;
        }
    },
    getters: {
        getHomeowners(state: HomeownerDataState){
            return state.homeowners;
        }
    }
}

export default HomeownerDataModule;