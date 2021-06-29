import HeroPages from '../components/HeroPages'
import {createYourPlanHero} from '../data'


const Plan = () => {
    return (
      <>
        <HeroPages data={createYourPlanHero} />
      </>
    );
}
 
export default Plan;