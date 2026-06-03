import GeneralInformation from "./view/GeneralInformation";
import ResponsibleContainer from "./view/ResponsibleContainer";
import PersonalInformation from "./view/PersonalInformation";
import PersonalInformationSecond from "./view/PersonalInformationSecond";
import WorkAreaLocation from "./view/WorkAreaLocation";
import SPACER from "./view/SPACER";

function App() {
    return (
        <table className="gen-info-table">
            <tbody>
                <GeneralInformation />
                <ResponsibleContainer />
                <table className="gen-info-table">
                    <PersonalInformation />
                    <PersonalInformationSecond />
                </table>
                <table className="gen-info-table">
                    <WorkAreaLocation />
                </table>
            </tbody>

        </table>
    );
}

export default App;