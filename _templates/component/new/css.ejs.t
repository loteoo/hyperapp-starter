---
to: src/views/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>/<%= h.inflection.dasherize(name.toLowerCase()) %>.css
---
.<%= h.inflection.dasherize(name.toLowerCase()) %> {

}
 