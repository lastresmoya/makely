import React from "react";

function ProfileLayout({user}) {
    
    return (
        <React.Fragment>
            <h1>Esto aparece en las dos páginas</h1>
        
        {user==='public' && 
            <div> Esta cajita solo aparece para el público</div>
        }
        {user === 'logged' &&
            <div>Esta otra caja solo aparce para si estoy loggeado</div>
        }
        </React.Fragment>
    );
}

export default ProfileLayout;
