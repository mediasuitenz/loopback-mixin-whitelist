
/**
 * Add this mixin to a model to disable all API methods by default,
 * then supply a whitelist of exposed methods.
 *
 * Based on https://gist.github.com/ratik/5252e4c168a8c29329c0
 * Discussion here https://github.com/strongloop/loopback/issues/651
 */

module.exports = function (Model, options) {
  if (Model && Model.sharedClass) {
    var methodsToExpose = options.expose || []
    var methods = Model.sharedClass.methods()
    var relationMethods = []
    try {
      Object.keys(Model.definition.settings.relations).forEach(function (relation) {
        relationMethods.push({ name: '__findById__' + relation, isStatic: false })
        relationMethods.push({ name: '__destroyById__' + relation, isStatic: false })
        relationMethods.push({ name: '__updateById__' + relation, isStatic: false })
        relationMethods.push({ name: '__exists__' + relation, isStatic: false })
        relationMethods.push({ name: '__link__' + relation, isStatic: false })
        relationMethods.push({ name: '__get__' + relation, isStatic: false })
        relationMethods.push({ name: '__create__' + relation, isStatic: false })
        relationMethods.push({ name: '__update__' + relation, isStatic: false })
        relationMethods.push({ name: '__destroy__' + relation, isStatic: false })
        relationMethods.push({ name: '__unlink__' + relation, isStatic: false })
        relationMethods.push({ name: '__count__' + relation, isStatic: false })
        relationMethods.push({ name: '__delete__' + relation, isStatic: false })
      })
    } catch (err) {}
    methods.concat(relationMethods).forEach(function (method) {
      var methodName = method.name
      if (methodsToExpose.indexOf(methodName) < 0) {
        Model.disableRemoteMethod(methodName, method.isStatic)
      }
    })
  }
}
