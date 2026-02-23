import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">

      <TwitterFollowCard
        userName="midudev"
        name="Miguel Ángel Durán"
        isFollowing
      />
    
      <TwitterFollowCard
        userName="midudev"
        name="Miguel Ángel Durán"
      />
      
    </section>
  );
} 