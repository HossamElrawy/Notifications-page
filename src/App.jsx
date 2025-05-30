import styles from './App.module.css'
import angela from "../assets/images/avatar-angela-gray.webp"
import anna from "../assets/images/avatar-anna-kim.webp"
import jacob from "../assets/images/avatar-jacob-thompson.webp"
import kimberly from "../assets/images/avatar-kimberly-smith.webp"
import mark from "../assets/images/avatar-mark-webber.webp"
import nathan from "../assets/images/avatar-nathan-peterson.webp"
import rizky from "../assets/images/avatar-rizky-hasanuddin.webp"
import chess from "../assets/images/image-chess.webp"
import { useState } from 'react'

function App() {
  const [ allRead , setAllRead ] = useState(false)

  function handleMarkAllRead () {
    setAllRead(true)
  }
  return (
    <div className={styles.rootElement}>
      <div className={styles.notificationDiv}>
        <div className={styles.notificatiobAndNumber}>
          <p className={styles.notificationPara}>
            Notifications
          </p>
          <p className={styles.notificationNum}>
            {allRead ? "0" : "3"}
          </p>
        </div>
        <button className={styles.markAllButton} onClick={handleMarkAllRead}>
          Mark all as read
        </button>
      </div>
      <div className={`${styles.post} ${allRead ? "" : styles.newPost}`}>
        <img src={mark} alt="" className={styles.avatar} />
        <div className={styles.words}>
          <p className={styles.action}>
            <span className={styles.name}>
              Mark Webber 
            </span>
            <span>
              reacted to your recent post
            </span>
            <span className={styles.event}>
              My first tournament today!
            </span>
            {!allRead && <div className={styles.orange}></div>}
          </p>
          <p className={styles.since}>
            1m ago
          </p>
        </div>
      </div>
      <div className={`${styles.post} ${allRead ? "" : styles.newPost}`}>
        <img src={angela} alt="" className={styles.avatar} />
        <div className={styles.words}>
          <p className={styles.action}>
            <span className={styles.name}>
              Angela Gray 
            </span>
            <span>
              followed you
            </span>
            {!allRead && <div className={styles.orange}></div>}
          </p>
          <p className={styles.since}>
            5m ago
          </p>
        </div>
      </div>
      <div className={`${styles.post} ${allRead ? "" : styles.newPost}`}>
        <img src={jacob} alt="" className={styles.avatar} />
        <div className={styles.words}>
          <p className={styles.action}>
            <span className={styles.name}>
              Jacob Thompson 
            </span>
            <span>
              has joined your group 
            </span>
            <span className={styles.chess}>
              Chess Club
            </span>
            {!allRead && <div className={styles.orange}></div>}
          </p>
          <p className={styles.since}>
            1 day ago
          </p>
        </div>
      </div>
      <div className={styles.post}>
        <img src={rizky} alt="" className={styles.avatar} />
        <div className={styles.words}>
          <p className={styles.action}>
            <span className={styles.name}>
              Rizky Hasanuddin 
            </span>
            <span>
              sent you a private message
            </span>
          </p>
          <p className={styles.since}>
            5 days ago
          </p>
          <div className={styles.privateMessage}>
            Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
            I'm already having lots of fun and improving my game.
          </div>
        </div>
      </div>
      <div className={styles.post}>
        <img src={kimberly} alt="" className={styles.avatar} />
          <div className={styles.speicalPost}>
            <div className={styles.words}>
              <p className={styles.action}>
                <span className={styles.name}>
                  Kimberly Smith 
                </span>
                <span>
                  commented on your picture
                </span>
              </p>
              <p className={styles.since}>
                1 week ago
              </p>
            </div>
            <img src={chess} className={styles.chessImg} alt="" />
          </div>
      </div>    
      <div className={styles.post}>
        <img src={nathan} alt="" className={styles.avatar} />
        <div className={styles.words}>
          <p className={styles.action}>
            <span className={styles.name}>
              Nathan Peterson 
            </span>
            <span>
              reacted to your recent post 
            </span>
            <span className={styles.event}>
              5 end-game strategies to increase your win rate
            </span>
          </p>
          <p className={styles.since}>
            2 weeks ago
          </p>
        </div>
      </div>
      <div className={styles.post}>
        <img src={anna} alt="" className={styles.avatar} />
        <div className={styles.words}>
          <p className={styles.action}>
            <span className={styles.name}>
              Anna Kim 
            </span>
            <span>
              left the group 
            </span>
            <span className={styles.chess}>
              Chess Club
            </span>
          </p>
          <p className={styles.since}>
            2 weeks ago
          </p>
        </div>
      </div>    
    </div>
  )
}

export default App
