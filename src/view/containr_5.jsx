function Containr_5 () {
    return (
        <>
            {/* Approval section */}
            <tr className="section-row">

                <td colSpan="3" className="section-header">
                    <strong>4. Approval section</strong>
                </td>

            </tr>

            {/* -COLUMN TITLES */}
            <tr className="approval-titles-row">

                <td className="approval-title-cell">
                    <strong>
                        Green responsible
                        <em>*Name in block capitals</em>
                    </strong>
                </td>

                <td className="approval-title-cell">
                    <strong>Date</strong>
                </td>

                <td className="approval-title-cell">
                    <strong>Signature</strong>
                </td>

            </tr>

            {/* DATA ROW */}
            <tr className="approval-data-row">

                <td className="approval-empty-cell"></td>

                <td className="approval-date-cell">
                    <input type="date" className="date-field"/>
                </td>

                <td className="approval-signature-cell"></td>

            </tr>
        </>
    )
}

export default Containr_5;