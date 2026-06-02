function GeneralInformation () {
    return (
   
    <table className="gen-info-table" >
        <tr className="section-row">
            <td colSpan="15" className="section-header">
                <p>
                    <strong>1. General information</strong>
                </p>
            </td>
        </tr>

         {/* SITE CODE */}
        <tr className="info-row">
            <td className="field-title">
                <p><strong>Site code </strong></p>
            </td>
            <td colSpan="6" className="field-value">
                <select className="key-select" name="in" title="in">

                    <option>Select here</option>

                    <option>MCZ</option>

                    <option>LUPIN</option>

                    <option>SLURS</option>

                </select>
            </td>
            <td colSpan="8" className="field-value">
                <input type="text" className="text-field" placeholder="PTW no. (Ref Number):"/>
            </td>
        </tr>

                    {/* START END */}


        <tr className="datetime-row">
            <td className="field-title">
                <p><strong>Start date </strong></p>
            </td>
            <td colSpan="2" className="field-value">
                <input type="date" className="date-field"  aria-label="Date"/>
            </td>
            <td colSpan="2" className="field-label">
                <p>Start time</p>
            </td>
            <td colSpan="2" className="field-value">
                <input type="time" className="time-field" aria-label="Time"/>
            </td>
            <td colSpan="2" className="field-title">
                <p><strong>End date</strong></p>
            </td>
            <td colSpan="3" className="field-value">
                <input type="date" className="date-field" aria-label="Date"/>
            </td>
            <td className="field-label">
                <p>End time</p>
            </td>
            <td colSpan="2" className="field-value">
                <input type="time" className="time-field" aria-label="Time"/>
            </td>
        </tr>
    </table>
    
    );
}

export default GeneralInformation;