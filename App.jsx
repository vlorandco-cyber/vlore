import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import GrowthSystemSection from "./components/GrowthSystemSection";
import ConfluenceSignature from "./components/ConfluenceSignature";
import EcosystemView from "./components/EcosystemView";
import WhyVlore from "./components/WhyVlore";
import Packages from "./components/Packages";
import Epilogue from "./components/Epilogue";
import { systems } from "./data/content";

function App() {
  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <Problem />

        {systems.map((system, index) => (
          <GrowthSystemSection key={system.id} system={system} index={index} />
        ))}

        <ConfluenceSignature />
        <EcosystemView />
        <WhyVlore />
        <Packages />
        <Epilogue />
      </main>
    </div>
  );
}

export default App;
