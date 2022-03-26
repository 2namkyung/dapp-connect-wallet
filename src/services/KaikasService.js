export default class KaikasService{
    static async connect(){
        const klaytn = window.klaytn
        const isUnlocked = await klaytn.publicConfigStore.getState().isUnlocked
        const address = klaytn.selectedAddress
        const network = klaytn.networkVersion

        if(!klaytn || !isUnlocked){
            return {
                address:'',
                isUnlocked:false,
                network:0,
                klaytn:undefined
            }
        }

        return {
            address,
            isUnlocked,
            network,
            klaytn
        }
    }
}