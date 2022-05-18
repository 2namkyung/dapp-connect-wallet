import React, { useEffect } from "react";
import { StyledWallet, StyledWalletInfo } from "./Wallet.common";
import { Col } from "react-bootstrap";

import { useRecoilState } from "recoil";
import { kaikasAtom } from "../recoil/wallet/atom";
import KaikasService from "../services/KaikasService";

export default function KaikasWallet() {
  const [kaikas, setKaikas] = useRecoilState(kaikasAtom);

  useEffect(() => {
    (async () => {
      const kasState = await KaikasService.connect();
      setKaikas(kasState);
    })();
  }, [kaikas, setKaikas]);

  const click = async () => {
    if (!kaikas.isUnlocked) {
      await window.klaytn.enable();
    }

    const kasState = await KaikasService.connect();
    setKaikas(kasState);
  };

  return (
    <Col lg={6}>
      <StyledWallet onClick={click}>
        <img src="/img/wallet/2.png" alt="" />
        {kaikas.isUnlocked ? <span>Connected</span> : <span>Kaikas</span>}
      </StyledWallet>
      <StyledWalletInfo>
        <div>{kaikas.address}</div>
        <div>{kaikas.network}</div>
      </StyledWalletInfo>
    </Col>
  );
}
