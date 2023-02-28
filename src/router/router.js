const express= require('express');
const router = express();
// libreria que utilizaremos para la encriptacion de los password
const bcrypt= require('bcrypt');
// libreria que utilizaremos para la generacion de nuesrto token
const jwt= require('jsonwebtoken');
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
        mysqlConeccion.query('select * from buzosycamperas order by estado, idBuzosyCamperas', (err, registro)=>{
            if(!err){
                res.json(registro);
            }else{
                console.log(err)
            }
        })
        // }
    // })
});


router.put('/cambiobuzosycamperas/:id', (req, res)=>{
     let idbuzosycamperas  = req.params.idbuzosycamperas;
     let estado=req.body.estado  
     
     let query=`UPDATE buzosycamperas SET estado='${estado}' WHERE idbuzosycamperas='${idbuzosycamperas}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"El estado del buzosycamperas se cambio correctamente"
            });
        }else{
            res.json({
                status: false,
                mensaje:"Hubo un error"
            });
        }
    })
    
});
// alta
router.put('/altabuzosycamperas/:id', (req, res)=>{
    let idbuzosycamperas  = req.params.idbuzosycamperas;
    let query=`UPDATE buzosycamperas SET estado='A' WHERE idbuzosycamperas='${idbuzosycamperas}'`;

     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"buzosycamperas se dio de Alta correctamente"
            });
        }else{
           res.json({
                status: false,
                mensaje:"Hubo un error"
            });
        }
    })
    
});

router.get('/buzosycamperas/:idbuzosycamperas',(req, res)=>{

        const  { idbuzosycamperas } = req.params;
                mysqlConeccion.query('select * from buzosycamperas where idbuzosycamperas=?',[idbuzosycamperas], (err, registros)=>{
                    if(!err){
                        res.json(registros);
                    }else{
                        console.log(err)
                    }
                })
       
    });

router.post('/buzosycamperas', (req, res)=>{
    const { idbuzosycamperas } =req.body
     console.log(req.body);
            let query=`INSERT INTO buzosycamperas (idbuzosycamperas, estado) VALUES ('${idbuzosycamperas}', 'A')`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"buzosycamperas se dio de Alta correctamente"
                    });
                }else{
                    console.log(err)
                }
            })
      
    
});

//metodo para eliminar los datos en particular
router.delete('/buzosycamperas/:idbuzosycamperas', (req, res)=>{
   let idbuzosycamperas  = req.params.idbuzosycamperas; 
   jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    if(error){
        res.sendStatus(403);
    }else{
        let query=`DELETE FROM buzosycamperas WHERE idbuzosycamperas='${idbuzosycamperas}'`;
        mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('El Id que ELIMINAMOS es : '+registros);
                }else{
                    res.send('El error  es : '+ err); 
                }
            })
        }
    })
});

//.Devuelve  todos los datos chanclas
router.get('/chanclas', (req, res)=>{
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
        mysqlConeccion.query('select * from chanclas order by estado, idchanclas', (err, registro)=>{
            if(!err){
                res.json(registro);
            }else{
                console.log(err)
            }
        })
    //     }
    // })
});


router.put('/chanclas/:id', (req, res)=>{
     let idchanclas  = req.params.idchanclas;
     let estado=req.body.estado  
     
     let query=`UPDATE chanclas SET estado='${estado}' WHERE idchanclas='${idchanclas}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"El estado de chanclas se cambio correctamente"
            });
        }else{
            res.json({
                status: false,
                mensaje:"Hubo un error"
            });
        }
    })
    
});
// alta
router.put('/altachanclas/:id', (req, res)=>{
    let id  = req.params.id;
    let query=`UPDATE chanclas SET estado='A' WHERE idchanclas='${idchanclas}'`;

     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"chanclas se dio de Alta correctamente"
            });
        }else{
           res.json({
                status: false,
                mensaje:"Hubo un error"
            });
        }
    })
    
});

router.get('/chanclas/:idchanclas',(req, res)=>{

        const  { idchanclas } = req.params;
                mysqlConeccion.query('select * from chanclas where idchanclas=?',[idchanclas], (err, registros)=>{
                    if(!err){
                        res.json(registros);
                    }else{
                        console.log(err)
                    }
                })
       
    });

router.post('/chanclas', (req, res)=>{
    const { idchanclas } =req.body
     console.log(req.body);
            let query=`INSERT INTO chanclas (idchanclas, estado) VALUES ('${idchanclas}', 'A')`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"chanclas se dio de Alta correctamente"
                    });
                }else{
                    console.log(err)
                }
            })
      
    
});

