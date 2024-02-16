import { PlayroomInfo, PlayroomInfoProps } from "../../components/PlayroomInfo";
import { getCodeURL } from "../../utils/getCodeURL";
import styles from "./styles.module.css";

const playroomInfo: PlayroomInfoProps = {
  title: "Responsive Pills (CSS Only)",
  description:
    "If pill with the user name takes too much space we replace it with profile icon",
  codeURL: getCodeURL("responsive-pills"),
};

function Playroom() {
  return (
    <div>
      <PlayroomInfo {...playroomInfo} />
      <br />
      <div className={styles.resizer}>
        <div className={styles.container}>
          <div className={styles.spacer}>
            <div className={styles["user-icon-container"]}>
              <div className={styles["user-icon"]}>👶</div>
            </div>
          </div>
          <div className={styles["fill-container"]}>
            <div className={styles["pill-container"]}>
              <button className={styles.pill}>
                Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr.
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className={styles.resizer}>
        <div className={styles.container}>
          <div className={styles.spacer}>
            <div className={styles["user-icon-container"]}>
              <div className={styles["user-icon"]}>👶</div>
            </div>
          </div>
          <div className={styles["fill-container"]}>
            <div className={styles["pill-container"]}>
              <button className={styles.pill}>Pavel</button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className={styles.resizer}>
        <div className={styles.container}>
          <div className={styles.spacer}>
            <div className={styles["user-icon-container"]}>
              <div className={styles["user-icon"]}>👶</div>
            </div>
          </div>
          <div className={styles["fill-container"]}>
            <div className={styles["pill-container"]}>
              <button className={styles.pill}>Audrey Henderson</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Playroom };
