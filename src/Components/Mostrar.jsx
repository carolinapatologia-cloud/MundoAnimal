import React, { useState, useEffect } from "react";

function App() {
 
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            
            .then(res => res.json()) 
            
            .then(dados => setUsuarios(dados)); 
    }, []);

    return (
        <div> 
            {usuarios.map(usuario => (
                <p key={usuario.id}>
                    
                    {usuario.title} 
                </p>
            ))}         
        </div>
    );
}

export default App;

