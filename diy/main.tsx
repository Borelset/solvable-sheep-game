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
    `对`,
    `妈`,
    `全`,
    `回`,
    `只`,
    `石`,
    `多`,
    `出`,
    `见`,
    `的`,
    `和`,
    `才`,
];

// 仅在第二关出现的字
const icons2 = [
    `住`,
    `孩`,
    `玩`,
    `吧`,
    `发`,
    `芽`,
    `爬`,
    `久`,
    `全`,
    `变`,
    `从`,
];

// 仅在第三关出现的字
const icons3 = [
    `三`,
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

// 仅在第四关出现的字
const icons4 = [
    `工`,
    `厂`,
    `广`,
    `医`,
    `院`,
    `生`,
    `哥`,
    `弟`,
    `伯`,
    `爷`,
    `姐`,
];

// 仅在第五关出现的字
const icons5 = [
    `乌`,
    `鸟`,
    `旁`,
    `鸭`,
    `群`,
    `睡`,
    `洞`,
    `高`,
    `放`,
    `步`,
    `鸦`,
];

/*===================================================*/

export type DefaultSoundNames = 'button-click' | 'triple';

export const getDefaultTheme: () => Theme<DefaultSoundNames> = () => {
    return {
        title: '生字消消乐~挑战生字宝宝',
        desc: '会读会认会消除吗^ ^',
        dark: true,
        maxLevel: 5,
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
        icons3: icons3.map((icon) => ({
            name: icon,
            content: icon,
            clickSound: 'button-click',
            tripleSound: 'triple',
        })),
        icons4: icons4.map((icon) => ({
            name: icon,
            content: icon,
            clickSound: 'button-click',
            tripleSound: 'triple',
        })),
        icons5: icons5.map((icon) => ({
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
        bgm: 'https://archive.org/download/remix-nin-com-audio-22778/boss.angelica - waka waka.mp3',
    };
};

const diytheme = getDefaultTheme();

domRelatedOptForTheme(diytheme);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App theme={diytheme} />
    </React.StrictMode>
);
