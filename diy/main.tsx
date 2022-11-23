import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App';
import '../src/styles/global.scss';
import '../src/styles/utils.scss';
import { domRelatedOptForTheme } from '../src/utils';
// import theme from './diy.theme.json';
import { Theme } from '../src/themes/interface';

const icons = [`柚`, `袖`, `油`, `邮`, `抽`, `饶`, `绕`, `浇`, `挠`, `烧`];
const icons2 = ['小', '宝', '真', '可', '爱'];

export type DefaultSoundNames = 'button-click' | 'triple';

export const getDefaultTheme: () => Theme<DefaultSoundNames> = () => {
    return {
        title: '形近字羊了个羊',
        desc: '学习形近字~',
        dark: true,
        maxLevel: 2,
        backgroundColor: '#8dac85',
        icons: icons.map((icon) => ({
            name: icon,
            content: icon,
            clickSound: 'button-click',
            tripleSound: 'triple',
        })),
        icons2: icons2.map((icon) => ({
            name: icon,
            content: icon,
            clickSound: 'button-click',
            tripleSound: 'triple',
        })),
        sounds: [
            {
                name: 'button-click',
                src: 'https://minio.streakingman.com/solvable-sheep-game/sound-button-click.mp3',
            },
            {
                name: 'triple',
                src: 'https://minio.streakingman.com/solvable-sheep-game/sound-triple.mp3',
            },
        ],
        bgm: 'AintNoRestForTheWicked.mp3',
    };
};

const diytheme = getDefaultTheme();

domRelatedOptForTheme(diytheme);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App theme={diytheme} />
    </React.StrictMode>
);
