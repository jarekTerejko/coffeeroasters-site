import HeroPages from '../components/HeroPages'
import HowItWorks from '../components/HowItWorksSection'
import {createYourPlanHero} from '../data'


const Plan = () => {
    return (
      <>
        <HeroPages data={createYourPlanHero} />
        <HowItWorks invisible darkBackground lightColor />
      </>
    );
}
 
export default Plan;