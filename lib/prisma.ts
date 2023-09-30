// // // /lib/prisma.ts
// import { PrismaClient } from '@prisma/client'
// // import { PrismaClient } from '@prisma/client'

// let prisma: PrismaClient

// // declare global {
// //   var prisma: PrismaClient;
// // }
// const globalForPrisma = globalThis as unknown as {
//     prisma: PrismaClient | undefined
//     }

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient()
// } else {
//   if (!globalForPrisma.prisma) {
//     console.log('a new psisma client was created')
//     globalForPrisma.prisma = new PrismaClient()
//   }
//   prisma = globalForPrisma.prisma
// }
// export default prisma
