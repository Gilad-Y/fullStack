import CopyRights from "./CopyRights/CopyRights";
import "./Footer.css";
import Summary from "./Summary/Summary";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <div>
			<CopyRights/>
            </div>
            <div>
            <Summary/>
            </div>
        </div>
    );
}

export default Footer;
