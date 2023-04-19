import HeroComponent from "../components/HeroComponent/HeroComponent";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent";
import SkillsComponent from "../components/SkillsComponent/SkillsComponent";

const HomePageComponent = () => {
    return (
        <>
            <NavbarComponent />
            <HeroComponent />
            <SkillsComponent/>
        </>
    )

}

export default HomePageComponent;