import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { arbitrum, base, bsc, mainnet, optimism, polygon } from 'wagmi/chains';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  rainbowWallet,
  walletConnectWallet,
  trustWallet,
  phantomWallet
} from '@rainbow-me/rainbowkit/wallets';

const connectors = connectorsForWallets(
    [
      {
        groupName: 'Recommended',
        wallets: [rainbowWallet, walletConnectWallet, trustWallet, phantomWallet ],
      },
    ],
    {
      appName: 'Multi-Wallet Connect',
      projectId: 'MULTIWALLET_CONNECT',
    }
  );

export const config = getDefaultConfig({
    connectors,
  appName: 'Multi-Wallet Connect',
  projectId: 'MULTIWALLET_CONNECT',
  chains: [mainnet, bsc, polygon, optimism, arbitrum, base],
});
