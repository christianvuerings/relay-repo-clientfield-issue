const { graphql, buildSchema } = require('graphql');
const fs = require('fs');
const assert = require('node:assert');

const relayExtensions = fs.readFileSync('node_modules/relay-compiler/relay-extensions.graphql', 'utf8');
const schema = buildSchema(`
	type Query {
		node: String
	}
${relayExtensions}`);

graphql({
  schema,
  source: '{ hello }',
  rootValue: `{
		hello: () => {
			return 'Hello world!';
		},
	}`
}).then((response) => {
	console.log(response.errors);
	assert.equal(response.errors[0].message, 'Name "__clientField" must not begin with "__", which is reserved by GraphQL introspection.');
});
