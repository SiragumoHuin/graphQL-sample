const {GraphQLServer} = require('graphql-yoga');

const resolvers = {
    Query: {
        text: (obj, args, context, info) => {
            const text =
                {
                    text: 'Hello GraphQL',
                };
            return text;
        },
    },
};

const server = new GraphQLServer(
    {
        typeDefs: './src/1/text.graphql',
        resolvers,
    }
);
server.start(() => console.log(`Server is running on http://localhost:4000`));
