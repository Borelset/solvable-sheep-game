import { ReactNode } from 'react';

export interface Icon<T = string> {
    name: string;
    content: ReactNode;
    clickSound: T;
    tripleSound: T;
}

export interface Sound<T = string> {
    name: T;
    src: string;
}

type Operation = 'shift' | 'undo' | 'wash';

export interface Theme<SoundNames> {
    title: string;
    desc?: string;
    bgm?: string;
    background?: string;
    backgroundColor?: string;
    backgroundBlur?: boolean;
    dark?: boolean;
    pure?: boolean;
    maxLevel?: number;
    icons: Icon<SoundNames>[];
    icons2: Icon<SoundNames>[];
    icons3: Icon<SoundNames>[];
    icons4: Icon<SoundNames>[];
    icons5: Icon<SoundNames>[];
    sounds: Sound<SoundNames>[];
    operateSoundMap?: Record<Operation, SoundNames>;
}
