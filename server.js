import { gql } from "apollo-server"

// gql is a tag function so we can used it to tag a template literal
const typeDefs = gql`
    type Query {
        greeting: String
    }
`
console.log(typeDefs)
