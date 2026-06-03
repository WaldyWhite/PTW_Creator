function WorkAreaLocation() {
    return (
        <>
        <tr>
            <td colspan="15" class="section-header">
                <p>
                    <strong>3. Work area location - specific work detail</strong>
                </p>
            </td>
        </tr >

        { /* ACCESS PROFILE */ }

        <tr class="work-access-row">
            <td class="work-title">
                <p><strong>Access profile, areas of work/ Intrusion alarm disablement </strong></p>
                <p><strong><em>*If customer space is affected, ICS ticket is mandatory</em></strong></p>
            </td>
            <td colspan="14" class="members-content">
                <table class="members-table">
                    <tr class="members-header-row">
                        <td class="sub-header">
                            <p>Room</p>
                        </td>
                        <td class="sub-header">
                            <p>Customer space (yes/no)</p>
                        </td>
                        <td class="sub-header">
                            <p>ICS ticket No.</p>
                        </td>
                        <td class="sub-header">
                            <p>Intrusion alarm disablement</p>
                        </td>
                    </tr>
                    <tr class="work-header-row">
                        <td class="work-header">
                            <div class="input-container"><input type="text" class="empty-ftext" name="" /></div>
                        </td>
                        <td class="work-header">
                            <div class="input-container"><input type="text" class="empty-ftext" name="" /></div>
                        </td>
                        <td class="work-header">
                            <div class="input-container"><input type="text" class="empty-ftext" name="" /></div>
                        </td>
                        <td class="work-header">
                            <p><input type="checkbox" /></p>
                        </td>
                    </tr>
                    <tr class="work-header-row">
                        <td class="work-header">
                            <div class="input-container"><input type="text" class="empty-ftext" name="" /></div>
                        </td>
                        <td class="work-header">
                            <div class="input-container"><input type="text" class="empty-ftext" name="" /></div>
                        </td>
                        <td class="work-header">
                            <div class="input-container"><input type="text" class="empty-ftext" name="" /></div>
                        </td>
                        <td class="work-header">
                            <p><input type="checkbox" /></p>
                        </td>
                    </tr>
                    <tr class="work-header-row">
                        <td class="work-header">
                            <div class="input-container"><input type="text" class="empty-ftext" /></div>
                        </td>
                        <td class="work-header">
                            <div class="input-container"><input type="text" class="empty-ftext" /></div>
                        </td>
                        <td class="work-header">
                            <div class="input-container"><input type="text" class="empty-ftext" /></div>
                        </td>
                        <td class="work-header">
                            <p><input type="checkbox" /></p>
                        </td>
                    </tr>
                    <tr class="work-header-row">
                        <td class="work-header">
                            <div class="input-container"><input type="text" class="empty-ftext" /></div>
                        </td>
                        <td class="work-header">
                            <div class="input-container"><input type="text" class="empty-ftext" /></div>
                        </td>
                        <td class="work-header">
                            <div class="input-container"><input type="text" class="empty-ftext" /></div>
                        </td>
                        <td class="work-header">
                            <p><input type="checkbox" /></p>
                        </td>
                    </tr>
                    <tr class="work-header-row">
                        <td class="work-header">
                            <div class="input-container"><input type="text" class="empty-ftext" /></div>
                        </td>
                        <td class="work-header">
                            <div class="input-container"><input type="text" class="empty-ftext" /></div>
                        </td>
                        <td class="work-header">
                            <div class="input-container"><input type="text" class="empty-ftext" /></div>
                        </td>
                        <td class="work-header">
                            <p><input type="checkbox" /></p>
                        </td>
                    </tr>
                    <tr class="work-header-row">
                        <td class="work-header">
                            <div class="input-container"><input type="text" class="empty-ftext" /></div>
                        </td>
                        <td class="work-header">
                            <div class="input-container"><input type="text" class="empty-ftext" /></div>
                        </td>
                        <td class="work-header">
                            <div class="input-container"><input type="text" class="empty-ftext" /></div>
                        </td>
                        <td class="work-header">
                            <p><input type="checkbox" /></p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        </>
    );
}

export default WorkAreaLocation;