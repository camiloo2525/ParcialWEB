const express = require('express');
const app = express();
const port = 3000;

// arreglos de utiles
let utiles = [
    {
        id: 1,
        nombreProducto: "Lapicero",
        valorProducto: 1000,
        fechaVencimiento: "02-10-2024", 
        categoriaProducto: "boligrafos",
        descripcionProducto: "Lápicero refil"
    },
    {
        id: 2,
        nombreProducto: "cartulina",
        valorProducto: 1500,
        fechaVencimiento: "29-11-2024", 
        categoriaProducto: "pliegos",
        descripcionProducto: "cartulina  de papel"
    },
    {
        id: 3,
        nombreProducto: "borrador",
        valorProducto: 500,
        fechaVencimiento: "22-12-2024", 
        categoriaProducto: "utiles",
        descripcionProducto: "borrador de nata"
    },
    {
        id: 4,
        nombreProducto: "marcador",
        valorProducto: 2000,
        fechaVencimiento: "12-09-2024", 
        categoriaProducto: "boligrafos",
        descripcionProducto: "marcador permanente"
    },
    {
        id: 5,
        nombreProducto: "Lapiz",
        valorProducto: 1200,
        fechaVencimiento: "13-11-2024", 
        categoriaProducto: "boligrafos",
        descripcionProducto: "Lápiz mirado numero 2"
    },
    {
        id: 6,
        nombreProducto: "regla",
        valorProducto: 800,
        fechaVencimiento: "31-12-2024", 
        categoriaProducto: "utiles",
        descripcionProducto: "regla plastica"
    },
    {
        id: 7,
        nombreProducto: "sacapuntas",
        valorProducto: 900,
        fechaVencimiento: "24-12-2024", 
        categoriaProducto: "utiles",
        descripcionProducto: "sacapuntas para lapiz"
    },
    {
        id: 8,
        nombreProducto: "portaminas",
        valorProducto: 2500,
        fechaVencimiento: "30-12-2024", 
        categoriaProducto: "boligrafos",
        descripcionProducto: "portaminas de mano"
    },
    {
        id: 9,
        nombreProducto: "Lapicero",
        valorProducto: 1000,
        fechaVencimiento: "02-10-2024", 
        categoriaProducto: "boligrafos",
        descripcionProducto: "Lápicero refil"
    },
    {
        id: 10,
        nombreProducto: "tijeras",
        valorProducto: 2000,
        fechaVencimiento: "31-01-2025", 
        categoriaProducto: "utiles",
        descripcionProducto: "tijeras para recortar"
    },
    {
        id: 11,
        nombreProducto: "morral",
        valorProducto: 30000,
        fechaVencimiento: "31-10-2025", 
        categoriaProducto: "utiles",
        descripcionProducto: "morral basico"
    },
    {
        id: 12,
        nombreProducto: "colores",
        valorProducto: 10000,
        fechaVencimiento: "30-10-2024", 
        categoriaProducto: "boligrafos",
        descripcionProducto: "variedad de colores"
    },
    {
        id: 13,
        nombreProducto: "calculadora",
        valorProducto: 15000,
        fechaVencimiento: "31-12-2025", 
        categoriaProducto: "utiles",
        descripcionProducto: "calculadora matematica"
    },
    {
        id: 14,
        nombreProducto: "pincel",
        valorProducto: 2000,
        fechaVencimiento: "25-05-2025", 
        categoriaProducto: "boligrafos",
        descripcionProducto: "pincel pintar"
    },
    {
        id: 15,
        nombreProducto: "cuaderno",
        valorProducto: 2600,
        fechaVencimiento: "09-11-2024", 
        categoriaProducto: "utiles",
        descripcionProducto: "cuadernos"
    }] 
    
    // arreglo de automoviles
    let automoviles = [
    {
        id: 100,
        marca: "Honda",
        cilindraje: 1500,
        tipo: "Híbrido",
        linea: "Civic",
        color: "Azul",
        placa: "GHI789",
        valor: 100000000
    },
        
    {
        id: 200,
        marca: "chevrolet",
        cilindraje: 1500,
        tipo: "Híbrido",
        linea: "evolution",
        color: "rojo",
        placa: "pes850",
        valor: 10000000
    },

    {
        id: 300,
        marca: "toyota",
        cilindraje: 3500,
        tipo: "Híbrido",
        linea: "txl",
        color: "blanca",
        placa: "ghb848",
        valor: 300000000
    },

    {
        id: 400,
        marca: "mercedes",
        cilindraje: 3500,
        tipo: "Híbrido",
        linea: "amg",
        color: "negro",
        placa: "vca222",
        valor: 250000000
    },

    {
        id: 500,
        marca: "ferrari",
        cilindraje: 5500,
        tipo: "Híbrido",
        linea: "f1",
        color: "rojo",
        placa: "imo911",
        valor: 500000000
    },

    {
        id: 600,
        marca: "peugeot",
        cilindraje: 2500,
        tipo: "electrico",
        linea: "allure",
        color: "rojo",
        placa: "yut098",
        valor: 110000000
    },

    {
        id: 700,
        marca: "dfsk",
        cilindraje: 1310,
        tipo: "Híbrido",
        linea: "van",
        color: "blanca",
        placa: "jjt981",
        valor: 70000000
    },

    {
        id: 800,
        marca: "porshe",
        cilindraje: 4500,
        tipo: "Híbrido",
        linea: "caiman",
        color: "rojo",
        placa: "dxz934",
        valor: 500000000
    },

    {
        id: 900,
        marca: "subaru",
        cilindraje: 2200,
        tipo: "Híbrido",
        linea: "wrk",
        color: "negro",
        placa: "iuy888",
        valor: 90000000
    },

    {
        id: 1000,
        marca: "hyundai",
        cilindraje: 2100,
        tipo: "electrico",
        linea: "tucson",
        color: "naranja",
        placa: "kad799",
        valor: 105000000
    },

    {
        id: 1100,
        marca: "kia",
        cilindraje: 2700,
        tipo: "electrico",
        linea: "picanto",
        color: "amarillo",
        placa: "mnb675",
        valor: 110000000
    },

    {
        id: 1200,
        marca: "Nissan",
        cilindraje: 2500,
        tipo: "Híbrido",
        linea: "March",
        color: "gris",
        placa: "lpo999",
        valor: 60000000
    },

    {
        id: 1300,
        marca: "bmw",
        cilindraje: 4500,
        tipo: "electrico",
        linea: "motorrad",
        color: "azul",
        placa: "ert321",
        valor: 400000000
    },

    {
        id: 1400,
        marca: "ford",
        cilindraje: 4000,
        tipo: "Híbrido",
        linea: "Fiesta",
        color: "verde",
        placa: "cat111",
        valor: 150000000
    },

    {
        id: 1500,
        marca: "audi",
        cilindraje: 3500,
        tipo: "electrico",
        linea: "Q7",
        color: "negro",
        placa: "gtu252",
        valor: 200000000
    }]

