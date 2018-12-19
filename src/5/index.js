const {GraphQLServer} = require('graphql-yoga');

const resolvers = {
    Query: {
        text: (obj, args, context, info) => {
            console.log(args);
            let textData = 'Hello GraphQL';
            const text = [
                    {
                        textId: 'T1000',
                        textData: textData,
                        length: textData.length,
                        bot: true,
                        version: 1.1,
                        rank: 'GOLD',
                        createDate: "2018-12-20T10:57:34",
                        updateDate: "2018-12-20T10:57:34",
                    }
                ]
            ;
            return text;
        },
    },
};

const server = new GraphQLServer(
    {
        typeDefs: './src/5/text.graphql',
        resolvers,
    }
);
server.start(() => console.log(`Server is running on http://localhost:4000`));
