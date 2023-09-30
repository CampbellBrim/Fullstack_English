// // // pages/api/graphql.ts

// import { PageConfig } from "next";
// import { ApolloServer } from "@apollo/server";
// import { create } from "domain";
// import { createContext } from "vm";

// // import { createSchema, createYoga } from 'graphql-yoga'
// // import type { NextApiRequest, NextApiResponse } from 'next'
// // // import { resolvers } from '../../graphql/resolvers'
// // import { resolvers } from '../../../graphql/graphql'
// // // import { typeDefs } from '../../graphql/schema'
// // import { typeDefs } from '../../../graphql/schema'


// // export default createYoga<{
// //   req: NextApiRequest
// //   res: NextApiResponse
// // }>({
// //   schema: createSchema({
// //     typeDefs,
// //     resolvers
// //   }),
// //   graphqlEndpoint: '/api/graphql'
// // })

// // export const config = {
// //   api: {
// //     bodyParser: false
// //   }
// // }

// export const config: PageConfig = {
//   api: {
//     bodyParser: false
//   }
// };

// const apolloServer = new ApolloServer({
//   context: createContext,

// })