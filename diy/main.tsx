import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App';
import '../src/styles/global.scss';
import '../src/styles/utils.scss';
import { domRelatedOptForTheme } from '../src/utils';
// import theme from './diy.theme.json';
import { Theme } from '../src/themes/interface';

/*====================预设文字区域====================*/

// 在第一关和第二关都会出现的字
const icons = [`在`, `后`, `问`, `好`, `长`, `比`, `从`, `把`, `在`, `个`,`雨`, `们`,];

// 只会在第二关出现的字
const icons2 = [`鸟`,`早`, '来', `去`,'果'];

/*===================================================*/

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
