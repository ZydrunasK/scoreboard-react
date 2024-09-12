import { useState } from 'react';
import style from './Scoreboard.module.css';

export function Scoreboard() {
    const [homeCount, setHomeCount] = useState(0);
    const [guestCount, setGuestCount] = useState(0);

    const periodPoints = {
         p1Home: 0,
         p2Home: 0,
         p3Home: 0,
         p4Home: 0,
         p1Guest: 0,
         p2Guest: 0,
         p3Guest: 0,
         p4Guest: 0
};

    function upOne() {
        setHomeCount(pre => pre + 1)
    }
    function upTwo() {
        setHomeCount(pre => pre + 2)
    }
    function upThree() {
        setHomeCount(pre => pre + 3)
    }
    function upOneG() {
        setGuestCount(pre => pre + 1)
    }
    function upTwoG() {
        setGuestCount(pre => pre + 2)
    }
    function upThreeG() {
        setGuestCount(pre => pre + 3)
    }
    function endPeriod() {
        periodPoints.p1Home = homeCount;
        periodPoints.p1Guest = guestCount;
    }
    
    
    
    
    return (
        <>
            <main className={style.mainScoreBoard}>
                <section className={style.board}>
                    <div className={style.home}>
                        <div className={style.count}>
                            <p className={style.title}>Home</p>
                            <div className={style.score}>{ homeCount }</div>
                        </div>
                        <div className={style.btn}>
                            <button type='button' onClick={ upOne }>1</button>
                            <button type='button' onClick={ upTwo }>2</button>
                            <button type='button' onClick={ upThree }>3</button>
                        </div>
                    </div>
                    <div className={style.divide}>
                        <p className={style.thePeriod}>P1</p>
                    </div>
                    <div className={style.guest}>
                        <div className={style.count}>
                            <p className={style.title}>Guest</p>
                            <div className={style.score}>{ guestCount }</div>
                        </div>
                        <div className={style.btn}>
                            <button type='button' onClick={ upOneG }>1</button>
                            <button type='button' onClick={ upTwoG }>2</button>
                            <button type='button' onClick={ upThreeG }>3</button>
                        </div>
                    </div>
                </section>

                <section className={style.keeper}>
                    <button type='button' onClick={ endPeriod } className={style.periodBtn}>End period</button>
                    <div className={style.periods}>
                        <div className={style.perHome}>
                            <h2>home</h2>
                            <p className={style.p1}>0</p>
                            <p className={style.p2}>0</p>
                            <p className={style.p3}>0</p>
                            <p className={style.p4}>0</p>
                        </div>
                        <div className={style.perGuest}>
                            <h2>guest</h2>
                            <p className={style.p1}>0</p>
                            <p className={style.p2}>0</p>
                            <p className={style.p3}>0</p>
                            <p className={style.p4}>0</p>
                        </div>    
                    </div>
                </section>
            </main>
        </>
)}

