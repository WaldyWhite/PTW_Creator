function ResponsibleContainer() {
    return (
        <table className="gen-info-table">
            {/* RESPONSIBLE */}
            <tr className="responsible-header-row">
                <td rowspan="3" className="responsible-title">
                    <p>
                        <strong>Responsible and submitted by</strong>{" "}
                    </p>
                    <p>
                        <strong>
                            <em>*Only Green or authorized by Green</em>
                        </strong>
                    </p>
                </td>
                <td colSpan="2" className="sub-header">
                    <p>Department</p>
                </td>
                <td colSpan="4" className="sub-header">
                    <p>Name, first name</p>
                </td>
                <td colSpan="2" className="sub-header">
                    <p>Mobile format e.g. +41 76 123 45 67</p>
                </td>
                <td colSpan="6" className="sub-header">
                    <p>E-mail</p>
                </td>
            </tr>
            <tr className="responsible-data-row">
                <td colSpan="2" className="field-value">
                    <select className="key-select" aria-label="Company">
                        <option>Select here</option>
                    </select>
                </td>
                <td colSpan="4" className="empty-field">
                    <select className="key-select" aria-label="Company">
                        <option>Select here</option>
                    </select>
                </td>
                <td colSpan="2" className="empty-field">
                    <div className="input-container">
                        <input type="text" className="empty-ftext" name="" aria-label="Date"/>
                    </div>
                </td>
                <td colSpan="6" className="empty-field">
                    <div className="input-container">
                        <input type="text" className="empty-ftext" name="" aria-label="Date"/>
                    </div>
                </td>
            </tr>
            <tr className="responsible-data-row">
                <td colSpan="2" className="field-value">
                    <select className="key-select" aria-label="Company">
                        <option>Select here</option>
                    </select>
                </td>
                <td colSpan="4" className="empty-field">
                    <select className="key-select" aria-label="Date">
                        <option>Select here</option>
                    </select>
                </td>
                <td colSpan="2" className="empty-field">
                    <div className="input-container">
                        <input type="text" className="empty-ftext" name="" aria-label="Date"/>
                    </div>
                </td>
                <td colSpan="6" className="empty-field">
                    <div className="input-container">
                        <input type="text" className="empty-ftext" name="" aria-label="Date"/>
                    </div>
                </td>
            </tr>
        </table>
    );
}
export default ResponsibleContainer;