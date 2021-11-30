import React from "react"
import "style.css"
import "tailwindcss/dist/base.css"
import TabCardGrid from "components/cards/TabCardGrid"
import AnimationRevealPage from "helpers/AnimationRevealPage";
import BackgroundAsImage from "components/hero/BackgroundAsImage";
import TwoColWithButton from "components/features/TwoColWithButton";
import SimpleContactUs from "components/forms/SimpleContactUs";
import SimpleFiveColumn from "components/footers/SimpleFiveColumn";

function App() {
  return (
    <AnimationRevealPage disabled>
      <BackgroundAsImage />
      <TwoColWithButton />
      <TabCardGrid />
      <SimpleContactUs />
    </AnimationRevealPage>
  )
}

export default App;
