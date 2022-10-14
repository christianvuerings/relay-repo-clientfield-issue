# RelayJS: repro __clientField issue

## Repro steps

```
# 1. Clone the repo

# 2. Install dependencies
npm install

# 3. Execute index.js
node index.js
```

## Output

```
GraphQLError: Name "__clientField" must not begin with "__", which is reserved by GraphQL introspection.
```
