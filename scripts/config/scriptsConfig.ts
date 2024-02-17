import { Config } from '../types';

const config: Config = {
    networks:{
        localhost: {
            deploy: [
                {
                    fqn_contractName: "ExampleERC404",
                    args: {args:["Example404", "404",18, 1000000, "SIGNER[0]","SIGNER[0]"]},
                },   
            ],
            initialize: [],
            verify: [],
        },
        sepolia: {
            deploy: [
                {
                    fqn_contractName: "ExampleERC404",
                    args: {args:["Example404", "404",18, 1000000, "SIGNER[0]","SIGNER[0]"]},
                },   
            ],
            initialize: [],
            verify: ['ALL'],
        }
    }
};

export default config;