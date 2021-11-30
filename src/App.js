import React from "react"
import "style.css"
import "tailwindcss/dist/base.css"
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import TabCardGrid from "components/cards/TabCardGrid"
import AnimationRevealPage from "helpers/AnimationRevealPage";
import ProfileThreeColGrid from "components/cards/ProfileThreeColGrid";
import FullWidthWithImage from "components/hero/FullWidthWithImage";
import BackgroundAsImage from "components/hero/BackgroundAsImage";
import TwoColWithSteps from "components/features/TwoColWithSteps";
import TwoColWithButton from "components/features/TwoColWithButton";
import SimpleContactUs from "components/forms/SimpleContactUs";

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
