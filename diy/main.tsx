import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App';
import '../src/styles/global.scss';
import '../src/styles/utils.scss';
import { domRelatedOptForTheme } from '../src/utils';
// import theme from './diy.theme.json';
import { Theme } from '../src/themes/interface';

/*====================预设文字区域====================*/

// 仅在第一关出现的字
const icons = [
    `睡`,
    `那`,
    `海`,
    `真`,
    `老`,
    `师`,
    `吗`,
    `同`,
    `学`,
    `亮`,
    `明`,
    `才`,
];

// 仅在第二关出现的字
const icons2 = [
    `才`,
    `明`,
    `同`,
    `学`,
    `亮`,
    `睡`,
    `海`,
    `有`,
    `问`,
    `半`,
    `从`,
    
];

/*===================================================*/

export type DefaultSoundNames = 'button-click' | 'triple';

export const getDefaultTheme: () => Theme<DefaultSoundNames> = () => {
    return {
        title: '羊了个羊-挑战生字宝宝',
        desc: '会读会认会消除吗^ ^',
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
        bgm: 'https://archive.org/download/cage-the-elephant-aint-no-rest/03AintNoRestForTheWicked.mp3',
    };
};

const diytheme = getDefaultTheme();

domRelatedOptForTheme(diytheme);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App theme={diytheme} />
    </React.StrictMode>
);
