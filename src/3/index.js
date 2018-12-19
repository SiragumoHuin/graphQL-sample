const {GraphQLServer} = require('graphql-yoga');

const resolvers = {
    Query: {
        text: (obj, args, context, info) => {
            console.log(args);
            console.log(args.textCondition.textId);
            let text;
            if (args.textCondition.textId === 'T1000') {
                text =
                    {
                        textId: 'T1000',
                        textData: 'Hello GraphQL',
                    };
            }
            return text;
        },
    },
};

const server = new GraphQLServer(
    {
        typeDefs: './src/3/text.graphql',
        resolvers,
    }
);
server.start(() => console.log(`Server is running on http://localhost:4000`));
