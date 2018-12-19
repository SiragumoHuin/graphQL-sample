const {GraphQLServer} = require('graphql-yoga');

const resolvers = {
    Query: {
        text: (obj, args, context, info) => {
            // 本当はDBなどから取得する
            const text =
                {
                    textData: 'Hello GraphQL',
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
