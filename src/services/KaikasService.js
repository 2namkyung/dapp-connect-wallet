export default class KaikasService{
    static async connect(){
        const klaytn = window.klaytn
        const isUnlocked = await klaytn.publicConfigStore.getState().isUnlocked

        const accounts = await klaytn.enable()
        const address = accounts[0]
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