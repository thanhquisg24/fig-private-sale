import { useEffect, useRef } from "react";

import styled from "@emotion/styled";
import { useEthers } from "@usedapp/core";

const StyledIdenticon = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 1.125rem;
`;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Jazzicon = require("@metamask/jazzicon");

export default function Identicon(props: any) {
  const ref = useRef<HTMLDivElement>();
  const { account } = useEthers();

  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = "";
      ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10), 16)));
    }
  }, [account]);

  return <StyledIdenticon ref={ref as any} {...props} />;
}
