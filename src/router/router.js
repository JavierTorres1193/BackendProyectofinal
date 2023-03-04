const express= require('express');
const router = express();
// libreria que utilizaremos para la encriptacion de los password
const bcrypt= require('bcrypt');
// libreria que utilizaremos para la generacion de nuesrto token
// const jwt= require('jsonwebtoken');
//////archivo de coneccion
const mysqlConeccion = require('../database/database');
//////fin archivo de coneccion

///////ruta raiz
router.get('/', (req, res)=>{
    res.send('');
});

//.Devuelve  todos los datos buzosycamperas
router.get('/buzosycamperas',  (req, res)=>{
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
        mysqlConeccion.query('select * from buzosycamperas', (err, registro)=>{
            if(!err){
                res.json(registro);
            }else{
                console.log(err)
            }
        })
        // }
    // })
});



// alta y baja
router.put('/altabuzosycamperas/:id',(req, res)=>{
    //asigna a id_alumno el valor que recibe por el parametro 
    let id = req.params.id; 
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
            let query=`UPDATE buzosycamperas set Estado = 'A' WHERE idBuzosyCamperas='${id}'`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"El producto se dio de ALTA correctamente"
                    });
                }else{
                    console.log('El error  es : '+ err); 
                }
            })
    //     }
    // })
 });


router.put('/bajabuzosycamperas/:id',(req, res)=>{
    //asigna a id_alumno el valor que recibe por el parametro 
    let id = req.params.id; 
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
            let query=`UPDATE buzosycamperas set Estado = 'B' WHERE idBuzosyCamperas='${id}'`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"El producto se dio de BAJA correctamente"
                    });
                }else{
                    console.log('El error  es : '+ err); 
                }
            })
    //     }
    // })
 });


//Create






////////////////////// CHANCLAS /////////////////////////


//.Devuelve  todos los datos buzosycamperas
router.get('/chanclas',  (req, res)=>{
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
        mysqlConeccion.query('select * from chanclas', (err, registro)=>{
            if(!err){
                res.json(registro);
            }else{
                console.log(err)
            }
        })
        // }
    // })
});



// alta y baja
router.put('/altachanclas/:id',(req, res)=>{
    //asigna a id_alumno el valor que recibe por el parametro 
    let id = req.params.id; 
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
            let query=`UPDATE chanclas set Estado = 'A' WHERE idChanclas='${id}'`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"El producto se dio de ALTA correctamente"
                    });
                }else{
                    console.log('El error  es : '+ err); 
                }
            })
    //     }
    // })
 });


router.put('/bajachanclas/:id',(req, res)=>{
    //asigna a id_alumno el valor que recibe por el parametro 
    let id = req.params.id; 
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
            let query=`UPDATE chanclas set Estado = 'B' WHERE idChanclas='${id}'`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"El producto se dio de BAJA correctamente"
                    });
                }else{
                    console.log('El error  es : '+ err); 
                }
            })
    //     }
    // })
 });





//.Devuelve  todos los datos pantalones


router.get('/pantalones',  (req, res)=>{
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
        mysqlConeccion.query('select * from pantalones', (err, registro)=>{
            if(!err){
                res.json(registro);
            }else{
                console.log(err)
            }
        })
        // }
    // })
});



// alta y baja
router.put('/altapantalones/:id',(req, res)=>{
    //asigna a id_alumno el valor que recibe por el parametro 
    let id = req.params.id; 
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
            let query=`UPDATE pantalones set Estado = 'A' WHERE idPantalones='${id}'`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"El producto se dio de ALTA correctamente"
                    });
                }else{
                    console.log('El error  es : '+ err); 
                }
            })
    //     }
    // })
 });


router.put('/bajapantalones/:id',(req, res)=>{
    //asigna a id_alumno el valor que recibe por el parametro 
    let id = req.params.id; 
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
            let query=`UPDATE pantalones set Estado = 'B' WHERE idPantalones='${id}'`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"El producto se dio de BAJA correctamente"
                    });
                }else{
                    console.log('El error  es : '+ err); 
                }
            })
    //     }
    // })
 });


