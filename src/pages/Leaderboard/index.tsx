import SideBar from '../../components/SideBar';
import styles from '../../styles/pages/Leaderboard.module.css';
import persons from '../../../personas.json';

interface PersonsProps {
  position: number;
  name: string;
  profileImg: string;
  level: number;
  challengesCompleted: number;
  currentExperience: number;
}

const Leaderboard: React.FC = () => {
  return (
    <div className={styles.containerOver}>
      <SideBar/>
      <div className={styles.container}>
        <h1>
          Leaderboard
        </h1>

        <table>
          <thead>
            <tr>
              <th>POSIÇÃO</th>
              <th>USUÁRIO</th>
              <th>DESAFIOS</th>
              <th>EXPERIÊNCIA</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person) => (
              <tr>
                <td className={styles.tablePosition}>
                  {person.position}
                </td>

                <td className={styles.tableProfile}>
                  <img src={person.profileImg} alt="Perfil do usuario"/>
                  <div>
                    <strong>{person.name}</strong>
                    <span>
                      <img src="/icons/level.svg" alt="Level"/>
                      Level {person.level}
                    </span>
                  </div>
                </td>

                <td 
                  className={styles.tableExperience}
                >
                  <div>
                    <strong>{person.challengesCompleted}</strong> completados
                  </div>
                </td>
                
                <td 
                  className={styles.tableExperience}
                >
                  <div>
                    <strong>{person.currentExperience}</strong> xp
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default Leaderboard;