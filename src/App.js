import "./styles.css";

export default function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="App">
      <img className="img" src="hori.jpg" alt="no" />
      <div className="text">
        <h2>Yaheia ibrahim</h2>
        <p>
          hello this is the description for the profile it's super easy and nice
          description haha, have a nice day.
        </p>
        <Skill skill="first skill" color="green" />
        <Skill skill="second skill" color="gray" />
        <Skill skill=" skill" color="green" />
        <Skill skill="second skill nice" color="gray" />
        <Skill skill="first skill" color="green" />
      </div>
    </div>
  );
}

function Skill(props) {
  return (
    <p style={{ backgroundColor: props.color }} className="skill">
      {props.skill}
    </p>
  );
}
