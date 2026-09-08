/*#if _EVM

let supported = ['ethereum', 'bsc', 'polygon', 'arbitrum', 'avalanche', 'gnosis', 'optimism', 'base', 'basesepolia', 'worldchain']
supported.evm = ['ethereum', 'bsc', 'polygon', 'arbitrum', 'avalanche', 'gnosis', 'optimism', 'base', 'basesepolia', 'worldchain']
supported.svm = []

/*#elif _SVM

let supported = ['solana']
supported.evm = []
supported.svm = ['solana']

//#else */

let supported = ['ethereum', 'bsc', 'polygon', 'solana', 'arbitrum', 'avalanche', 'gnosis', 'optimism', 'base', 'basesepolia', 'worldchain']
supported.evm = ['ethereum', 'bsc', 'polygon', 'arbitrum', 'avalanche', 'gnosis', 'optimism', 'base', 'basesepolia', 'worldchain']
supported.svm = ['solana']

//#endif

export { supported }
