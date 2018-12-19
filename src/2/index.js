const {GraphQLServer} = require('graphql-yoga');

const resolvers = {
    Query: {
        text: (obj, args, context, info) => {
            const text =
                {
                    textId: 'bgw8y83hgw',
                    text: 'Hello GraphQL',
                };
            return text;
        },
    },
};

const server = new GraphQLServer(
    {
        typeDefs: './src/2/text.graphql',
        resolvers,
    }
);
server.start(() => console.log(`Server is running on http://localhost:4000`));
