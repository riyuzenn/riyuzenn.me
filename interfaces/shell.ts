import IShellHistory from "./history";

export default interface IShellContext {
    history: IShellHistory[];
    command: string;
    lastCommandIndex: number;

    setHistory: (output: string) => void;
    setCommand: (command: string) => void;
    setLastCommandIndex: (index: number) => void;
    execute: (command: string) => Promise<void>;
    clearHistory: () => void;

}