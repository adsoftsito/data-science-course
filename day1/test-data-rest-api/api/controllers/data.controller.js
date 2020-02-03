const { Estados } = require('../models'); // Sequelize
const { Municipios } = require('../models'); // Sequelize

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
module.exports = {
    getMunicipios,
    getEstados,
   // GS_CT_ERR_GAMESYSTEM_NOT_FOUND,
   // GS_CT_DELETED_SUCCESSFULLY,
    MODULE_NAME
  }

    