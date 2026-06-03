function Container_2_2() {
    return (
        <>
            {/* ACCESS TYPE */}
            <tr className="access-row">
                <td className="access-title">
                    <p><strong>Access type</strong></p>
                </td>
                <td colSpan="14" className="section-content">
                    <label className="checkbox-label">
                        <input type="checkbox" className="form-checkbox" />
                        Escorted (visitor)

                        <input
                            type="checkbox"
                            className="form-checkbox"
                            defaultChecked
                        />
                        Unescorted (approved vendor)
                    </label>
                </td>
            </tr>

            {/* PERMANENT BADGE */}
            <tr className="badge-row">
                <td rowSpan="2" className="badge-title">
                    <p><strong>Permanent badge</strong></p>
                    <p><strong><em>*Valid max. 12 months</em></strong></p>
                </td>
                <td colSpan="14" className="section-content">
                    <p className="checkbox-label">
                        <input type="checkbox" className="form-checkbox" name="" />
                        Yes <em>*Only authorized person</em>

                        <input
                            type="checkbox"
                            className="form-checkbox"
                            defaultChecked
                            name=""
                        />
                        No
                    </p>
                </td>
            </tr>

            <tr className="badge-person-row">
                <td colSpan="14" className="section-content">
                    <strong>
                        <em>
                            If yes, the authorized person must be indicated and must sign the PTW.
                        </em>
                    </strong>

                    <div className="authorized-persons">
                        <label className="checkbox-label">
                            <input type="checkbox" className="form-checkbox" />
                            Tobias Kratt
                        </label>

                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                className="form-checkbox"
                                defaultChecked
                            />
                            Maurice Schneider (*)
                        </label>

                        <label className="checkbox-label">
                            <input type="checkbox" className="form-checkbox" />
                            Michael Schöngen (*)
                        </label>
                    </div>

                    <em>*Only for annual maintenance</em>
                </td>
            </tr>

            {/* VEHICLE ACCESS */}
            <tr className="vehicle-access-row">
                <td rowSpan="2" className="vehicle-title">
                    <p><strong>Vehicle access and perimeter parking request</strong></p>
                    <p><strong><em>* Vehicle access only permitted for loading and unloading</em></strong></p>
                </td>

                <td colSpan="14" className="section-content">
                    <p>
                        Is perimeter parking required during work?

                        <input type="checkbox" className="form-checkbox" name="" />
                        Yes
                        <strong className="checkbox-label">
                            <sup>(*)</sup>
                        </strong>

                        <input
                            type="checkbox"
                            className="form-checkbox"
                            defaultChecked
                            name=""
                        />
                        No
                    </p>
                </td>
            </tr>

            <tr className="vehicle-justification-row">
                <td colSpan="6" className="vehicle-text">
                    <p><strong><sup>(*)</sup></strong> If yes, a justification is required. à</p>
                </td>
                <td colSpan="8" className="empty-field vehicle-inf">
                    <input type={"text"} className={"vehicle-inp"} name="" />
                </td>
            </tr>
        </>
    );
}

export default Container_2_2;

// 2. Personal information ENDE