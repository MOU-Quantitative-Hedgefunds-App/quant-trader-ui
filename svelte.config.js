import adapter from '@sveltejs/adapter-static'; // Importa el adaptador estático

const config = {
    kit: {
        adapter: adapter({
            // Aquí se configura el directorio de salida para páginas y activos
            pages: 'build',  // Directorio de salida para páginas
            assets: 'build'  // Directorio de salida para activos
        }),
        
    }
};

export default config;
