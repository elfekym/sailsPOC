module.exports = {

  updatePropertyStatus: async function (status, id) {
    const updatedProperty = await Property.updateOne({
        _id: id
      }, {
        status: status
      });

    if(updatedProperty)
      return Promise.resolve(updatedProperty);
    return Promise.reject('Invalid');
  }
};
