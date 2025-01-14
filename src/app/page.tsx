"use client";
import { ThirdwebProvider, ConnectButton, darkTheme } from "thirdweb/react";
import { client } from "./components/client";
import { createWallet, walletConnect } from "thirdweb/wallets";
import { baseSepolia, defineChain } from "thirdweb/chains";

export default function Home() {
  const wallets = [
    createWallet("com.coinbase.wallet"),
    walletConnect(),
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <ThirdwebProvider>
        <ConnectButton
          client={client}
          wallets={wallets}
          accountAbstraction={{
            chain: defineChain(baseSepolia),
            gasless: true,
          }}
          appMetadata={{
            name: "PWR2TP",
            url: "https://members.pwr2tp.mx",
          }}
          theme={darkTheme({
            colors: {
              accentText: "#33ff5c",
              accentButtonBg: "#2b9140",
              modalBg: "#000000",
              borderColor: "#fb00ff",
              separatorLine: "#fb00ff",
              danger: "#ff2a00",
              primaryText: "#e2dfe7",
              primaryButtonText: "#ede8ed",
              primaryButtonBg: "#ff00bb",
              secondaryButtonBg: "#000000",
              secondaryIconHoverColor: "#359c46",
              secondaryIconColor: "#ffdd00",
              secondaryIconHoverBg: "#00fa53",
              skeletonBg: "#f312d5",
              accentButtonText: "#ffffff",
              secondaryButtonText: "#f2f2f2",
              secondaryButtonHoverBg: "#729773",
              selectedTextColor: "#e4e5e7",
            },
          })}
          connectButton={{ label: "start" }}
          connectModal={{
            size: "wide",
            title: "connect",
            titleIcon:
              "https://raw.githubusercontent.com/sunshinevendetta/pwrbeta/main/public/images/client/01.gif",
            welcomeScreen: {
              title: "tutorial",
              img: {
                src: "https://raw.githubusercontent.com/sunshinevendetta/pwrbeta/main/public/images/client/01.gif",
                width: 150,
                height: 150,
              },
              subtitle:
                "If you don’t have a wallet, choose Coinbase so we create one for you for free // Si no tienes wallet, escoge Coinbase y te creamos una sin costo.",
            },
            termsOfServiceUrl: "https://pwr2tp.mx/terms",
            privacyPolicyUrl: "https://pwr2tp.mx/privacy",
          }}
        />
      </ThirdwebProvider>
    </div>
  );
}
