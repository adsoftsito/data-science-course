const { Estados } = require('../models'); // Sequelize
const { Municipios } = require('../models'); // Sequelize
const { Bancos } = require('../models'); // Sequelize
const { Censos } = require('../models'); // Sequelize
const { Denues } = require('../models'); // Sequelize

const MODULE_NAME = '[GameSystem Controller]';
// get estados

function getEstados(req, res) {

    try {
        console.log("Estados...");
        console.log(Estados);
        Estados.findAll({
            /*include: [{
            model: orderstatus
            }]
    
                include: [{ all: true, nested: true }]*/
            })
        .then((estados) => {
            console.log(estados);
            res.status(200).send(estados);
            //utils.writeJson(res, consoles);
        }, (error) => {
            res.status(500).send(error);
        });
    
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, getEstados.name, error, res);
    }
    
}
    
function getMunicipios(req, res) {
    try {
          
      var params = {
        entidad:   req.swagger.params.entidad.value
      };
  
      console.log("municipios..." + params);
      console.log(Municipios);
      Municipios.findAll(
        {
          /*include: [{
            model: Internets,
            nested: false,
            as: 'Internets',
            attributes: ['habitadas'],
          }]
         // include: [{ all: true, nested: true }]
          , */
            where: {
              idestado : params.entidad
            }
            //attributes: ['cve_mun', 'municipio'],
        })
      .then((consoles) => {
        console.log(consoles);
        res.status(200).send(consoles);
        //utils.writeJson(res, consoles);
      }, (error) => {
        console.log("error : " + error);
        res.status(500).send(error);
      });
   
     } catch (error) {
       controllerHelper.handleErrorResponse(MODULE_NAME, getGameSystems.name, error, res);
     }
    
}

function getBancos(req, res) {
  try {
        
    //var params = {
    //  entidad:   req.swagger.params.entidad.value
    //};

    console.log("Bancos...");
    console.log(Bancos);
    Bancos.findAll(
      {
        /*include: [{
          model: Internets,
          nested: false,
          as: 'Internets',
          attributes: ['habitadas'],
        }]
       // include: [{ all: true, nested: true }]
        , */
        //  where: {
        //    idestado : params.entidad
        //  }
          //attributes: ['cve_mun', 'municipio'],
      })
    .then((bancos) => {
      console.log(bancos);
      res.status(200).send(bancos);
      //utils.writeJson(res, consoles);
    }, (error) => {
      console.log("error : " + error);
      res.status(500).send(error);
    });
 
   } catch (error) {
     controllerHelper.handleErrorResponse(MODULE_NAME, getBancos.name, error, res);
   }
  
}


function getCensosByMun(req, res) {
  try {
        
    var params = {
      entidad:   req.swagger.params.entidad.value,
      municipio: req.swagger.params.municipio.value
    };

    console.log("censos..." + params);
    console.log(Censos);
    Censos.findAll({
     /*include: [{
       model: orderstatus
      
     }]
 
     include: [{ all: true, nested: true }]*/
     where: {
      idestado : params.entidad,
      idmunicipio : params.municipio,
      
    }
       })
    .then((censos) => {
      //console.log(consoles);
      res.status(200).send(censos);
      //utils.writeJson(res, consoles);
    }, (error) => {
      console.log("error : " + error);
      res.status(500).send(error);
    });
 
   } catch (error) {
     controllerHelper.handleErrorResponse(MODULE_NAME, getCensosByMun.name, error, res);
   }
  
}



function getCensosByEdo(req, res) {
  try {
        
    var params = {
      entidad:   req.swagger.params.entidad.value
    };

    console.log("censos..." + params);
    console.log(Censos);
    Censos.findAll({
     /*include: [{
       model: orderstatus
      
     }]
 
     include: [{ all: true, nested: true }]*/
     where: {
      idestado : params.entidad,
      actividad: 'Total municipal'

    }
       })
    .then((censos) => {
      //console.log(consoles);
      res.status(200).send(censos);
      //utils.writeJson(res, consoles);
    }, (error) => {
      console.log("error : " + error);
      res.status(500).send(error);
    });
 
   } catch (error) {
     controllerHelper.handleErrorResponse(MODULE_NAME, getCensosByEdo.name, error, res);
   }
  
}


function getDenues(req, res) {
  try {
        
    var params = {
      entidad:   req.swagger.params.entidad.value,
      municipio: req.swagger.params.municipio.value
    };

    console.log("Denues..." + params);
    console.log(Denues);
    Denues.findAll({
     /*include: [{
       model: orderstatus
      
     }]
 
     include: [{ all: true, nested: true }]*/
     where: {
      cve_ent : params.entidad,
      cve_mun : params.municipio
    }
       })
    .then((consoles) => {
      //console.log(consoles);
      res.status(200).send(consoles);
      //utils.writeJson(res, consoles);
    }, (error) => {
      console.log("error : " + error);
      res.status(500).send(error);
    });
 
   } catch (error) {
     controllerHelper.handleErrorResponse(MODULE_NAME, getGameSystems.name, error, res);
   }
  

}

module.exports = {
    getMunicipios,
    getEstados,
    getBancos,
    getCensosByMun,
    getCensosByEdo,

    // GS_CT_ERR_GAMESYSTEM_NOT_FOUND,
   // GS_CT_DELETED_SUCCESSFULLY,
    MODULE_NAME
  }

    