// https://en.bitcoin.it/wiki/List_of_address_prefixes
export interface Network {
  messagePrefix: string;
  bech32: string;
  bip32: Bip32;
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
}

interface Bip32 {
  public: number;
  private: number;
}

export const bitcoin: Network = {
  messagePrefix: '\x1CGroestlCoin Signed Message:\n',
  bech32: 'grs',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x24,
  scriptHash: 0x05,
  wif: 0x80,
};

export const testnet: Network = {
  messagePrefix: '\x1CGroestlCoin Signed Message:\n',
  bech32: 'tgrs',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
