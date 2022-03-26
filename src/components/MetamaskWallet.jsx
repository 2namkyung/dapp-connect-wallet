import { StyledWallet, StyledWalletInfo } from "./Wallet.common";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { lock, login as metamaskLogin } from "../redux/modules/metamask";

export default function MetamaskWallet() {

    const dispatch = useDispatch()
    const address = useSelector((state) => state.metamask.address)
    const network = useSelector((state) => state.metamask.network)
    const isUnlocked = useSelector((state) => state.metamask.isUnlocked)

    const click = async () => {
        if (!isUnlocked) {
            await window.ethereum.request({ method: 'eth_requestAccounts' })
        }

        dispatch(metamaskLogin())
    }

    useEffect(() => {
        dispatch(metamaskLogin())
    }, [dispatch])

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts) => {

                if(accounts.length===0){
                    dispatch(lock())
                    return
                }

                dispatch(metamaskLogin())
            })
        }
    }, [dispatch])

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('chainChanged', () => {
                dispatch(metamaskLogin())
            })
        }
    }, [dispatch])

    return (
        <Col lg={6}>
            <StyledWallet onClick={click}>
                <img src="/img/wallet/1.png" alt="" />
                {
                    isUnlocked ?
                        <span>
                            Connected
                        </span> :
                        <span>
                            Kaikas
                        </span>
                }
            </StyledWallet>
            <StyledWalletInfo>
                <div>
                    {address}
                </div>
                <div>
                    {network}
                </div>
            </StyledWalletInfo>
        </Col>
    )
}