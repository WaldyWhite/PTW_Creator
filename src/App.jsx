import Container_1_1 from "./view/container_1_1";
import Container_1_2 from "./view/container_1_2";
import Container_2_1 from "./view/container_2_1";
import Container_2_2 from "./view/container_2_2";
import Container_3_1 from "./view/container_3_1";
import Container_3_2 from "./view/container_3_2";
import Container_3_3 from "./view/container_3_3";
import Container_3_4 from "./view/container_3_4";
import Containr_5 from "./view/containr_5";


function App() {
    return (
        <>
        <table className="gen-info-table">
            <Container_1_1 />
            <Container_1_2 />
        </table>
            <table className="gen-info-table">
                <Container_2_1/>
                <Container_2_2 />
            </table>
            <table className="gen-info-table">
                <Container_3_1 />
                <Container_3_2 />
                <Container_3_3 />
                <Container_3_4 />
            </table>
            <table className="gen-info-table">
                <Containr_5 />
            </table>
        </>

    );
}

export default App;