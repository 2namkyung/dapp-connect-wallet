export default class MetamaskService {
    static async connect() {
        const ethereum = window.ethereum
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
        const address = accounts[0]
        const network = ethereum.networkVersion
        const isUnlocked = ethereum._state.isUnlocked

        if (!ethereum || !isUnlocked) {
            return {
                address: '',
                isUnlocked: false,
                network: 0,
                ethereum: undefined
            }
        }

        return {
            address,
            isUnlocked,
            network,
            ethereum
        }

    }
}