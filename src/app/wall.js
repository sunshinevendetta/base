import {
    ThirdwebProvider,
    ConnectButton,
    darkTheme,
  } from "thirdweb/react";
  import { sepolia } from "thirdweb/chains";
  import {
    createWallet,
    walletConnect,
  } from "thirdweb/wallets";
  
  const client = createThirdwebClient({
    clientId: "YOUR_CLIENT_ID",
  });
  
  const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    walletConnect(),
    createWallet("me.rainbow"),
    createWallet("app.phantom"),
  ];
  
  export default function App() {
    return (
      <ThirdwebProvider>
        <ConnectButton
          client={client}
          wallets={wallets}
          accountAbstraction={{
            chain: sepolia,
            factoryAddress: "YOUR_FACTORY_ADDRESS",
            gasless: true,
          }}
          theme={darkTheme({
            colors: {
              accentText: "#33ff5c",
              accentButtonBg: "#33ff5c",
              modalBg: "#000000",
              dropdownBg: "#000000",
              borderColor: "#fb00ff",
              separatorLine: "#fb00ff",
              danger: "#ff2a00",
              primaryText: "#e2dfe7",
              primaryButtonText: "#ede8ed",
              primaryButtonBg: "#ff00bb",
              secondaryButtonBg: "#000000",
              secondaryIconHoverColor: "#00ff33",
              secondaryIconColor: "#ffdd00",
              secondaryIconHoverBg: "#00fa2a",
              skeletonBg: "#f312d5",
            },
          })}
          connectButton={{ label: "start" }}
          connectModal={{
            size: "wide",
            title: "connect",
            titleIcon:
              "https://raw.githubusercontent.com/sunshinevendetta/pwrbeta/main/public/images/client/01.gif",
            welcomeScreen: {
              title: "how to connect?",
              img: {
                src: "https://raw.githubusercontent.com/sunshinevendetta/pwrbeta/main/public/images/client/01.gif",
                width: 150,
                height: 150,
              },
              subtitle:
                "Select an option to connect. If you don’t have a wallet, choose Coinbase, and we will generate one for you.",
            },
            termsOfServiceUrl:
              "https://pwr2tp.mx/terms",
            privacyPolicyUrl:
              "https://pwr2tp.mx/privacy",
          }}
        />
      </ThirdwebProvider>
    );
  }