//metodo para eliminar los datos en particular
router.delete('/chanclas/:idchanclas', (req, res)=>{
   let idchanclas  = req.params.idchanclas; 
   jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    if(error){
        res.sendStatus(403);
    }else{
        let query=`DELETE FROM chanclas WHERE idchanclas='${idchanclas}'`;
        mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('El Id que ELIMINAMOS es : '+registros);
                }else{
                    res.send('El error  es : '+ err); 
                }
            })
        }
    })
});

//.Devuelve  todos los datos pantalones
router.get('/pantalones',  (req, res)=>{
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
        mysqlConeccion.query('select * from pantalones order by estado, idpantalones', (err, registro)=>{
            if(!err){
                res.json(registro);
            }else{
                console.log(err)
            }
        })
    //     }
    // })
});


router.put('/cambiopantalones/:id', (req, res)=>{
     let idpantalones  = req.params.idpantalones;
     let estado=req.body.estado  
     
     let query=`UPDATE pantalones SET estado='${estado}' WHERE idpantalones='${idpantalones}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"El estado del pantalones se cambio correctamente"
            });
        }else{
            res.json({
                status: false,
                mensaje:"Hubo un error"
            });
        }
    })
    
});
// alta
router.put('/pantalones/:id', (req, res)=>{
    let idpantalones  = req.params.idpantalones;
    let query=`UPDATE pantalones SET estado='A' WHERE idpantalones='${idpantalones}'`;

     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"pantalones se dio de Alta correctamente"
            });
        }else{
           res.json({
                status: false,
                mensaje:"Hubo un error"
            });
        }
    })
    
});

router.get('/pantalones/:idpantalones',(req, res)=>{

        const  { idpantalones } = req.params;
                mysqlConeccion.query('select * from pantalones where idpantalones=?',[idpantalones], (err, registros)=>{
                    if(!err){
                        res.json(registros);
                    }else{
                        console.log(err)
                    }
                })
       
    });

router.post('/pantalones', (req, res)=>{
    const { idpantalones } =req.body
     console.log(req.body);
            let query=`INSERT INTO pantalones (idpantalones, estado) VALUES ('${idpantalones}', 'A')`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"pantalones se dio de Alta correctamente"
                    });
                }else{
                    console.log(err)
                }
            })
      
    
});

//metodo para eliminar los datos en particular
router.delete('/pantalones/:idpantalones', (req, res)=>{
   let idpantalones  = req.params.idpantalones; 
   jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    if(error){
        res.sendStatus(403);
    }else{
        let query=`DELETE FROM pantalones WHERE idpantalones='${idpantalones}'`;
        mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('El Id que ELIMINAMOS es : '+registros);
                }else{
                    res.send('El error  es : '+ err); 
                }
            })
        }
    })
});

//.Devuelve  todos los datos mallas
router.get('/mallas',  (req, res)=>{
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
        mysqlConeccion.query('select * from mallas order by estado, idMallas', (err, registro)=>{
            if(!err){
                res.json(registro);
            }else{
                console.log(err)
            }
        })
    //     }
    // })
});


router.put('/cambiomallas/:id', (req, res)=>{
     let idmallas  = req.params.idmallas;
     let estado=req.body.estado  
     
     let query=`UPDATE mallas SET estado='${estado}' WHERE idmallas='${idmallas}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"El estado de mallas se cambio correctamente"
            });
        }else{
            res.json({
                status: false,
                mensaje:"Hubo un error"
            });
        }
    })
    
});
// alta
router.put('/mallas/:id', (req, res)=>{
    let idmallas  = req.params.idmallas;
    let query=`UPDATE mallas SET estado='A' WHERE idmallas='${idmallas}'`;

     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"mallas se dio de Alta correctamente"
            });
        }else{
           res.json({
                status: false,
                mensaje:"Hubo un error"
            });
        }
    })
    
});

router.get('/mallas/:idmallas',(req, res)=>{

        const  { idmallas } = req.params;
                mysqlConeccion.query('select * from mallas where idmallas=?',[idmallas], (err, registros)=>{
                    if(!err){
                        res.json(registros);
                    }else{
                        console.log(err)
                    }
                })
       
    });

