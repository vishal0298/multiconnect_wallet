import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import TokenBalances from './components/TokenBalence';

function App() {
  const { isConnected } = useAccount();
  return (
    <>
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
      }}
    >
      <ConnectButton />

     
    </div>
    <div>
       {isConnected ? <TokenBalances /> : <p>Please connect your wallet to view balances.</p>}
    </div>
    </>
  );
}

export default App;