//.Devuelve  todos los datos mallas
//.Devuelve  todos los datos buzosycamperas
router.get('/mallas',  (req, res)=>{
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
        mysqlConeccion.query('select * from mallas', (err, registro)=>{
            if(!err){
                res.json(registro);
            }else{
                console.log(err)
            }
        })
        // }
    // })
});



// alta y baja
router.put('/altamallas/:id',(req, res)=>{
    //asigna a id_alumno el valor que recibe por el parametro 
    let id = req.params.id; 
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
            let query=`UPDATE mallas set Estado = 'A' WHERE idMallas='${id}'`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"El producto se dio de ALTA correctamente"
                    });
                }else{
                    console.log('El error  es : '+ err); 
                }
            })
    //     }
    // })
 });


router.put('/bajamallas/:id',(req, res)=>{
    //asigna a id_alumno el valor que recibe por el parametro 
    let id = req.params.id; 
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
            let query=`UPDATE mallas set Estado = 'B' WHERE idMallas='${id}'`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"El producto se dio de BAJA correctamente"
                    });
                }else{
                    console.log('El error  es : '+ err); 
                }
            })
    //     }
    // })
 });


//.Devuelve  todos los datos remeras

router.get('/remeras',  (req, res)=>{
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
        mysqlConeccion.query('select * from remeras', (err, registro)=>{
            if(!err){
                res.json(registro);
            }else{
                console.log(err)
            }
        })
        // }
    // })
});



// alta y baja
router.put('/altaremeras/:id',(req, res)=>{
    //asigna a id_alumno el valor que recibe por el parametro 
    let id = req.params.id; 
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
            let query=`UPDATE remeras set Estado = 'A' WHERE idRemeras='${id}'`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"El producto se dio de ALTA correctamente"
                    });
                }else{
                    console.log('El error  es : '+ err); 
                }
            })
    //     }
    // })
 });


router.put('/bajaremeras/:id',(req, res)=>{
    //asigna a id_alumno el valor que recibe por el parametro 
    let id = req.params.id; 
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
            let query=`UPDATE remeras set Estado = 'B' WHERE idRemeras='${id}'`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"El producto se dio de BAJA correctamente"
                    });
                }else{
                    console.log('El error  es : '+ err); 
                }
            })
    //     }
    // })
 });





////////////////////////////////////////////////////////
/////////////////////PROVEEDORES /////////////////////////
//////////////////////////////////////////////////////




//Devuelve a todos los Proveedores activos de nuestra base de datos 
router.get('/proveedores',  (req, res)=>{
    
    // jwt.verify(req.token, 'siliconKey', (error)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
            const query='select * from proveedores';
            mysqlConeccion.query(query, (err, rows)=>{
                if(!err){
                    res.json(rows);
                }else{
                    console.log(err)
                }
            })
    //     }
    // });    
});


///// ALTA /////
router.put('/altaproveedores/:id',(req, res)=>{
    //asigna a id_alumno el valor que recibe por el parametro 
    let id = req.params.id; 
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
            let query=`UPDATE proveedores set Estado = 'A' WHERE idProveedores='${id}'`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"El proveedor se dio de ALTA correctamente"
                    });
                }else{
                    console.log('El error  es : '+ err); 
                }
            })
    //     }
    // })
 });

///// BAJA  /////

router.put('/bajaproveedores/:id',(req, res)=>{
    //asigna a id_alumno el valor que recibe por el parametro 
    let id = req.params.id; 
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
            let query=`UPDATE proveedores set Estado = 'B' WHERE idProveedores='${id}'`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"El proveedor se dio de BAJA correctamente"
                    });
                }else{
                    console.log('El error  es : '+ err); 
                }
            })
    //     }
    // })
 });