router.post('/mallas', (req, res)=>{
    const { idmallas } =req.body
     console.log(req.body);
            let query=`INSERT INTO mallas (idmallas, estado) VALUES ('${idmallas}', 'A')`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"mallas se dio de Alta correctamente"
                    });
                }else{
                    console.log(err)
                }
            })
      
    
});

//metodo para eliminar los datos en particular
router.delete('/mallas/:idmallas', (req, res)=>{
   let idmallas  = req.params.idmallas; 
   jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    if(error){
        res.sendStatus(403);
    }else{
        let query=`DELETE FROM mallas WHERE idmallas='${idmallas}'`;
        mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('El Id que ELIMINAMOS es : '+registros);
                }else{
                    res.send('El error  es : '+ err); 
                }
            })
        }
    })
});

//.Devuelve  todos los datos remeras
router.get('/remeras', (req, res)=>{
    // jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
        // }else{
        mysqlConeccion.query('select * from remeras order by estado, idremeras', (err, registro)=>{
            if(!err){
                res.json(registro);
            }else{
                console.log(err)
            }
        })
    //     }
    // })
});


router.put('/cambioremeras/:id', (req, res)=>{
     let idremeras  = req.params.idremeras;
     let estado=req.body.estado  
     
     let query=`UPDATE remeras SET estado='${estado}' WHERE idremeras='${idremeras}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"El estado de remeras se cambio correctamente"
            });
        }else{
            res.json({
                status: false,
                mensaje:"Hubo un error"
            });
        }
    })
    
});
// alta
router.put('/remeras/:id', (req, res)=>{
    let idremeras  = req.params.idremeras;
    let query=`UPDATE remeras SET estado='A' WHERE idremeras='${idremeras}'`;

     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"remeras se dio de Alta correctamente"
            });
        }else{
           res.json({
                status: false,
                mensaje:"Hubo un error"
            });
        }
    })
    
});

router.get('/remeras/:idremeras',(req, res)=>{

        const  { idremeras } = req.params;
                mysqlConeccion.query('select * from remeras where idremeras=?',[idremeras], (err, registros)=>{
                    if(!err){
                        res.json(registros);
                    }else{
                        console.log(err)
                    }
                })
       
    });

router.post('/remeras', (req, res)=>{
    const { idremeras } =req.body
     console.log(req.body);
            let query=`INSERT INTO remeras (idremeras, estado) VALUES ('${idremeras}', 'A')`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"remeras se dio de Alta correctamente"
                    });
                }else{
                    console.log(err)
                }
            })
      
    
});

//metodo para eliminar los datos en particular
router.delete('/remeras/:idremeras', (req, res)=>{
   let idremeras  = req.params.idremeras; 
   jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    if(error){
        res.sendStatus(403);
    }else{
        let query=`DELETE FROM remeras WHERE idremeras='${idremeras}'`;
        mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('El Id que ELIMINAMOS es : '+registros);
                }else{
                    res.send('El error  es : '+ err); 
                }
            })
        }
    })
});

//Devuelve a todos los Proveedores activos de nuestra base de datos 
router.get('/Proveedores', verificarToken, (req, res)=>{
    
    jwt.verify(req.token, 'siliconKey', (error)=>{
        if(error){
            res.sendStatus(403);
        }else{
            const query='select * from Proveedores';
            mysqlConeccion.query(query, (err, rows)=>{
                if(!err){
                    res.json(rows);
                }else{
                    console.log(err)
                }
            })
        }
    });    
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

 //Devuelve a todos los Clientes activos de nuestra base de datos 
router.get('/Clientes', verificarToken, (req, res)=>{
    
    jwt.verify(req.token, 'siliconKey', (error)=>{
        if(error){
            res.sendStatus(403);
        }else{
            const query='select * from Clientes';
            mysqlConeccion.query(query, (err, rows)=>{
                if(!err){
                    res.json(rows);
                }else{
                    console.log(err)
                }
            })
        }
    });    
});

//metodo para insertar Clientes a travez del metodo POST
router.post('/Clientes', (req, res)=>{
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

//metodo para eliminar los datos de un Cliente en particular
router.delete('/Clientes/:id',verificarToken ,(req, res)=>{
    //asigna a id_alumno el valor que recibe por el parametro 
    let idClientes  = req.params.idClientes; 
    jwt.verify(req.token, 'siliconKey', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            let query=`DELETE FROM Clientes WHERE idClientes='${idClientes}'`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('El cliente que ELIMINAMOS es ID : '+idClientes);
                }else{
                    res.send('El error  es : '+ err); 
                }
            })
        }
    })
 });

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

