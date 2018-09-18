/**
 * PropertyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    getProperties:  (req, res) => {
        Property.find()
            .then(properties => {
                return res.ok({
                    message: 'Fetch.Success',
                    data: properties
                  });
            })
            .catch(err =>{
                return res.serverError({
                    message: 'Fetch.failed',
                    error: err
                  });
            })
    },
    updatePropertyStatus:  (req, res) => {
        PropertyService.updatePropertyStatus(req.body.status,req.params.id)
            .then(property =>{
                res.json({
                    'message': 'Updated.Successfully',
                    'data': property
                });
            })
            .catch(err => {
                res.json({
                    'message': 'Server.Error',
                    'error': err
                });
            })
    }
};

