// import { PrismaClient } from '@prisma/client'

// const prismaClientSingleton = () => {
//     console.log('a new psisma client was created')
//   return new PrismaClient()
// }

// type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClientSingleton | undefined
// }

// const prisma = globalForPrisma.prisma ?? prismaClientSingleton()


// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// 
// 
// 
// other method from next js website

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

// import { PrismaClient } from '@prisma/client';

// let prisma;

// if (process.env.NODE_ENV === 'production') {
//     prisma = new PrismaClient();
// } else {
//     if (!global.prisma) {
//         global.prisma = new PrismaClient();
//     }
//     prisma = global.prisma;
// }



// export default prisma

import {PrismaClient} from "@prisma/client";

// import Adapters from "next-auth/adapters";

const prismaClientPropertyName = `__prevent-name-collision__prisma`;
type GlobalThisWithPrismaClient = typeof globalThis & {
	[prismaClientPropertyName]: PrismaClient;
};

const getPrismaClient = () => {
	if (process.env.NODE_ENV === `production`) {
    console.log('in prodution, created prisma client')
		return new PrismaClient();
	} else {
		const newGlobalThis = globalThis as GlobalThisWithPrismaClient;
		if (!newGlobalThis[prismaClientPropertyName]) {
      console.log('in dev, created prisma client')
			newGlobalThis[prismaClientPropertyName] = new PrismaClient();
		}
		return newGlobalThis[prismaClientPropertyName];
	}
};

const prisma = getPrismaClient();

export default prisma;

// export default Adapters.Prisma.Adapter({prisma});
