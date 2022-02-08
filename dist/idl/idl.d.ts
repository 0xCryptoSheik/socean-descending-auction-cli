export declare type DescendingAuctionProgram = {
    "version": "0.1.0";
    "name": "descending_auction_program";
    "instructions": [
        {
            "name": "initializeAuction";
            "accounts": [
                {
                    "name": "auction";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "auctionAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "authority";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "paymentMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "paymentDestination";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "saleMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "auctionPool";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "rent";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "startTimestamp";
                    "type": "i64";
                },
                {
                    "name": "endTimestamp";
                    "type": "i64";
                },
                {
                    "name": "ceilPrice";
                    "type": "u64";
                },
                {
                    "name": "floorPrice";
                    "type": "u64";
                },
                {
                    "name": "auctionAuthorityBump";
                    "type": "u8";
                },
                {
                    "name": "auctionPoolBump";
                    "type": "u8";
                }
            ];
        },
        {
            "name": "updateEndTime";
            "accounts": [
                {
                    "name": "auction";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "authority";
                    "isMut": false;
                    "isSigner": true;
                }
            ];
            "args": [
                {
                    "name": "endTimestamp";
                    "type": "i64";
                }
            ];
        },
        {
            "name": "updateStartTime";
            "accounts": [
                {
                    "name": "auction";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "authority";
                    "isMut": false;
                    "isSigner": true;
                }
            ];
            "args": [
                {
                    "name": "startTimestamp";
                    "type": "i64";
                }
            ];
        },
        {
            "name": "updateCeilPrice";
            "accounts": [
                {
                    "name": "auction";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "authority";
                    "isMut": false;
                    "isSigner": true;
                }
            ];
            "args": [
                {
                    "name": "ceilPrice";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "updateFloorPrice";
            "accounts": [
                {
                    "name": "auction";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "authority";
                    "isMut": false;
                    "isSigner": true;
                }
            ];
            "args": [
                {
                    "name": "floorPrice";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "depositToAuctionPool";
            "accounts": [
                {
                    "name": "auction";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "auctionPool";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "auctionAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "authority";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "sourceAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "depositAmount";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "closeAuction";
            "accounts": [
                {
                    "name": "auction";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "auctionPool";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "auctionAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "authority";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "destinationAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [];
        },
        {
            "name": "purchase";
            "accounts": [
                {
                    "name": "auction";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "auctionAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "saleMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "auctionPool";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "paymentDestination";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "buyer";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "paymentSource";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "saleDestination";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "purchaseAmount";
                    "type": "u64";
                },
                {
                    "name": "expectedPayment";
                    "type": "u64";
                },
                {
                    "name": "slippageTolerance";
                    "type": "u64";
                }
            ];
        }
    ];
    "accounts": [
        {
            "name": "auction";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "authority";
                        "type": "publicKey";
                    },
                    {
                        "name": "startTimestamp";
                        "type": "i64";
                    },
                    {
                        "name": "endTimestamp";
                        "type": "i64";
                    },
                    {
                        "name": "paymentMint";
                        "type": "publicKey";
                    },
                    {
                        "name": "paymentDestination";
                        "type": "publicKey";
                    },
                    {
                        "name": "saleMint";
                        "type": "publicKey";
                    },
                    {
                        "name": "auctionPool";
                        "type": "publicKey";
                    },
                    {
                        "name": "ceilPrice";
                        "type": "u64";
                    },
                    {
                        "name": "floorPrice";
                        "type": "u64";
                    },
                    {
                        "name": "curveType";
                        "type": {
                            "defined": "CurveType";
                        };
                    },
                    {
                        "name": "auctionAuthorityBump";
                        "type": "u8";
                    },
                    {
                        "name": "auctionPoolBump";
                        "type": "u8";
                    },
                    {
                        "name": "initPoolBalance";
                        "type": "u64";
                    },
                    {
                        "name": "totalSaleAmount";
                        "type": "u64";
                    }
                ];
            };
        }
    ];
    "types": [
        {
            "name": "CurveType";
            "type": {
                "kind": "enum";
                "variants": [
                    {
                        "name": "LinearDecay";
                    }
                ];
            };
        },
        {
            "name": "AuctionState";
            "type": {
                "kind": "enum";
                "variants": [
                    {
                        "name": "Pending";
                    },
                    {
                        "name": "InProgress";
                    },
                    {
                        "name": "Ended";
                    }
                ];
            };
        }
    ];
    "errors": [
        {
            "code": 6000;
            "name": "AuthorityNotMutable";
            "msg": "The provided authority is not mutable";
        },
        {
            "code": 6001;
            "name": "AuthorityNotSigner";
            "msg": "The provided authority is not a signer";
        },
        {
            "code": 6002;
            "name": "InvalidPaymentDestination";
            "msg": "The mint of the provided payment destination does not match the payment mint of the provided auction";
        },
        {
            "code": 6003;
            "name": "InvalidPaymentSource";
            "msg": "The mint of the provided payment source does not match the payment mint of the provided auction";
        },
        {
            "code": 6004;
            "name": "InvalidAuctionTimestamps";
            "msg": "The provided timestamps for auction do not describe a valid length of time";
        },
        {
            "code": 6005;
            "name": "InvalidAuctionAuthority";
            "msg": "The provided authority does not have authority over the provided auction";
        },
        {
            "code": 6006;
            "name": "AuctionNotPending";
            "msg": "The provided auction must be in the Pending state";
        },
        {
            "code": 6007;
            "name": "AuctionNotInProgress";
            "msg": "The provided auction must be in the InProgress state";
        },
        {
            "code": 6008;
            "name": "AuctionNotEnded";
            "msg": "The provided auction must be in the Ended state";
        },
        {
            "code": 6009;
            "name": "AuctionInProgress";
            "msg": "The provided auction must be in either the Pending or Ended state";
        },
        {
            "code": 6010;
            "name": "AuctionPoolNotOwnedByAuction";
            "msg": "The provided auction pool is not owned by the provided auction";
        },
        {
            "code": 6011;
            "name": "PaymentSourceNotOwned";
            "msg": "The provided payment source is not owned by the buyer";
        },
        {
            "code": 6012;
            "name": "InvalidAuctionPrice";
            "msg": "The provided auction price is not valid";
        },
        {
            "code": 6013;
            "name": "AuctionPoolWrongMint";
            "msg": "The mint of the provided auction pool does not match the sale mint of the provided auction";
        },
        {
            "code": 6014;
            "name": "AuctionPoolBalanceTooLow";
            "msg": "The provided purchase amount exceeds the balance of the auction pool";
        },
        {
            "code": 6015;
            "name": "InvalidSaleDestinationMint";
            "msg": "The mint of the provided sale destination does not match the sale mint of the provided auction";
        },
        {
            "code": 6016;
            "name": "InvalidExpectedPayment";
            "msg": "The argument for expected payment for a purchase cannot be 0";
        },
        {
            "code": 6017;
            "name": "PurchaseAmountTooSmall";
            "msg": "The provided amount of sale token to be purchased is too small to be paid with the payment token";
        },
        {
            "code": 6018;
            "name": "PurchasePriceOutOfSlippage";
            "msg": "The price of the purchase instruction exceeded the provided slippage limit";
        },
        {
            "code": 6019;
            "name": "InternalError";
            "msg": "Internal Error";
        },
        {
            "code": 6020;
            "name": "InvalidSaleDestinationOwner";
            "msg": "The provided sale destination is not owned by the buyer";
        }
    ];
};
export declare const IDL: DescendingAuctionProgram;
