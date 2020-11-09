const { ApolloServer, gql } = require("apollo-server");

const users = [
    {
      id: '1',
      name: 'Elizabeth Bennet'
    },
    {
      id: '2',
      name: 'Fitzwilliam Darcy'
    }
  ]

const typeDefs = gql`

type User {
    id:ID! 
    name:String!
}

 type Query{
     numberSix:Int!
     hello:String!
     user(id:ID!):User
  }




`;
const resolvers = {
   
  Query: {
      numberSix : () => 6  , 
      hello:  () => "hello world ",

      user (parent , args , context , info  ){

        return users.find(user => user.id === args.id) 
      }
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
