require('dotenv').config()
const {ApolloServer  , gql } = require('apollo-server') 
const mongoose = require('mongoose') 


const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

const typeDefs = gql`

type Book {
    title:String 
    author: String 
}

type Query {
    books:[Book]
}

`
const resolvers = {Query : {
    books: () =>books 
}}
const server = new ApolloServer({typeDefs , resolvers , playground:true , introspection:true}  ) ; 

server.listen().then(({url})=>{
    console.log("Server ready at " + url );
})