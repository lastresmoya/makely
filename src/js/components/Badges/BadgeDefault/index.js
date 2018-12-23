import React from "react";

function BadgeDefault({content}) {
    return (
        <span className="badge badge-light mr-2 text-muted">
            {content}
        </span>
    );
}

export default BadgeDefault;
