import { useState } from "react"

export default function ImportantAlert() {
    const [display, setDisplayOption] = useState(true);
    return (
        <>
            {
                display &&
                <div className="importantInfo">
                    <p>Important Information in regard of COVID19</p>
                    <div className="infoButtons">
                        <button onClick={() => setDisplayOption(!display)}>Close</button>
                        <button>Read</button>
                    </div>
                </div>
            }
        </>
    )
}