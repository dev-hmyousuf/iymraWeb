import React from 'react'
import 'ldrs/helix'
const Loader = () => {
    return (
        <div className="loader">
            <l-helix
                size="60"
                speed="1.5"
                color="indigo"
            ></l-helix>
        </div>

    )
}

export default Loader