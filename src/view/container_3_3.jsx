function Container_3_3 () {
    return (
        <>
            {/* REASON FOR WORK */}
            <tr className="reason-row">

                <td className="reason-title">

                    <strong>Reason for work</strong><br/>

                    <em>*Brief description</em>

                </td>

                <td colSpan="14" className="reason-content">
                    <textarea className="reason-textarea"></textarea>
                </td>
            </tr>
            { /* HAZARDOUS WORK */}
            <tr className="hazard-row">

                <td className="hazard-title">

                    <strong>Hazardous work activities</strong><br/>

                    <em>*All listed activities need separate permit</em>

                </td>

                <td colSpan="14" className="hazard-content">

                    <p className="hazard-note">
                        <strong>
                            Please upload an appropriate checklist to Sharepoint
                            at referenced PTW.
                        </strong>
                    </p>

                    <table className="hazard-table">
                        {/* FIRST ROW */}
                        <tr className="hazard-header-row">

                            <td className="hazard-item">
                                <strong>Hot works <sup>(**)</sup></strong>
                            </td>

                            <td className="hazard-item">
                                Work at height
                            </td>

                            <td className="hazard-item">
                                Use of a ladder
                            </td>

                            <td className="hazard-item">
                                Electrical live parts
                            </td>

                            <td rowSpan="2" className="hazard-item">

                                <div>…</div>

                                <div className="checkbox-wrapper">
                                    <input type="checkbox" className="form-checkbox" />
                                </div>

                            </td>

                        </tr>
                        {/* CHECKBOX ROW */}
                        <tr className="hazard-checkbox-row">

                            <td className="checkbox-cell">
                                <input type="checkbox" className="form-checkbox" />
                            </td>

                            <td className="checkbox-cell">
                                <input type="checkbox" className="form-checkbox" />
                            </td>

                            <td className="checkbox-cell">
                                <input type="checkbox" className="form-checkbox" />
                            </td>

                            <td className="checkbox-cell">
                                <input type="checkbox" className="form-checkbox" />
                            </td>

                        </tr>

                        {/* SECOND BLOCK */}

                        <tr className="hazard-bottom-row">

                            <td className="hazard-item">

                                <div>Lifting operation</div>

                                <div className="checkbox-wrapper">
                                    <input type="checkbox" className="form-checkbox" />
                                </div>

                            </td>

                            <td className="hazard-item">

                                <div>Excavation</div>

                                <div className="checkbox-wrapper">
                                    <input type="checkbox" className="form-checkbox" />
                                </div>

                            </td>

                            <td className="hazard-item">

                                <div>Confined spaces</div>

                                <div className="checkbox-wrapper">
                                    <input type="checkbox" className="form-checkbox" />
                                </div>

                            </td>

                            <td className="hazard-item">

                                <div>Flammable liquids and gases</div>

                                <div className="checkbox-wrapper">
                                    <input type="checkbox" className="form-checkbox" />
                                </div>

                            </td>

                            <td className="hazard-item">

                                <div>…</div>

                                <div className="checkbox-wrapper">
                                    <input type="checkbox" className="form-checkbox" />
                                </div>

                            </td>

                        </tr>

                    </table>
                    <p className="hazard-footer">
                        <em>
                            Dedicated permits can be found in
                            TMA Health &amp; Safety Sharepoint.
                        </em>
                    </p>

                </td>
            </tr>
        </>
    )
}

export  default Container_3_3;