//metodo para insertar proveedores a travez del metodo POST
router.post('/Proveedores', (req, res)=>{
    const { idproveedores, nombre, direccion, telefono} = req.body
    
            let query=`INSERT INTO proveedores (idproveedores, nombre, direccion) VALUES ('${idproveedores}','${nombre}','${direccion}','${telefono}','A')`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('Se inserto correctamente nuestro proveedor: '+nombre+'');
                }else{
                    console.log(err)
                    res.send('El error es: '+err);
                }
            })
       
    
});

//metodo para eliminar los datos de un proveedor en particular
router.delete('/Proveedores/:id',verificarToken ,(req, res)=>{
    //asigna a id_alumno el valor que recibe por el parametro 
    let idProveedores  = req.params.idProveedores; 
    jwt.verify(req.token, 'siliconKey', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            let query=`DELETE FROM Proveedores WHERE idProveedores='${idProveedores}'`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('El proveedor que ELIMINAMOS es ID : '+idProveedores);
                }else{
                    res.send('El error  es : '+ err); 
                }
            })
        }
    })
 });






////////////////////////////////////////////////////////
/////////////////////CLIENTES /////////////////////////
//////////////////////////////////////////////////////




 //Devuelve a todos los Clientes activos de nuestra base de datos 
router.get('/clientes', (req, res)=>{

    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
            mysqlConeccion.query('select * from Clientes', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
        // }
    // })   
    
});

//metodo para insertar Clientes a travez del metodo POST
router.post('/clientes/:id', (req, res)=>{
    const { idClientes, nombre, direccion, telefono} = req.body
    
            let query=`INSERT INTO Clientes (idClientes, nombre, direccion) VALUES ('${idClientes}','${nombre}','${direccion}','${telefono}','A')`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('Se inserto correctamente nuestro Cliente: '+nombre+'');
                }else{
                    console.log(err)
                    res.send('El error es: '+err);
                }
            })
       
    
});


//ALTA CLIENTE

router.put('/altaclientes/:id',(req, res)=>{
    //asigna a id_alumno el valor que recibe por el parametro 
    let id = req.params.id; 
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
            let query=`UPDATE clientes set Estado = 'A' WHERE idClientes='${id}'`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"El usuario se dio de ALTA correctamente"
                    });
                }else{
                    console.log('El error  es : '+ err); 
                }
            })
    //     }
    // })
 });

///// BAJA CLIENTE /////

router.put('/bajaclientes/:id',(req, res)=>{
    //asigna a id_alumno el valor que recibe por el parametro 
    let id = req.params.id; 
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
            let query=`UPDATE clientes set Estado = 'B' WHERE idClientes='${id}'`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"El usuario se dio de BAJA correctamente"
                    });
                }else{
                    console.log('El error  es : '+ err); 
                }
            })
    //     }
    // })
 });

//EDITAR
router.post('/clientes', (req, res)=>{
    const { Nombre, Direccion, Telefono } = req.body
    
            let query=`INSERT INTO clientes (Nombre, Direccion, Telefono) VALUES ('${Nombre}','${Direccion}','${Telefono}')`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('Se inserto correctamente el cliente: '+Nombre);
                }else{
                    console.log(err)
                    res.send('El error es: '+err);
                }
            })
       
    
});


// EDITAR //
// router.put('/editarclientes' , (req, res)=>{
//     //asigna a id_curso el valor que recibe por el parametro 
//     let id = req.params.id;
//     const { idClientes,Nombre, Direccion, Telefono, Estado } =req.body
//     console.log(req.body)
//     let query=`UPDATE Clientes SET idClientes='${idClientes}', Nombre='${Nombre}', Direccion='${Direccion}', Telefono='${Telefono}', Estado='${Estado}'`;
//     mysqlConeccion.query(query, (err, registros)=>{
//         if(!err){
//             res.send('El Id que editamos es : '+idClientes);
//         }else{
//             console.log(err)
//         }
//     })

// });






