function Container_3_2 () {
    return (
        <>
            {/*REQUIRED KEYS */}
            <tr className="required-keys-row">

                <td className="required-keys-title">
                    <strong>Required keys</strong>
                </td>

                {/* MCZ */}
                <td colSpan="5">

                    <div className="keys-section">

                        <div className="site-title">
                            Site <strong>MCZ</strong>
                        </div>

                        <select className="key-select">
                            <option>Select here</option>
                        </select>

                        <select className="key-select">
                            <option>Select here</option>
                        </select>

                        <select className="key-select">
                            <option>Select here</option>
                        </select>

                    </div>

                </td>

                {/* LUPIN */}
                <td colSpan="4">
                    <div className="keys-section">
                        <div className="site-title">
                            Site <strong>LUPIN</strong>
                        </div>
                        <select className="key-select">
                            <option>Select here</option>
                        </select>
                        <select className="key-select">
                            <option>Select here</option>
                        </select>
                        <select className="key-select">
                            <option>Select here</option>
                        </select>
                    </div>
                </td>

                {/* SLURS */}
                <td colSpan="5">


                    <div className="keys-section">
                        <div className="site-title">
                            Site <strong>SLURS</strong>
                        </div>
                        <select className="key-select">
                            <option>Select here</option>
                        </select>
                        <select className="key-select">
                            <option>Select here</option>
                        </select>
                        <select className="key-select">
                            <option>Select here</option>
                        </select>

                    </div>

                </td>

            </tr>
        </>
    )
}
export default Container_3_2;