import User from "../models/User.js";

export const getUser = async (req, res) => {
    try {   
            // Obtener el id de la solicitud
            const { id } = req.params;
            // buscar un documento en la base de datos que coincida con el id proporcionado
            const user = await User.findById(id);
            //Si la búsqueda es exitosa, se responde con un estado HTTP 200 (OK) y se devuelve el usuario encontrado en formato JSON.
            res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message  })
        
    }
}