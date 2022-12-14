import React from "react";
import styles from "./Tournaments.module.css";
import TournamentsBanner from "../../assets/tournaments/Tournamentsbanner.png";
import greenDiv from "../../assets/tournaments/green-div-banner.png";
import twoGolfSticks from "../../assets/tournaments/two-golf-sticks.png";
import Login from "../Login/Login";


export default function Tournaments() {
  return (
    <>
      <div className={styles.tournamentsWrapper}>
        <div className={styles.banner}>
          <img
            src={TournamentsBanner}
            className={styles.tourImg}
            alt="tournaments banner"
          />
          <div className={styles.gdiv}>
            <img src={greenDiv} className={styles.gdiv} alt="green div" />
            <div className={styles.gdiv}>
              <h1>Tournaments</h1>
              <p>Host your next golf tournament</p>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.aboutTournaments}>
            <div>
              <img
                src={twoGolfSticks}
                alt="two golf stiks"
                className={styles.twoGolfStickImg}
              />
            </div>
            <h1>About Tournaments</h1>
            <p>
              “Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer posuere erat a ante blandit sapien
              viverra nunc.”
            </p>
          </div>
        </div>

        <div className={styles.formHead}><h1>Tournament Request</h1></div>
        
        <form action="">
          <div className={styles.boxTour}>
            <div>
              <label for="text">First Name</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label for="text">Last Name</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label for="email">Email</label>
              <br />
              <input type="email" />
            </div>
            <div>
              <label for="number">Phone</label>
              <br />
              <input type="number" />
            </div>
            <div>
              <label for="text">Event Date</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label for="text">Group Members</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label for="textarea">Your Message</label>
              <br />
              <textarea placeholder="type your message here..."></textarea>
            </div>
          </div>

          <div className={styles.formBtn}>
            <input type="submit" value="SUBMIT" />
          </div>
        </form>
      </div>

      <div className={styles.tournamentsLogin}>
        <Login />
      </div>
    </>
  );
}
