const {GraphQLServer} = require('graphql-yoga');

const resolvers = {
    Query: {
        text: (obj, args, context, info) => {
            console.log(args);
            // 本当はIDを使ってDBから複数件取得します
            const text = [
                {
                    textId: 'T1000',
                    textData: 'Hello GraphQL',
                },
                {
                    textId: 'T1001',
                    textData: 'こんにちは GraphQL',
                },
            ];
            return text;
        },
    },
};

const server = new GraphQLServer(
    {
        typeDefs: './src/4/text.graphql',
        resolvers,
    }
);
server.start(() => console.log(`Server is running on http://localhost:4000`));
