import ContactComponent from "../components/ContactComponent/ContactComponent";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent";
import ProjectComponent from "../components/ProjectComponent/Projectcomponent";
import SkillsComponent from "../components/SkillsComponent/SkillsComponent";

const HomePageComponent = () => {
    return (
        <>
            <NavbarComponent />
            <HeroComponent />
            <SkillsComponent />
            <ProjectComponent />
            <ContactComponent/>
        </>
    )

}

export default HomePageComponent;