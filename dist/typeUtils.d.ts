import { Idl, InstructionNamespace } from "@project-serum/anchor";
export declare type InstructionAccounts<I extends Idl, Inst extends keyof InstructionNamespace<I>> = Parameters<InstructionNamespace<I>[Inst]["accounts"]>[0];
