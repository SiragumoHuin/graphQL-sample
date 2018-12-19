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
    Mutation: {
        // create
        createText: (root, args) => {
            console.log(args);
            const text = {
                textId: 'T2000',
                textData: args.textCreateInput.textData,
                length: args.textCreateInput.textData.length,
                bot: true,
                version: 1.1,
                rank: 'GOLD',
                createDate: "2018-12-20T10:57:34",
                updateDate: "2018-12-20T10:57:34",
            };
            return text
        },
        // update
        updateText: (root, args) => {
            console.log(args);
            let text;
            if (args.textUpdateInput.textId === 'T2000') {
                text = {
                    textId: 'T2000',
                    textData: args.textUpdateInput.textData,
                    length: args.textUpdateInput.textData.length,
                    bot: true,
                    version: 1.1,
                    rank: 'GOLD',
                    createDate: "2018-12-20T10:57:34",
                    updateDate: "2018-12-20T10:57:34",
                };
            }
            return text
        },
        // delete
        deleteText: (root, args) => {
            console.log(args);
            const mutationResult = {
                errorCode: '200',
                validationError: [
                    {
                        fieldName: 'fieldNameString',
                        validationCode: 'validationCodeString'
                    },
                    {
                        fieldName: 'fieldNameString2',
                        validationCode: 'validationCodeString2'
                    }
                ]
            };
            return mutationResult
        }
    }
};

const server = new GraphQLServer(
    {
        typeDefs: './src/7/text.graphql',
        resolvers,
    }
);
server.start(() => console.log(`Server is running on http://localhost:4000`));