// juan camilo salazar hernández - programacion web 2

// 1 Crear un endpoint que liste todos los productos

app.get('/utiles', (req, res) => {
    res.json(utiles)
});

// 2 Crear un endpoint que liste todos los productos de una categoría (solicita la categoría por el endpoint)
app.get('/utiles/:categoria', (req, res) => {
    const categoria = req.params.categoria;
    const Utiles = utiles.filter(utiles_escolares => utiles_escolares.categoriaProducto === categoria);
    res.json(Utiles.length > 0 ? Utiles : res.status(404).send(' El util escolar no se encuentra'));
});

// 3. Crear un endpoint que liste todos los automóviles
app.get('/automoviles', (req, res) => {
    res.json(automoviles)
})

// 4. Crear un endpoint que liste los productos que sean mayor 10.000
app.get('/preciomayor', (req, res) => {
    const valorProducto = utiles.filter(precio => precio.valorProducto >= 10000);
    res.json( valorProducto);
});

// 5. Crear un endpoint que liste todos los productos y calcule el iva para cada producto el iva es del 19%

app.get('/iva', (req, res) => {
    const productosConIVA = utiles.map(util => ({
        ...util,
        iva: util.valorProducto * 0.19,
        precioConIVA: util.valorProducto * 1.19
    }));
    res.json(productosConIVA);
});

