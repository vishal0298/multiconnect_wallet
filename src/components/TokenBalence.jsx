
import { useAccount, useBalance, useChainId } from 'wagmi';


const USDT_ADDRESSES = {
  1: '0xdAC17F958D2ee523a2206206994597C13D831ec7', 
  137: '0xc2132D05D31c914a87C6611C10748AEb04B58e8Fs', 
  56: '0x55d398326f99059fF775485246999027B3197955', 
};

const USDC_ADDRESSES = {
  1: '0xA0b86991c6218b36c1d19d4a2e9Eb0cE3606eb48', 
  137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', 
  56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', 
};

export default function TokenBalances() {
  const { isConnected, address } = useAccount();
  const  chainID = useChainId();

  const usdtAddress = chainID ? USDT_ADDRESSES[chainID] : undefined;
  const usdcAddress = chainID ? USDC_ADDRESSES[chainID] : undefined;

  const { data: usdtBalance, isLoading: usdtLoading } = useBalance({
    address,
    token: usdtAddress,
    enabled: isConnected && !!usdtAddress,
  });

  const { data: usdcBalance, isLoading: usdcLoading } = useBalance({
    address,
    token: usdcAddress,
    enabled: isConnected && !!usdcAddress,
  });

  if (!isConnected) {
    return <p>Please connect your wallet to view token balances.</p>;
  }

  return (
    <div>
      <h2>Token Balances</h2>
      <p>
        <strong>USDT:</strong>{' '}
        {usdtLoading ? 'Loading...' : `${usdtBalance?.formatted || '0'} USDT`}
      </p>
      <p>
        <strong>USDC:</strong>{' '}
        {usdcLoading ? 'Loading...' : `${usdcBalance?.formatted || '0'} USDC`}
      </p>
    </div>
  );
}