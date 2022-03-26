import React, { useEffect } from 'react'
import { StyledWallet, StyledWalletInfo } from "./Wallet.common";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { lock, login as kaikasLogin } from '../redux/modules/kaikas'


export default function KaikasWallet() {

    const dispatch = useDispatch()
    const address = useSelector((state) => state.kaikas.address)
    const network = useSelector((state) => state.kaikas.network)
    const isUnlocked = useSelector((state) => state.kaikas.isUnlocked)

    const click = async () => {
        if (!isUnlocked) {
            await window.klaytn.enable()
        }

        dispatch(kaikasLogin())
    }

    useEffect(()=>{
        dispatch(kaikasLogin())
    }, [dispatch])

    useEffect(() => {
        if (window.klaytn) {
            window.klaytn.on('accountsChanged', (accounts) => {
                dispatch(kaikasLogin())
            })
        }

    }, [dispatch])

    useEffect(() => {
        if (window.klaytn) {
            window.klaytn.on('networkChanged', () => {
                dispatch(kaikasLogin())
            })
        }
    }, [dispatch])

    useEffect(() => {
        const klaytn = window.klaytn
        if (klaytn) {
            klaytn.publicConfigStore.subscribe(() => {
                const state = klaytn.publicConfigStore.getState()
                if (!state.isUnlocked) {
                    dispatch(lock())
                }

                if (state.isUnlocked) {
                    dispatch(kaikasLogin())
                }
            })
        }
    }, [dispatch])

    return (
        <Col lg={6}>
            <StyledWallet onClick={click}>
                <img src="/img/wallet/2.png" alt="" />
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