// 6. Crear un endpoint que liste todos los vehículos de una marca (solicita la marca por el endpoint)

app.get('/automoviles/:marca', (req, res) => {
    const marca = req.params.marca.toLowerCase(); 
    const autoMarca = automoviles.filter(auto => auto.marca.toLowerCase() === marca);
    
    if (autoMarca.length === 0) {
        res.status(404).json({ mensaje: 'el automovil no se encontro.' });
    } else {
        res.json(autoMarca);
    }
});

// 7 Crear un endpoint que liste todos los vehículos calcula el impuesto vehicular para cada vehículo teniendo en cuenta las siguientes condiciones

// a. Vehículos a gasolina
// i. Entre 1 y 50.000.000 el impuesto es del 1%
// ii. Entre 50.000.001 y 100.000.000 el impuesto es de 1,5%
// iii. Entre 100.000.001 y 150.000.000 el impuesto es de 2,5
// iv. Los vehículos con costo superior son de 3,5%

// b. Vehículos eléctricos todos tienen un impuesto de 1%

function Impuesto(valor, tipo) {
    if (tipo === 'electrico') {
        return valor * 0.01; 
    } else if (tipo === 'Híbrido') {
        if (valor <= 50000000) {
            return valor * 0.01;
        } else if (valor <= 100000000) {
            return valor * 0.015;
        } else if (valor <= 150000000) {
            return valor * 0.025;
        } else {
            return valor * 0.035;
        }
    } else {
        return 0; 
    }
}

app.get('/impuestos', (req, res) => {
    const Impuesto = automoviles.map(auto => {
    const impuestos = Impuesto(auto.valor, auto.tipo);
        return {
            id: auto.id,
            marca: auto.marca,
            impuesto: impuestos
        };
    });
    res.json(Impuesto);
});

// 8. Adicional complementa el ejercicio creando 5 endpoint para productos y 5 para vehículos. Todos de tipo Get

// endpoints de  utiles 

app.get('/utiles', (req, res) => {
    res.json(utiles);
});


app.get('/utiles/:cantidades', (req, res) => {
    const Total = utiles.length;
    res.json({ Total });
});;

app.get('/utiles/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const util = utiles.find(util => util.id === id);
    res.json(util);
});

app.get('/utiles/vencimiento/:fecha', (req, res) => {
    const fecha = req.params.fecha;
    const utilesvencimiento = utiles.filter(util => util.fechaVencimiento === fecha);
    res.json(utilesvencimiento);
});

app.get('/utiles/valormin/:min', (req, res) => {
    const minimo = parseInt(req.params.min);
    const utilesminimos = utiles.filter(util => util.valorProducto >= minimo);
    res.json(utilesminimos);
});

// endpoints de  automoviles

app.get('/automoviles', (req, res) => {
    res.json(automoviles);
});

app.get('/automoviles/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const automovil = automoviles.find(auto => auto.id === id);
    if (automovil) {
    res.json(automovil);
    } else {
    res.status(404).json({ message: 'el automóvil no se encontro' });
    }
});

app.get('/automoviles/color/:color', (req, res) => {
    const color = req.params.color.toLowerCase();
    const automovilesColor = automoviles.filter(auto => auto.color.toLowerCase() === color);
    if (automovilesColor.length > 0) {
    res.json(automovilesColor);
    } else {
    res.status(404).json({ message: 'No se encontraron colores de ese carro' });
    }
});

app.get('/automoviles/count', (req, res) => {
    res.json({ count: automoviles.length });
});

app.get('/automoviles/cilindraje/:min', (req, res) => {
    const minimoCilindraje = parseInt(req.params.min);
    const autoCilindrajes = automoviles.filter(auto => auto.cilindraje >= minimoCilindraje);
    if (autoCilindrajes.length > 0) {
    res.json(autoCilindrajes);
    } else {
    res.status(404).json({ message: 'No se encontraron automóviles con el cilindraje mínimo especificado' });
    }
});


app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});