////////////// /////////////////
//////////////Usuarios /////////
////////////// /////////////////
router.get('/usuarios', verificarToken, (req, res)=>{

        jwt.verify(req.token, 'siliconKey', (error, valido)=>{
            if(error){
                res.sendStatus(403);
            }else{
                mysqlConeccion.query('select * from usuarios', (err, registro)=>{
                    if(!err){
                        res.json(registro);
                    }else{
                        console.log(err)
                    }
                })
            }
        })   
        
});


////////////login de usuarios //////////////
router.post('/login', (req, res)=>{
    const {username, password} =req.body
    if(username!=undefined && password!=undefined){
        mysqlConeccion.query('select u.id, u.username,  u.password,  u.email, u.apellido_nombre from usuarios u where u.estado="A" AND username=?',[username], (err, rows)=>{
            if(!err){
                if(rows.length!=0){
                    const bcryptPassword = bcrypt.compareSync(password, rows[0].password);
                    if(bcryptPassword){
                        jwt.sign({rows}, 'siliconKey' ,(err, token)=>{
                            res.json(
                                {
                                    status: true,
                                    datos: rows,
                                    token: token
                                });
                        }) 
                    }else{
                        res.json(
                            {
                                status: false,
                                mensaje:"La Contraseña es incorrecta"
                            });
                    }
                }else{
                    res.json(
                        {
                            status: false,
                            mensaje:"El usuario no existe "
                        });
                    
                }
            }else{
                res.json(
                    {
                        status: false,
                        mensaje:"Error en el servidor"
                    });
                
            }
        });
    }else{
        res.json({
            status: false,
            mensaje:"Faltan completar datos"
        });
    }
});

////////////login de usuarios //////////////
router.post('/registro', async(req, res)=>{
    const {username, password, email, apellido_nombre} =req.body
    let hash = bcrypt.hashSync(password,10);

    let query=`INSERT INTO usuarios (username, password, email, apellido_nombre, fecha_creacion) VALUES ('${username}','${hash}','${email}','${apellido_nombre}',NOW())`;
    mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"El usuario se creo correctamente"
            });
        }else{
            res.send('Ocurrio un error desde el servidor'+err);
        }
    })
});

router.put('/resetpassword/:id', (req, res)=>{
    // asigna a id_usuario el valor que recibe por el parametro 
     let id  = req.params.id;
    // //asigna el valor que recibe  en el Body 
     const { password } =req.body 
     let hash = bcrypt.hashSync(password,10); 
    //  generamos la query de modificacion del password
     let query=`UPDATE usuarios SET password='${hash}' WHERE id='${id}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.send('El Id que editamos es : '+id+' y cambiamos el password! Muchas gracias!');
        }else{
            console.log(err)
        }
    })

    
});


router.put('/bajausuario/:id', (req, res)=>{
    // asigna a id_usuario el valor que recibe por el parametro 
     let id  = req.params.id;
     let query=`UPDATE usuarios SET estado='B' WHERE id='${id}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"El usuario se dio de BAJA correctamente"
            });
        }else{
            console.log(err)
        }
    })
    
});

router.put('/altausuario/:id', (req, res)=>{
    // asigna a id_usuario el valor que recibe por el parametro 
     let id  = req.params.id;
     let query=`UPDATE usuarios SET estado='A' WHERE id='${id}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"El usuario se dio de Alta correctamente"
            });
        }else{
            console.log(err)
        }
    })
    
});
////////////// /////////////////
// //////////////////////Nuestras funciones /////////
function verificarToken(req, res, next){
    // console.log('controlo lo que llega', req.headers)
    const BearerHeader= req.headers['authorization']
    if(typeof BearerHeader!=='undefined'){
        const bearerToken= BearerHeader.split(" ")[1]
        req.token=bearerToken;
        next();
    }else{
         res.send('Para consultar las apis debe estar autenticado.Gracias');
        // console.log('Ocurrio un error')
    }
}

function esNumero(parametro) {
    if(!isNaN(parseInt(parametro))){
        return false
    } else {
        return true
    }
}

module.exports = router;

