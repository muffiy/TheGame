import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  require: ['ts-node/register'],
  generates: {
    './graphql/autogen/types.ts': {
      schema: '../../schema.graphql',
      documents: ['graphql/**/*.ts', '!graphql/composeDB/**'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-urql',
        { add: { content: '/* eslint-disable */' } },
      ],
      config: {
        withHooks: true,
        gqlImport: 'fake-tag',
        skipTypename: true,
        dedupeOperationSuffix: true,
        documentMode: 'documentNode',
        emitLegacyCommonJSImports: false,

        // This generates typenames more in line with the rest
        // of the codebase, but, unfortunately, player_role and
        // PlayerRole create the same output name
        // namingConvention:
        //   transformUnderscore: true
      },
    },
  },
};

export default config;
