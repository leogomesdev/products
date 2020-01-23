import { GqlOptionsFactory, GqlModuleOptions } from "@nestjs/graphql";
import { Injectable } from "@nestjs/common";
import { join } from "path";

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  createGqlOptions(): GqlModuleOptions {
    return {
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    };
  }
}