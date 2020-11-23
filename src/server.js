const { ApolloServer, gql } = require("apollo-server");



const typeDefs = gql`

 type Query{
     numberSix:Int!
     hello:String!
  }




`;
const resolvers = {
   
  Query: {
      numberSix : () => 6  , 
      hello:  () => "hello world ",

     
},

};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  
  playground: true,
  introspection: true,
  tracing:true 
});

server.listen().then(({ url }) => {
  console.log("Server ready at " + url);
});
