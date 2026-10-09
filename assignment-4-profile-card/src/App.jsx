import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  return (
    <main className="app">
      <h1>Profile Cards</h1>

      <div className="cards">
        <ProfileCard
          name="Sonal Adhav"
          image="https://i.pravatar.cc/200?img=47"
          description="MCA student learning full stack development with React, Node and MongoDB."
        />
        <ProfileCard
          name="Rahul Sharma"
          image="https://i.pravatar.cc/200?img=12"
          description="Frontend developer who loves building clean and responsive interfaces."
        />
        <ProfileCard
          name="Priya Patil"
          image="https://i.pravatar.cc/200?img=32"
          description="Backend enthusiast working with Express APIs and NoSQL databases."
        />
      </div>
    </main>
  );
}

export default App;
