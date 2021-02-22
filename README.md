# ovr-subgraph

OVR subgraph

#### Running Instructions (local)

First of all, please make sure that you have the `ovrland` contract deployed to local network.
Replace the `ovrlandAddress` field of the `config/mainnet.json` file with the actual address on your local network.
Then run the following:

```
yarn
yarn prepare:mainnet
yarn codegen
yarn create-local
yarn deploy-local
```
