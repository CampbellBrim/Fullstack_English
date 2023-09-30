export const typeDefs = `
type LessonPlan {
    id: ID
    title: String
    description: String
    url: String
    category: String
    imageUrl: String
    users: [String]
}

type Query {
    lessonPlans: [LessonPlan]!
    lessonById(id: ID!): LessonPlan!
}
` 