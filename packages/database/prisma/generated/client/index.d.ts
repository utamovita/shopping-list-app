/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Group
 *
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>;
/**
 * Model GroupMembership
 *
 */
export type GroupMembership =
  $Result.DefaultSelection<Prisma.$GroupMembershipPayload>;
/**
 * Model ShoppingListItem
 *
 */
export type ShoppingListItem =
  $Result.DefaultSelection<Prisma.$ShoppingListItemPayload>;
/**
 * Model Notification
 *
 */
export type Notification =
  $Result.DefaultSelection<Prisma.$NotificationPayload>;
/**
 * Model Invitation
 *
 */
export type Invitation = $Result.DefaultSelection<Prisma.$InvitationPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
    ADMIN: "ADMIN";
    USER: "USER";
  };

  export type Role = (typeof Role)[keyof typeof Role];
}

export type Role = $Enums.Role;

export const Role: typeof $Enums.Role;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Groups
   * const groups = await prisma.group.findMany()
   * ```
   */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupMembership`: Exposes CRUD operations for the **GroupMembership** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more GroupMemberships
   * const groupMemberships = await prisma.groupMembership.findMany()
   * ```
   */
  get groupMembership(): Prisma.GroupMembershipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shoppingListItem`: Exposes CRUD operations for the **ShoppingListItem** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ShoppingListItems
   * const shoppingListItems = await prisma.shoppingListItem.findMany()
   * ```
   */
  get shoppingListItem(): Prisma.ShoppingListItemDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Notifications
   * const notifications = await prisma.notification.findMany()
   * ```
   */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitation`: Exposes CRUD operations for the **Invitation** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Invitations
   * const invitations = await prisma.invitation.findMany()
   * ```
   */
  get invitation(): Prisma.InvitationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    Group: "Group";
    GroupMembership: "GroupMembership";
    ShoppingListItem: "ShoppingListItem";
    Notification: "Notification";
    Invitation: "Invitation";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | "user"
        | "group"
        | "groupMembership"
        | "shoppingListItem"
        | "notification"
        | "invitation";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>;
        fields: Prisma.GroupFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>;
          };
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>;
          };
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[];
          };
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>;
          };
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[];
          };
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>;
          };
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>;
          };
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[];
          };
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>;
          };
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGroup>;
          };
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GroupGroupByOutputType>[];
          };
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>;
            result: $Utils.Optional<GroupCountAggregateOutputType> | number;
          };
        };
      };
      GroupMembership: {
        payload: Prisma.$GroupMembershipPayload<ExtArgs>;
        fields: Prisma.GroupMembershipFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.GroupMembershipFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.GroupMembershipFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload>;
          };
          findFirst: {
            args: Prisma.GroupMembershipFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.GroupMembershipFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload>;
          };
          findMany: {
            args: Prisma.GroupMembershipFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload>[];
          };
          create: {
            args: Prisma.GroupMembershipCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload>;
          };
          createMany: {
            args: Prisma.GroupMembershipCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.GroupMembershipCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload>[];
          };
          delete: {
            args: Prisma.GroupMembershipDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload>;
          };
          update: {
            args: Prisma.GroupMembershipUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload>;
          };
          deleteMany: {
            args: Prisma.GroupMembershipDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.GroupMembershipUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.GroupMembershipUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload>[];
          };
          upsert: {
            args: Prisma.GroupMembershipUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload>;
          };
          aggregate: {
            args: Prisma.GroupMembershipAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGroupMembership>;
          };
          groupBy: {
            args: Prisma.GroupMembershipGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GroupMembershipGroupByOutputType>[];
          };
          count: {
            args: Prisma.GroupMembershipCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<GroupMembershipCountAggregateOutputType>
              | number;
          };
        };
      };
      ShoppingListItem: {
        payload: Prisma.$ShoppingListItemPayload<ExtArgs>;
        fields: Prisma.ShoppingListItemFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ShoppingListItemFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ShoppingListItemFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>;
          };
          findFirst: {
            args: Prisma.ShoppingListItemFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ShoppingListItemFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>;
          };
          findMany: {
            args: Prisma.ShoppingListItemFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>[];
          };
          create: {
            args: Prisma.ShoppingListItemCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>;
          };
          createMany: {
            args: Prisma.ShoppingListItemCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ShoppingListItemCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>[];
          };
          delete: {
            args: Prisma.ShoppingListItemDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>;
          };
          update: {
            args: Prisma.ShoppingListItemUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>;
          };
          deleteMany: {
            args: Prisma.ShoppingListItemDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ShoppingListItemUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ShoppingListItemUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>[];
          };
          upsert: {
            args: Prisma.ShoppingListItemUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>;
          };
          aggregate: {
            args: Prisma.ShoppingListItemAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateShoppingListItem>;
          };
          groupBy: {
            args: Prisma.ShoppingListItemGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ShoppingListItemGroupByOutputType>[];
          };
          count: {
            args: Prisma.ShoppingListItemCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ShoppingListItemCountAggregateOutputType>
              | number;
          };
        };
      };
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>;
        fields: Prisma.NotificationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[];
          };
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[];
          };
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[];
          };
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateNotification>;
          };
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<NotificationGroupByOutputType>[];
          };
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<NotificationCountAggregateOutputType>
              | number;
          };
        };
      };
      Invitation: {
        payload: Prisma.$InvitationPayload<ExtArgs>;
        fields: Prisma.InvitationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.InvitationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.InvitationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>;
          };
          findFirst: {
            args: Prisma.InvitationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.InvitationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>;
          };
          findMany: {
            args: Prisma.InvitationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[];
          };
          create: {
            args: Prisma.InvitationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>;
          };
          createMany: {
            args: Prisma.InvitationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.InvitationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[];
          };
          delete: {
            args: Prisma.InvitationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>;
          };
          update: {
            args: Prisma.InvitationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>;
          };
          deleteMany: {
            args: Prisma.InvitationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.InvitationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.InvitationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[];
          };
          upsert: {
            args: Prisma.InvitationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>;
          };
          aggregate: {
            args: Prisma.InvitationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInvitation>;
          };
          groupBy: {
            args: Prisma.InvitationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InvitationGroupByOutputType>[];
          };
          count: {
            args: Prisma.InvitationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<InvitationCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    group?: GroupOmit;
    groupMembership?: GroupMembershipOmit;
    shoppingListItem?: ShoppingListItemOmit;
    notification?: NotificationOmit;
    invitation?: InvitationOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T["level"] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    memberships: number;
    notifications: number;
    sentInvitations: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs;
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs;
    sentInvitations?: boolean | UserCountOutputTypeCountSentInvitationsArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: GroupMembershipWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NotificationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentInvitationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InvitationWhereInput;
  };

  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    members: number;
    shoppingItems: number;
    invitations: number;
  };

  export type GroupCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    members?: boolean | GroupCountOutputTypeCountMembersArgs;
    shoppingItems?: boolean | GroupCountOutputTypeCountShoppingItemsArgs;
    invitations?: boolean | GroupCountOutputTypeCountInvitationsArgs;
  };

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMembersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: GroupMembershipWhereInput;
  };

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountShoppingItemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ShoppingListItemWhereInput;
  };

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountInvitationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InvitationWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    passwordHash: string | null;
    provider: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    passwordHash: string | null;
    provider: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    passwordHash: number;
    provider: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    passwordHash?: true;
    provider?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    passwordHash?: true;
    provider?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    passwordHash?: true;
    provider?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    name: string | null;
    passwordHash: string | null;
    provider: string;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      passwordHash?: boolean;
      provider?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      memberships?: boolean | User$membershipsArgs<ExtArgs>;
      notifications?: boolean | User$notificationsArgs<ExtArgs>;
      sentInvitations?: boolean | User$sentInvitationsArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      passwordHash?: boolean;
      provider?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      passwordHash?: boolean;
      provider?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    passwordHash?: boolean;
    provider?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "email"
    | "name"
    | "passwordHash"
    | "provider"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["user"]
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    memberships?: boolean | User$membershipsArgs<ExtArgs>;
    notifications?: boolean | User$notificationsArgs<ExtArgs>;
    sentInvitations?: boolean | User$sentInvitationsArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User";
    objects: {
      memberships: Prisma.$GroupMembershipPayload<ExtArgs>[];
      notifications: Prisma.$NotificationPayload<ExtArgs>[];
      sentInvitations: Prisma.$InvitationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        name: string | null;
        passwordHash: string | null;
        provider: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$membershipsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$GroupMembershipPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$notificationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$NotificationPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    sentInvitations<T extends User$sentInvitationsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$sentInvitationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$InvitationPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "String">;
    readonly email: FieldRef<"User", "String">;
    readonly name: FieldRef<"User", "String">;
    readonly passwordHash: FieldRef<"User", "String">;
    readonly provider: FieldRef<"User", "String">;
    readonly createdAt: FieldRef<"User", "DateTime">;
    readonly updatedAt: FieldRef<"User", "DateTime">;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.memberships
   */
  export type User$membershipsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null;
    where?: GroupMembershipWhereInput;
    orderBy?:
      | GroupMembershipOrderByWithRelationInput
      | GroupMembershipOrderByWithRelationInput[];
    cursor?: GroupMembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | GroupMembershipScalarFieldEnum
      | GroupMembershipScalarFieldEnum[];
  };

  /**
   * User.notifications
   */
  export type User$notificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    where?: NotificationWhereInput;
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    cursor?: NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * User.sentInvitations
   */
  export type User$sentInvitationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    where?: InvitationWhereInput;
    orderBy?:
      | InvitationOrderByWithRelationInput
      | InvitationOrderByWithRelationInput[];
    cursor?: InvitationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null;
    _min: GroupMinAggregateOutputType | null;
    _max: GroupMaxAggregateOutputType | null;
  };

  export type GroupMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type GroupMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type GroupCountAggregateOutputType = {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type GroupMinAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type GroupMaxAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type GroupCountAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type GroupAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Groups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Groups
     **/
    _count?: true | GroupCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GroupMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GroupMaxAggregateInputType;
  };

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
    [P in keyof T & keyof AggregateGroup]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>;
  };

  export type GroupGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: GroupWhereInput;
    orderBy?:
      | GroupOrderByWithAggregationInput
      | GroupOrderByWithAggregationInput[];
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum;
    having?: GroupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GroupCountAggregateInputType | true;
    _min?: GroupMinAggregateInputType;
    _max?: GroupMaxAggregateInputType;
  };

  export type GroupGroupByOutputType = {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: GroupCountAggregateOutputType | null;
    _min: GroupMinAggregateOutputType | null;
    _max: GroupMaxAggregateOutputType | null;
  };

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<GroupGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof GroupGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>;
        }
      >
    >;

  export type GroupSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      members?: boolean | Group$membersArgs<ExtArgs>;
      shoppingItems?: boolean | Group$shoppingItemsArgs<ExtArgs>;
      invitations?: boolean | Group$invitationsArgs<ExtArgs>;
      _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["group"]
  >;

  export type GroupSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["group"]
  >;

  export type GroupSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["group"]
  >;

  export type GroupSelectScalar = {
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type GroupOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "name" | "createdAt" | "updatedAt",
    ExtArgs["result"]["group"]
  >;
  export type GroupInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    members?: boolean | Group$membersArgs<ExtArgs>;
    shoppingItems?: boolean | Group$shoppingItemsArgs<ExtArgs>;
    invitations?: boolean | Group$invitationsArgs<ExtArgs>;
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type GroupIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type GroupIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $GroupPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Group";
    objects: {
      members: Prisma.$GroupMembershipPayload<ExtArgs>[];
      shoppingItems: Prisma.$ShoppingListItemPayload<ExtArgs>[];
      invitations: Prisma.$InvitationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["group"]
    >;
    composites: {};
  };

  type GroupGetPayload<
    S extends boolean | null | undefined | GroupDefaultArgs,
  > = $Result.GetResult<Prisma.$GroupPayload, S>;

  type GroupCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<GroupFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: GroupCountAggregateInputType | true;
  };

  export interface GroupDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Group"];
      meta: { name: "Group" };
    };
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(
      args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>,
    ): Prisma__GroupClient<
      $Result.GetResult<
        Prisma.$GroupPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(
      args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__GroupClient<
      $Result.GetResult<
        Prisma.$GroupPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(
      args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>,
    ): Prisma__GroupClient<
      $Result.GetResult<
        Prisma.$GroupPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__GroupClient<
      $Result.GetResult<
        Prisma.$GroupPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     *
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     *
     */
    findMany<T extends GroupFindManyArgs>(
      args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GroupPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     *
     */
    create<T extends GroupCreateArgs>(
      args: SelectSubset<T, GroupCreateArgs<ExtArgs>>,
    ): Prisma__GroupClient<
      $Result.GetResult<
        Prisma.$GroupPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends GroupCreateManyArgs>(
      args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(
      args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GroupPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     *
     */
    delete<T extends GroupDeleteArgs>(
      args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>,
    ): Prisma__GroupClient<
      $Result.GetResult<
        Prisma.$GroupPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends GroupUpdateArgs>(
      args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>,
    ): Prisma__GroupClient<
      $Result.GetResult<
        Prisma.$GroupPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends GroupDeleteManyArgs>(
      args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends GroupUpdateManyArgs>(
      args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(
      args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GroupPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(
      args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>,
    ): Prisma__GroupClient<
      $Result.GetResult<
        Prisma.$GroupPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
     **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], GroupCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends GroupAggregateArgs>(
      args: Subset<T, GroupAggregateArgs>,
    ): Prisma.PrismaPromise<GetGroupAggregateType<T>>;

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs["orderBy"] }
        : { orderBy?: GroupGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetGroupGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Group model
     */
    readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    members<T extends Group$membersArgs<ExtArgs> = {}>(
      args?: Subset<T, Group$membersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$GroupMembershipPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    shoppingItems<T extends Group$shoppingItemsArgs<ExtArgs> = {}>(
      args?: Subset<T, Group$shoppingItemsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ShoppingListItemPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    invitations<T extends Group$invitationsArgs<ExtArgs> = {}>(
      args?: Subset<T, Group$invitationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$InvitationPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", "String">;
    readonly name: FieldRef<"Group", "String">;
    readonly createdAt: FieldRef<"Group", "DateTime">;
    readonly updatedAt: FieldRef<"Group", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null;
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput;
  };

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null;
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput;
  };

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null;
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Groups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[];
  };

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null;
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Groups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[];
  };

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null;
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Groups.
     */
    skip?: number;
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[];
  };

  /**
   * Group create
   */
  export type GroupCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null;
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>;
  };

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null;
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Group update
   */
  export type GroupUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null;
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>;
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput;
  };

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>;
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput;
    /**
     * Limit how many Groups to update.
     */
    limit?: number;
  };

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null;
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>;
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput;
    /**
     * Limit how many Groups to update.
     */
    limit?: number;
  };

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null;
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput;
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>;
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>;
  };

  /**
   * Group delete
   */
  export type GroupDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null;
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput;
  };

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput;
    /**
     * Limit how many Groups to delete.
     */
    limit?: number;
  };

  /**
   * Group.members
   */
  export type Group$membersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null;
    where?: GroupMembershipWhereInput;
    orderBy?:
      | GroupMembershipOrderByWithRelationInput
      | GroupMembershipOrderByWithRelationInput[];
    cursor?: GroupMembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | GroupMembershipScalarFieldEnum
      | GroupMembershipScalarFieldEnum[];
  };

  /**
   * Group.shoppingItems
   */
  export type Group$shoppingItemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null;
    where?: ShoppingListItemWhereInput;
    orderBy?:
      | ShoppingListItemOrderByWithRelationInput
      | ShoppingListItemOrderByWithRelationInput[];
    cursor?: ShoppingListItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | ShoppingListItemScalarFieldEnum
      | ShoppingListItemScalarFieldEnum[];
  };

  /**
   * Group.invitations
   */
  export type Group$invitationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    where?: InvitationWhereInput;
    orderBy?:
      | InvitationOrderByWithRelationInput
      | InvitationOrderByWithRelationInput[];
    cursor?: InvitationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[];
  };

  /**
   * Group without action
   */
  export type GroupDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null;
  };

  /**
   * Model GroupMembership
   */

  export type AggregateGroupMembership = {
    _count: GroupMembershipCountAggregateOutputType | null;
    _min: GroupMembershipMinAggregateOutputType | null;
    _max: GroupMembershipMaxAggregateOutputType | null;
  };

  export type GroupMembershipMinAggregateOutputType = {
    userId: string | null;
    groupId: string | null;
    role: $Enums.Role | null;
  };

  export type GroupMembershipMaxAggregateOutputType = {
    userId: string | null;
    groupId: string | null;
    role: $Enums.Role | null;
  };

  export type GroupMembershipCountAggregateOutputType = {
    userId: number;
    groupId: number;
    role: number;
    _all: number;
  };

  export type GroupMembershipMinAggregateInputType = {
    userId?: true;
    groupId?: true;
    role?: true;
  };

  export type GroupMembershipMaxAggregateInputType = {
    userId?: true;
    groupId?: true;
    role?: true;
  };

  export type GroupMembershipCountAggregateInputType = {
    userId?: true;
    groupId?: true;
    role?: true;
    _all?: true;
  };

  export type GroupMembershipAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which GroupMembership to aggregate.
     */
    where?: GroupMembershipWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GroupMemberships to fetch.
     */
    orderBy?:
      | GroupMembershipOrderByWithRelationInput
      | GroupMembershipOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: GroupMembershipWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GroupMemberships from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GroupMemberships.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned GroupMemberships
     **/
    _count?: true | GroupMembershipCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GroupMembershipMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GroupMembershipMaxAggregateInputType;
  };

  export type GetGroupMembershipAggregateType<
    T extends GroupMembershipAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateGroupMembership]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMembership[P]>
      : GetScalarType<T[P], AggregateGroupMembership[P]>;
  };

  export type GroupMembershipGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: GroupMembershipWhereInput;
    orderBy?:
      | GroupMembershipOrderByWithAggregationInput
      | GroupMembershipOrderByWithAggregationInput[];
    by: GroupMembershipScalarFieldEnum[] | GroupMembershipScalarFieldEnum;
    having?: GroupMembershipScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GroupMembershipCountAggregateInputType | true;
    _min?: GroupMembershipMinAggregateInputType;
    _max?: GroupMembershipMaxAggregateInputType;
  };

  export type GroupMembershipGroupByOutputType = {
    userId: string;
    groupId: string;
    role: $Enums.Role;
    _count: GroupMembershipCountAggregateOutputType | null;
    _min: GroupMembershipMinAggregateOutputType | null;
    _max: GroupMembershipMaxAggregateOutputType | null;
  };

  type GetGroupMembershipGroupByPayload<T extends GroupMembershipGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<GroupMembershipGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof GroupMembershipGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMembershipGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMembershipGroupByOutputType[P]>;
        }
      >
    >;

  export type GroupMembershipSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      groupId?: boolean;
      role?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      group?: boolean | GroupDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["groupMembership"]
  >;

  export type GroupMembershipSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      groupId?: boolean;
      role?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      group?: boolean | GroupDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["groupMembership"]
  >;

  export type GroupMembershipSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      groupId?: boolean;
      role?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      group?: boolean | GroupDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["groupMembership"]
  >;

  export type GroupMembershipSelectScalar = {
    userId?: boolean;
    groupId?: boolean;
    role?: boolean;
  };

  export type GroupMembershipOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "userId" | "groupId" | "role",
    ExtArgs["result"]["groupMembership"]
  >;
  export type GroupMembershipInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    group?: boolean | GroupDefaultArgs<ExtArgs>;
  };
  export type GroupMembershipIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    group?: boolean | GroupDefaultArgs<ExtArgs>;
  };
  export type GroupMembershipIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    group?: boolean | GroupDefaultArgs<ExtArgs>;
  };

  export type $GroupMembershipPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "GroupMembership";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      group: Prisma.$GroupPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        userId: string;
        groupId: string;
        role: $Enums.Role;
      },
      ExtArgs["result"]["groupMembership"]
    >;
    composites: {};
  };

  type GroupMembershipGetPayload<
    S extends boolean | null | undefined | GroupMembershipDefaultArgs,
  > = $Result.GetResult<Prisma.$GroupMembershipPayload, S>;

  type GroupMembershipCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    GroupMembershipFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: GroupMembershipCountAggregateInputType | true;
  };

  export interface GroupMembershipDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["GroupMembership"];
      meta: { name: "GroupMembership" };
    };
    /**
     * Find zero or one GroupMembership that matches the filter.
     * @param {GroupMembershipFindUniqueArgs} args - Arguments to find a GroupMembership
     * @example
     * // Get one GroupMembership
     * const groupMembership = await prisma.groupMembership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupMembershipFindUniqueArgs>(
      args: SelectSubset<T, GroupMembershipFindUniqueArgs<ExtArgs>>,
    ): Prisma__GroupMembershipClient<
      $Result.GetResult<
        Prisma.$GroupMembershipPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one GroupMembership that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupMembershipFindUniqueOrThrowArgs} args - Arguments to find a GroupMembership
     * @example
     * // Get one GroupMembership
     * const groupMembership = await prisma.groupMembership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupMembershipFindUniqueOrThrowArgs>(
      args: SelectSubset<T, GroupMembershipFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__GroupMembershipClient<
      $Result.GetResult<
        Prisma.$GroupMembershipPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first GroupMembership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembershipFindFirstArgs} args - Arguments to find a GroupMembership
     * @example
     * // Get one GroupMembership
     * const groupMembership = await prisma.groupMembership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupMembershipFindFirstArgs>(
      args?: SelectSubset<T, GroupMembershipFindFirstArgs<ExtArgs>>,
    ): Prisma__GroupMembershipClient<
      $Result.GetResult<
        Prisma.$GroupMembershipPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first GroupMembership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembershipFindFirstOrThrowArgs} args - Arguments to find a GroupMembership
     * @example
     * // Get one GroupMembership
     * const groupMembership = await prisma.groupMembership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupMembershipFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GroupMembershipFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__GroupMembershipClient<
      $Result.GetResult<
        Prisma.$GroupMembershipPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more GroupMemberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMemberships
     * const groupMemberships = await prisma.groupMembership.findMany()
     *
     * // Get first 10 GroupMemberships
     * const groupMemberships = await prisma.groupMembership.findMany({ take: 10 })
     *
     * // Only select the `userId`
     * const groupMembershipWithUserIdOnly = await prisma.groupMembership.findMany({ select: { userId: true } })
     *
     */
    findMany<T extends GroupMembershipFindManyArgs>(
      args?: SelectSubset<T, GroupMembershipFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GroupMembershipPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a GroupMembership.
     * @param {GroupMembershipCreateArgs} args - Arguments to create a GroupMembership.
     * @example
     * // Create one GroupMembership
     * const GroupMembership = await prisma.groupMembership.create({
     *   data: {
     *     // ... data to create a GroupMembership
     *   }
     * })
     *
     */
    create<T extends GroupMembershipCreateArgs>(
      args: SelectSubset<T, GroupMembershipCreateArgs<ExtArgs>>,
    ): Prisma__GroupMembershipClient<
      $Result.GetResult<
        Prisma.$GroupMembershipPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many GroupMemberships.
     * @param {GroupMembershipCreateManyArgs} args - Arguments to create many GroupMemberships.
     * @example
     * // Create many GroupMemberships
     * const groupMembership = await prisma.groupMembership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends GroupMembershipCreateManyArgs>(
      args?: SelectSubset<T, GroupMembershipCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many GroupMemberships and returns the data saved in the database.
     * @param {GroupMembershipCreateManyAndReturnArgs} args - Arguments to create many GroupMemberships.
     * @example
     * // Create many GroupMemberships
     * const groupMembership = await prisma.groupMembership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many GroupMemberships and only return the `userId`
     * const groupMembershipWithUserIdOnly = await prisma.groupMembership.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends GroupMembershipCreateManyAndReturnArgs>(
      args?: SelectSubset<T, GroupMembershipCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GroupMembershipPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a GroupMembership.
     * @param {GroupMembershipDeleteArgs} args - Arguments to delete one GroupMembership.
     * @example
     * // Delete one GroupMembership
     * const GroupMembership = await prisma.groupMembership.delete({
     *   where: {
     *     // ... filter to delete one GroupMembership
     *   }
     * })
     *
     */
    delete<T extends GroupMembershipDeleteArgs>(
      args: SelectSubset<T, GroupMembershipDeleteArgs<ExtArgs>>,
    ): Prisma__GroupMembershipClient<
      $Result.GetResult<
        Prisma.$GroupMembershipPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one GroupMembership.
     * @param {GroupMembershipUpdateArgs} args - Arguments to update one GroupMembership.
     * @example
     * // Update one GroupMembership
     * const groupMembership = await prisma.groupMembership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends GroupMembershipUpdateArgs>(
      args: SelectSubset<T, GroupMembershipUpdateArgs<ExtArgs>>,
    ): Prisma__GroupMembershipClient<
      $Result.GetResult<
        Prisma.$GroupMembershipPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more GroupMemberships.
     * @param {GroupMembershipDeleteManyArgs} args - Arguments to filter GroupMemberships to delete.
     * @example
     * // Delete a few GroupMemberships
     * const { count } = await prisma.groupMembership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends GroupMembershipDeleteManyArgs>(
      args?: SelectSubset<T, GroupMembershipDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more GroupMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMemberships
     * const groupMembership = await prisma.groupMembership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends GroupMembershipUpdateManyArgs>(
      args: SelectSubset<T, GroupMembershipUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more GroupMemberships and returns the data updated in the database.
     * @param {GroupMembershipUpdateManyAndReturnArgs} args - Arguments to update many GroupMemberships.
     * @example
     * // Update many GroupMemberships
     * const groupMembership = await prisma.groupMembership.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more GroupMemberships and only return the `userId`
     * const groupMembershipWithUserIdOnly = await prisma.groupMembership.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends GroupMembershipUpdateManyAndReturnArgs>(
      args: SelectSubset<T, GroupMembershipUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GroupMembershipPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one GroupMembership.
     * @param {GroupMembershipUpsertArgs} args - Arguments to update or create a GroupMembership.
     * @example
     * // Update or create a GroupMembership
     * const groupMembership = await prisma.groupMembership.upsert({
     *   create: {
     *     // ... data to create a GroupMembership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMembership we want to update
     *   }
     * })
     */
    upsert<T extends GroupMembershipUpsertArgs>(
      args: SelectSubset<T, GroupMembershipUpsertArgs<ExtArgs>>,
    ): Prisma__GroupMembershipClient<
      $Result.GetResult<
        Prisma.$GroupMembershipPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of GroupMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembershipCountArgs} args - Arguments to filter GroupMemberships to count.
     * @example
     * // Count the number of GroupMemberships
     * const count = await prisma.groupMembership.count({
     *   where: {
     *     // ... the filter for the GroupMemberships we want to count
     *   }
     * })
     **/
    count<T extends GroupMembershipCountArgs>(
      args?: Subset<T, GroupMembershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], GroupMembershipCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a GroupMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends GroupMembershipAggregateArgs>(
      args: Subset<T, GroupMembershipAggregateArgs>,
    ): Prisma.PrismaPromise<GetGroupMembershipAggregateType<T>>;

    /**
     * Group by GroupMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembershipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends GroupMembershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMembershipGroupByArgs["orderBy"] }
        : { orderBy?: GroupMembershipGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, GroupMembershipGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetGroupMembershipGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the GroupMembership model
     */
    readonly fields: GroupMembershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMembership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMembershipClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, GroupDefaultArgs<ExtArgs>>,
    ): Prisma__GroupClient<
      | $Result.GetResult<
          Prisma.$GroupPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the GroupMembership model
   */
  interface GroupMembershipFieldRefs {
    readonly userId: FieldRef<"GroupMembership", "String">;
    readonly groupId: FieldRef<"GroupMembership", "String">;
    readonly role: FieldRef<"GroupMembership", "Role">;
  }

  // Custom InputTypes
  /**
   * GroupMembership findUnique
   */
  export type GroupMembershipFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null;
    /**
     * Filter, which GroupMembership to fetch.
     */
    where: GroupMembershipWhereUniqueInput;
  };

  /**
   * GroupMembership findUniqueOrThrow
   */
  export type GroupMembershipFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null;
    /**
     * Filter, which GroupMembership to fetch.
     */
    where: GroupMembershipWhereUniqueInput;
  };

  /**
   * GroupMembership findFirst
   */
  export type GroupMembershipFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null;
    /**
     * Filter, which GroupMembership to fetch.
     */
    where?: GroupMembershipWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GroupMemberships to fetch.
     */
    orderBy?:
      | GroupMembershipOrderByWithRelationInput
      | GroupMembershipOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for GroupMemberships.
     */
    cursor?: GroupMembershipWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GroupMemberships from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GroupMemberships.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GroupMemberships.
     */
    distinct?:
      | GroupMembershipScalarFieldEnum
      | GroupMembershipScalarFieldEnum[];
  };

  /**
   * GroupMembership findFirstOrThrow
   */
  export type GroupMembershipFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null;
    /**
     * Filter, which GroupMembership to fetch.
     */
    where?: GroupMembershipWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GroupMemberships to fetch.
     */
    orderBy?:
      | GroupMembershipOrderByWithRelationInput
      | GroupMembershipOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for GroupMemberships.
     */
    cursor?: GroupMembershipWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GroupMemberships from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GroupMemberships.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GroupMemberships.
     */
    distinct?:
      | GroupMembershipScalarFieldEnum
      | GroupMembershipScalarFieldEnum[];
  };

  /**
   * GroupMembership findMany
   */
  export type GroupMembershipFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null;
    /**
     * Filter, which GroupMemberships to fetch.
     */
    where?: GroupMembershipWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GroupMemberships to fetch.
     */
    orderBy?:
      | GroupMembershipOrderByWithRelationInput
      | GroupMembershipOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing GroupMemberships.
     */
    cursor?: GroupMembershipWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GroupMemberships from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GroupMemberships.
     */
    skip?: number;
    distinct?:
      | GroupMembershipScalarFieldEnum
      | GroupMembershipScalarFieldEnum[];
  };

  /**
   * GroupMembership create
   */
  export type GroupMembershipCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null;
    /**
     * The data needed to create a GroupMembership.
     */
    data: XOR<GroupMembershipCreateInput, GroupMembershipUncheckedCreateInput>;
  };

  /**
   * GroupMembership createMany
   */
  export type GroupMembershipCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many GroupMemberships.
     */
    data: GroupMembershipCreateManyInput | GroupMembershipCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * GroupMembership createManyAndReturn
   */
  export type GroupMembershipCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null;
    /**
     * The data used to create many GroupMemberships.
     */
    data: GroupMembershipCreateManyInput | GroupMembershipCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * GroupMembership update
   */
  export type GroupMembershipUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null;
    /**
     * The data needed to update a GroupMembership.
     */
    data: XOR<GroupMembershipUpdateInput, GroupMembershipUncheckedUpdateInput>;
    /**
     * Choose, which GroupMembership to update.
     */
    where: GroupMembershipWhereUniqueInput;
  };

  /**
   * GroupMembership updateMany
   */
  export type GroupMembershipUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update GroupMemberships.
     */
    data: XOR<
      GroupMembershipUpdateManyMutationInput,
      GroupMembershipUncheckedUpdateManyInput
    >;
    /**
     * Filter which GroupMemberships to update
     */
    where?: GroupMembershipWhereInput;
    /**
     * Limit how many GroupMemberships to update.
     */
    limit?: number;
  };

  /**
   * GroupMembership updateManyAndReturn
   */
  export type GroupMembershipUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null;
    /**
     * The data used to update GroupMemberships.
     */
    data: XOR<
      GroupMembershipUpdateManyMutationInput,
      GroupMembershipUncheckedUpdateManyInput
    >;
    /**
     * Filter which GroupMemberships to update
     */
    where?: GroupMembershipWhereInput;
    /**
     * Limit how many GroupMemberships to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * GroupMembership upsert
   */
  export type GroupMembershipUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null;
    /**
     * The filter to search for the GroupMembership to update in case it exists.
     */
    where: GroupMembershipWhereUniqueInput;
    /**
     * In case the GroupMembership found by the `where` argument doesn't exist, create a new GroupMembership with this data.
     */
    create: XOR<
      GroupMembershipCreateInput,
      GroupMembershipUncheckedCreateInput
    >;
    /**
     * In case the GroupMembership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      GroupMembershipUpdateInput,
      GroupMembershipUncheckedUpdateInput
    >;
  };

  /**
   * GroupMembership delete
   */
  export type GroupMembershipDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null;
    /**
     * Filter which GroupMembership to delete.
     */
    where: GroupMembershipWhereUniqueInput;
  };

  /**
   * GroupMembership deleteMany
   */
  export type GroupMembershipDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which GroupMemberships to delete
     */
    where?: GroupMembershipWhereInput;
    /**
     * Limit how many GroupMemberships to delete.
     */
    limit?: number;
  };

  /**
   * GroupMembership without action
   */
  export type GroupMembershipDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null;
  };

  /**
   * Model ShoppingListItem
   */

  export type AggregateShoppingListItem = {
    _count: ShoppingListItemCountAggregateOutputType | null;
    _min: ShoppingListItemMinAggregateOutputType | null;
    _max: ShoppingListItemMaxAggregateOutputType | null;
  };

  export type ShoppingListItemMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    completed: boolean | null;
    addedBy: string | null;
    createdAt: Date | null;
    groupId: string | null;
  };

  export type ShoppingListItemMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    completed: boolean | null;
    addedBy: string | null;
    createdAt: Date | null;
    groupId: string | null;
  };

  export type ShoppingListItemCountAggregateOutputType = {
    id: number;
    name: number;
    completed: number;
    addedBy: number;
    createdAt: number;
    groupId: number;
    _all: number;
  };

  export type ShoppingListItemMinAggregateInputType = {
    id?: true;
    name?: true;
    completed?: true;
    addedBy?: true;
    createdAt?: true;
    groupId?: true;
  };

  export type ShoppingListItemMaxAggregateInputType = {
    id?: true;
    name?: true;
    completed?: true;
    addedBy?: true;
    createdAt?: true;
    groupId?: true;
  };

  export type ShoppingListItemCountAggregateInputType = {
    id?: true;
    name?: true;
    completed?: true;
    addedBy?: true;
    createdAt?: true;
    groupId?: true;
    _all?: true;
  };

  export type ShoppingListItemAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ShoppingListItem to aggregate.
     */
    where?: ShoppingListItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShoppingListItems to fetch.
     */
    orderBy?:
      | ShoppingListItemOrderByWithRelationInput
      | ShoppingListItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ShoppingListItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShoppingListItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShoppingListItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ShoppingListItems
     **/
    _count?: true | ShoppingListItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ShoppingListItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ShoppingListItemMaxAggregateInputType;
  };

  export type GetShoppingListItemAggregateType<
    T extends ShoppingListItemAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateShoppingListItem]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingListItem[P]>
      : GetScalarType<T[P], AggregateShoppingListItem[P]>;
  };

  export type ShoppingListItemGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ShoppingListItemWhereInput;
    orderBy?:
      | ShoppingListItemOrderByWithAggregationInput
      | ShoppingListItemOrderByWithAggregationInput[];
    by: ShoppingListItemScalarFieldEnum[] | ShoppingListItemScalarFieldEnum;
    having?: ShoppingListItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShoppingListItemCountAggregateInputType | true;
    _min?: ShoppingListItemMinAggregateInputType;
    _max?: ShoppingListItemMaxAggregateInputType;
  };

  export type ShoppingListItemGroupByOutputType = {
    id: string;
    name: string;
    completed: boolean;
    addedBy: string | null;
    createdAt: Date;
    groupId: string;
    _count: ShoppingListItemCountAggregateOutputType | null;
    _min: ShoppingListItemMinAggregateOutputType | null;
    _max: ShoppingListItemMaxAggregateOutputType | null;
  };

  type GetShoppingListItemGroupByPayload<
    T extends ShoppingListItemGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShoppingListItemGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof ShoppingListItemGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ShoppingListItemGroupByOutputType[P]>
          : GetScalarType<T[P], ShoppingListItemGroupByOutputType[P]>;
      }
    >
  >;

  export type ShoppingListItemSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      completed?: boolean;
      addedBy?: boolean;
      createdAt?: boolean;
      groupId?: boolean;
      group?: boolean | GroupDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["shoppingListItem"]
  >;

  export type ShoppingListItemSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      completed?: boolean;
      addedBy?: boolean;
      createdAt?: boolean;
      groupId?: boolean;
      group?: boolean | GroupDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["shoppingListItem"]
  >;

  export type ShoppingListItemSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      completed?: boolean;
      addedBy?: boolean;
      createdAt?: boolean;
      groupId?: boolean;
      group?: boolean | GroupDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["shoppingListItem"]
  >;

  export type ShoppingListItemSelectScalar = {
    id?: boolean;
    name?: boolean;
    completed?: boolean;
    addedBy?: boolean;
    createdAt?: boolean;
    groupId?: boolean;
  };

  export type ShoppingListItemOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "name" | "completed" | "addedBy" | "createdAt" | "groupId",
    ExtArgs["result"]["shoppingListItem"]
  >;
  export type ShoppingListItemInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    group?: boolean | GroupDefaultArgs<ExtArgs>;
  };
  export type ShoppingListItemIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    group?: boolean | GroupDefaultArgs<ExtArgs>;
  };
  export type ShoppingListItemIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    group?: boolean | GroupDefaultArgs<ExtArgs>;
  };

  export type $ShoppingListItemPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "ShoppingListItem";
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        completed: boolean;
        addedBy: string | null;
        createdAt: Date;
        groupId: string;
      },
      ExtArgs["result"]["shoppingListItem"]
    >;
    composites: {};
  };

  type ShoppingListItemGetPayload<
    S extends boolean | null | undefined | ShoppingListItemDefaultArgs,
  > = $Result.GetResult<Prisma.$ShoppingListItemPayload, S>;

  type ShoppingListItemCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ShoppingListItemFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: ShoppingListItemCountAggregateInputType | true;
  };

  export interface ShoppingListItemDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["ShoppingListItem"];
      meta: { name: "ShoppingListItem" };
    };
    /**
     * Find zero or one ShoppingListItem that matches the filter.
     * @param {ShoppingListItemFindUniqueArgs} args - Arguments to find a ShoppingListItem
     * @example
     * // Get one ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShoppingListItemFindUniqueArgs>(
      args: SelectSubset<T, ShoppingListItemFindUniqueArgs<ExtArgs>>,
    ): Prisma__ShoppingListItemClient<
      $Result.GetResult<
        Prisma.$ShoppingListItemPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ShoppingListItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShoppingListItemFindUniqueOrThrowArgs} args - Arguments to find a ShoppingListItem
     * @example
     * // Get one ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShoppingListItemFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ShoppingListItemFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ShoppingListItemClient<
      $Result.GetResult<
        Prisma.$ShoppingListItemPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ShoppingListItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemFindFirstArgs} args - Arguments to find a ShoppingListItem
     * @example
     * // Get one ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShoppingListItemFindFirstArgs>(
      args?: SelectSubset<T, ShoppingListItemFindFirstArgs<ExtArgs>>,
    ): Prisma__ShoppingListItemClient<
      $Result.GetResult<
        Prisma.$ShoppingListItemPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ShoppingListItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemFindFirstOrThrowArgs} args - Arguments to find a ShoppingListItem
     * @example
     * // Get one ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShoppingListItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ShoppingListItemFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ShoppingListItemClient<
      $Result.GetResult<
        Prisma.$ShoppingListItemPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ShoppingListItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingListItems
     * const shoppingListItems = await prisma.shoppingListItem.findMany()
     *
     * // Get first 10 ShoppingListItems
     * const shoppingListItems = await prisma.shoppingListItem.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shoppingListItemWithIdOnly = await prisma.shoppingListItem.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShoppingListItemFindManyArgs>(
      args?: SelectSubset<T, ShoppingListItemFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ShoppingListItemPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ShoppingListItem.
     * @param {ShoppingListItemCreateArgs} args - Arguments to create a ShoppingListItem.
     * @example
     * // Create one ShoppingListItem
     * const ShoppingListItem = await prisma.shoppingListItem.create({
     *   data: {
     *     // ... data to create a ShoppingListItem
     *   }
     * })
     *
     */
    create<T extends ShoppingListItemCreateArgs>(
      args: SelectSubset<T, ShoppingListItemCreateArgs<ExtArgs>>,
    ): Prisma__ShoppingListItemClient<
      $Result.GetResult<
        Prisma.$ShoppingListItemPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ShoppingListItems.
     * @param {ShoppingListItemCreateManyArgs} args - Arguments to create many ShoppingListItems.
     * @example
     * // Create many ShoppingListItems
     * const shoppingListItem = await prisma.shoppingListItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShoppingListItemCreateManyArgs>(
      args?: SelectSubset<T, ShoppingListItemCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ShoppingListItems and returns the data saved in the database.
     * @param {ShoppingListItemCreateManyAndReturnArgs} args - Arguments to create many ShoppingListItems.
     * @example
     * // Create many ShoppingListItems
     * const shoppingListItem = await prisma.shoppingListItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ShoppingListItems and only return the `id`
     * const shoppingListItemWithIdOnly = await prisma.shoppingListItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ShoppingListItemCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ShoppingListItemCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ShoppingListItemPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ShoppingListItem.
     * @param {ShoppingListItemDeleteArgs} args - Arguments to delete one ShoppingListItem.
     * @example
     * // Delete one ShoppingListItem
     * const ShoppingListItem = await prisma.shoppingListItem.delete({
     *   where: {
     *     // ... filter to delete one ShoppingListItem
     *   }
     * })
     *
     */
    delete<T extends ShoppingListItemDeleteArgs>(
      args: SelectSubset<T, ShoppingListItemDeleteArgs<ExtArgs>>,
    ): Prisma__ShoppingListItemClient<
      $Result.GetResult<
        Prisma.$ShoppingListItemPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ShoppingListItem.
     * @param {ShoppingListItemUpdateArgs} args - Arguments to update one ShoppingListItem.
     * @example
     * // Update one ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShoppingListItemUpdateArgs>(
      args: SelectSubset<T, ShoppingListItemUpdateArgs<ExtArgs>>,
    ): Prisma__ShoppingListItemClient<
      $Result.GetResult<
        Prisma.$ShoppingListItemPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ShoppingListItems.
     * @param {ShoppingListItemDeleteManyArgs} args - Arguments to filter ShoppingListItems to delete.
     * @example
     * // Delete a few ShoppingListItems
     * const { count } = await prisma.shoppingListItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShoppingListItemDeleteManyArgs>(
      args?: SelectSubset<T, ShoppingListItemDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ShoppingListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingListItems
     * const shoppingListItem = await prisma.shoppingListItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShoppingListItemUpdateManyArgs>(
      args: SelectSubset<T, ShoppingListItemUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ShoppingListItems and returns the data updated in the database.
     * @param {ShoppingListItemUpdateManyAndReturnArgs} args - Arguments to update many ShoppingListItems.
     * @example
     * // Update many ShoppingListItems
     * const shoppingListItem = await prisma.shoppingListItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ShoppingListItems and only return the `id`
     * const shoppingListItemWithIdOnly = await prisma.shoppingListItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ShoppingListItemUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ShoppingListItemUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ShoppingListItemPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ShoppingListItem.
     * @param {ShoppingListItemUpsertArgs} args - Arguments to update or create a ShoppingListItem.
     * @example
     * // Update or create a ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.upsert({
     *   create: {
     *     // ... data to create a ShoppingListItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingListItem we want to update
     *   }
     * })
     */
    upsert<T extends ShoppingListItemUpsertArgs>(
      args: SelectSubset<T, ShoppingListItemUpsertArgs<ExtArgs>>,
    ): Prisma__ShoppingListItemClient<
      $Result.GetResult<
        Prisma.$ShoppingListItemPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ShoppingListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemCountArgs} args - Arguments to filter ShoppingListItems to count.
     * @example
     * // Count the number of ShoppingListItems
     * const count = await prisma.shoppingListItem.count({
     *   where: {
     *     // ... the filter for the ShoppingListItems we want to count
     *   }
     * })
     **/
    count<T extends ShoppingListItemCountArgs>(
      args?: Subset<T, ShoppingListItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ShoppingListItemCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ShoppingListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ShoppingListItemAggregateArgs>(
      args: Subset<T, ShoppingListItemAggregateArgs>,
    ): Prisma.PrismaPromise<GetShoppingListItemAggregateType<T>>;

    /**
     * Group by ShoppingListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ShoppingListItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShoppingListItemGroupByArgs["orderBy"] }
        : { orderBy?: ShoppingListItemGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ShoppingListItemGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetShoppingListItemGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ShoppingListItem model
     */
    readonly fields: ShoppingListItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShoppingListItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShoppingListItemClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, GroupDefaultArgs<ExtArgs>>,
    ): Prisma__GroupClient<
      | $Result.GetResult<
          Prisma.$GroupPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ShoppingListItem model
   */
  interface ShoppingListItemFieldRefs {
    readonly id: FieldRef<"ShoppingListItem", "String">;
    readonly name: FieldRef<"ShoppingListItem", "String">;
    readonly completed: FieldRef<"ShoppingListItem", "Boolean">;
    readonly addedBy: FieldRef<"ShoppingListItem", "String">;
    readonly createdAt: FieldRef<"ShoppingListItem", "DateTime">;
    readonly groupId: FieldRef<"ShoppingListItem", "String">;
  }

  // Custom InputTypes
  /**
   * ShoppingListItem findUnique
   */
  export type ShoppingListItemFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null;
    /**
     * Filter, which ShoppingListItem to fetch.
     */
    where: ShoppingListItemWhereUniqueInput;
  };

  /**
   * ShoppingListItem findUniqueOrThrow
   */
  export type ShoppingListItemFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null;
    /**
     * Filter, which ShoppingListItem to fetch.
     */
    where: ShoppingListItemWhereUniqueInput;
  };

  /**
   * ShoppingListItem findFirst
   */
  export type ShoppingListItemFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null;
    /**
     * Filter, which ShoppingListItem to fetch.
     */
    where?: ShoppingListItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShoppingListItems to fetch.
     */
    orderBy?:
      | ShoppingListItemOrderByWithRelationInput
      | ShoppingListItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShoppingListItems.
     */
    cursor?: ShoppingListItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShoppingListItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShoppingListItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShoppingListItems.
     */
    distinct?:
      | ShoppingListItemScalarFieldEnum
      | ShoppingListItemScalarFieldEnum[];
  };

  /**
   * ShoppingListItem findFirstOrThrow
   */
  export type ShoppingListItemFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null;
    /**
     * Filter, which ShoppingListItem to fetch.
     */
    where?: ShoppingListItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShoppingListItems to fetch.
     */
    orderBy?:
      | ShoppingListItemOrderByWithRelationInput
      | ShoppingListItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShoppingListItems.
     */
    cursor?: ShoppingListItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShoppingListItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShoppingListItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShoppingListItems.
     */
    distinct?:
      | ShoppingListItemScalarFieldEnum
      | ShoppingListItemScalarFieldEnum[];
  };

  /**
   * ShoppingListItem findMany
   */
  export type ShoppingListItemFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null;
    /**
     * Filter, which ShoppingListItems to fetch.
     */
    where?: ShoppingListItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShoppingListItems to fetch.
     */
    orderBy?:
      | ShoppingListItemOrderByWithRelationInput
      | ShoppingListItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ShoppingListItems.
     */
    cursor?: ShoppingListItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShoppingListItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShoppingListItems.
     */
    skip?: number;
    distinct?:
      | ShoppingListItemScalarFieldEnum
      | ShoppingListItemScalarFieldEnum[];
  };

  /**
   * ShoppingListItem create
   */
  export type ShoppingListItemCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null;
    /**
     * The data needed to create a ShoppingListItem.
     */
    data: XOR<
      ShoppingListItemCreateInput,
      ShoppingListItemUncheckedCreateInput
    >;
  };

  /**
   * ShoppingListItem createMany
   */
  export type ShoppingListItemCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ShoppingListItems.
     */
    data: ShoppingListItemCreateManyInput | ShoppingListItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ShoppingListItem createManyAndReturn
   */
  export type ShoppingListItemCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null;
    /**
     * The data used to create many ShoppingListItems.
     */
    data: ShoppingListItemCreateManyInput | ShoppingListItemCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ShoppingListItem update
   */
  export type ShoppingListItemUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null;
    /**
     * The data needed to update a ShoppingListItem.
     */
    data: XOR<
      ShoppingListItemUpdateInput,
      ShoppingListItemUncheckedUpdateInput
    >;
    /**
     * Choose, which ShoppingListItem to update.
     */
    where: ShoppingListItemWhereUniqueInput;
  };

  /**
   * ShoppingListItem updateMany
   */
  export type ShoppingListItemUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ShoppingListItems.
     */
    data: XOR<
      ShoppingListItemUpdateManyMutationInput,
      ShoppingListItemUncheckedUpdateManyInput
    >;
    /**
     * Filter which ShoppingListItems to update
     */
    where?: ShoppingListItemWhereInput;
    /**
     * Limit how many ShoppingListItems to update.
     */
    limit?: number;
  };

  /**
   * ShoppingListItem updateManyAndReturn
   */
  export type ShoppingListItemUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null;
    /**
     * The data used to update ShoppingListItems.
     */
    data: XOR<
      ShoppingListItemUpdateManyMutationInput,
      ShoppingListItemUncheckedUpdateManyInput
    >;
    /**
     * Filter which ShoppingListItems to update
     */
    where?: ShoppingListItemWhereInput;
    /**
     * Limit how many ShoppingListItems to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ShoppingListItem upsert
   */
  export type ShoppingListItemUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null;
    /**
     * The filter to search for the ShoppingListItem to update in case it exists.
     */
    where: ShoppingListItemWhereUniqueInput;
    /**
     * In case the ShoppingListItem found by the `where` argument doesn't exist, create a new ShoppingListItem with this data.
     */
    create: XOR<
      ShoppingListItemCreateInput,
      ShoppingListItemUncheckedCreateInput
    >;
    /**
     * In case the ShoppingListItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      ShoppingListItemUpdateInput,
      ShoppingListItemUncheckedUpdateInput
    >;
  };

  /**
   * ShoppingListItem delete
   */
  export type ShoppingListItemDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null;
    /**
     * Filter which ShoppingListItem to delete.
     */
    where: ShoppingListItemWhereUniqueInput;
  };

  /**
   * ShoppingListItem deleteMany
   */
  export type ShoppingListItemDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ShoppingListItems to delete
     */
    where?: ShoppingListItemWhereInput;
    /**
     * Limit how many ShoppingListItems to delete.
     */
    limit?: number;
  };

  /**
   * ShoppingListItem without action
   */
  export type ShoppingListItemDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null;
  };

  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null;
    _min: NotificationMinAggregateOutputType | null;
    _max: NotificationMaxAggregateOutputType | null;
  };

  export type NotificationMinAggregateOutputType = {
    id: string | null;
    message: string | null;
    read: boolean | null;
    createdAt: Date | null;
    userId: string | null;
  };

  export type NotificationMaxAggregateOutputType = {
    id: string | null;
    message: string | null;
    read: boolean | null;
    createdAt: Date | null;
    userId: string | null;
  };

  export type NotificationCountAggregateOutputType = {
    id: number;
    message: number;
    read: number;
    createdAt: number;
    userId: number;
    _all: number;
  };

  export type NotificationMinAggregateInputType = {
    id?: true;
    message?: true;
    read?: true;
    createdAt?: true;
    userId?: true;
  };

  export type NotificationMaxAggregateInputType = {
    id?: true;
    message?: true;
    read?: true;
    createdAt?: true;
    userId?: true;
  };

  export type NotificationCountAggregateInputType = {
    id?: true;
    message?: true;
    read?: true;
    createdAt?: true;
    userId?: true;
    _all?: true;
  };

  export type NotificationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Notifications
     **/
    _count?: true | NotificationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: NotificationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: NotificationMaxAggregateInputType;
  };

  export type GetNotificationAggregateType<
    T extends NotificationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateNotification]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>;
  };

  export type NotificationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NotificationWhereInput;
    orderBy?:
      | NotificationOrderByWithAggregationInput
      | NotificationOrderByWithAggregationInput[];
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum;
    having?: NotificationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificationCountAggregateInputType | true;
    _min?: NotificationMinAggregateInputType;
    _max?: NotificationMaxAggregateInputType;
  };

  export type NotificationGroupByOutputType = {
    id: string;
    message: string;
    read: boolean;
    createdAt: Date;
    userId: string;
    _count: NotificationCountAggregateOutputType | null;
    _min: NotificationMinAggregateOutputType | null;
    _max: NotificationMaxAggregateOutputType | null;
  };

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<NotificationGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof NotificationGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>;
        }
      >
    >;

  export type NotificationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      message?: boolean;
      read?: boolean;
      createdAt?: boolean;
      userId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["notification"]
  >;

  export type NotificationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      message?: boolean;
      read?: boolean;
      createdAt?: boolean;
      userId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["notification"]
  >;

  export type NotificationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      message?: boolean;
      read?: boolean;
      createdAt?: boolean;
      userId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["notification"]
  >;

  export type NotificationSelectScalar = {
    id?: boolean;
    message?: boolean;
    read?: boolean;
    createdAt?: boolean;
    userId?: boolean;
  };

  export type NotificationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "message" | "read" | "createdAt" | "userId",
    ExtArgs["result"]["notification"]
  >;
  export type NotificationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type NotificationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type NotificationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $NotificationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Notification";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        message: string;
        read: boolean;
        createdAt: Date;
        userId: string;
      },
      ExtArgs["result"]["notification"]
    >;
    composites: {};
  };

  type NotificationGetPayload<
    S extends boolean | null | undefined | NotificationDefaultArgs,
  > = $Result.GetResult<Prisma.$NotificationPayload, S>;

  type NotificationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    NotificationFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: NotificationCountAggregateInputType | true;
  };

  export interface NotificationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Notification"];
      meta: { name: "Notification" };
    };
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(
      args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(
      args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     *
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     *
     */
    findMany<T extends NotificationFindManyArgs>(
      args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     *
     */
    create<T extends NotificationCreateArgs>(
      args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends NotificationCreateManyArgs>(
      args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     *
     */
    delete<T extends NotificationDeleteArgs>(
      args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends NotificationUpdateArgs>(
      args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends NotificationDeleteManyArgs>(
      args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends NotificationUpdateManyArgs>(
      args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(
      args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
     **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], NotificationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends NotificationAggregateArgs>(
      args: Subset<T, NotificationAggregateArgs>,
    ): Prisma.PrismaPromise<GetNotificationAggregateType<T>>;

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs["orderBy"] }
        : { orderBy?: NotificationGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetNotificationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Notification model
     */
    readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", "String">;
    readonly message: FieldRef<"Notification", "String">;
    readonly read: FieldRef<"Notification", "Boolean">;
    readonly createdAt: FieldRef<"Notification", "DateTime">;
    readonly userId: FieldRef<"Notification", "String">;
  }

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput;
  };

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput;
  };

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * Notification create
   */
  export type NotificationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>;
  };

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>;
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput;
  };

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<
      NotificationUpdateManyMutationInput,
      NotificationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput;
    /**
     * Limit how many Notifications to update.
     */
    limit?: number;
  };

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * The data used to update Notifications.
     */
    data: XOR<
      NotificationUpdateManyMutationInput,
      NotificationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput;
    /**
     * Limit how many Notifications to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput;
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>;
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>;
  };

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput;
  };

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput;
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number;
  };

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
  };

  /**
   * Model Invitation
   */

  export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null;
    _min: InvitationMinAggregateOutputType | null;
    _max: InvitationMaxAggregateOutputType | null;
  };

  export type InvitationMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    groupId: string | null;
    invitedByUserId: string | null;
  };

  export type InvitationMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    groupId: string | null;
    invitedByUserId: string | null;
  };

  export type InvitationCountAggregateOutputType = {
    id: number;
    email: number;
    createdAt: number;
    updatedAt: number;
    groupId: number;
    invitedByUserId: number;
    _all: number;
  };

  export type InvitationMinAggregateInputType = {
    id?: true;
    email?: true;
    createdAt?: true;
    updatedAt?: true;
    groupId?: true;
    invitedByUserId?: true;
  };

  export type InvitationMaxAggregateInputType = {
    id?: true;
    email?: true;
    createdAt?: true;
    updatedAt?: true;
    groupId?: true;
    invitedByUserId?: true;
  };

  export type InvitationCountAggregateInputType = {
    id?: true;
    email?: true;
    createdAt?: true;
    updatedAt?: true;
    groupId?: true;
    invitedByUserId?: true;
    _all?: true;
  };

  export type InvitationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Invitation to aggregate.
     */
    where?: InvitationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invitations to fetch.
     */
    orderBy?:
      | InvitationOrderByWithRelationInput
      | InvitationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: InvitationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invitations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Invitations
     **/
    _count?: true | InvitationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InvitationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InvitationMaxAggregateInputType;
  };

  export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
    [P in keyof T & keyof AggregateInvitation]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitation[P]>
      : GetScalarType<T[P], AggregateInvitation[P]>;
  };

  export type InvitationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InvitationWhereInput;
    orderBy?:
      | InvitationOrderByWithAggregationInput
      | InvitationOrderByWithAggregationInput[];
    by: InvitationScalarFieldEnum[] | InvitationScalarFieldEnum;
    having?: InvitationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvitationCountAggregateInputType | true;
    _min?: InvitationMinAggregateInputType;
    _max?: InvitationMaxAggregateInputType;
  };

  export type InvitationGroupByOutputType = {
    id: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    groupId: string;
    invitedByUserId: string;
    _count: InvitationCountAggregateOutputType | null;
    _min: InvitationMinAggregateOutputType | null;
    _max: InvitationMaxAggregateOutputType | null;
  };

  type GetInvitationGroupByPayload<T extends InvitationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<InvitationGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof InvitationGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationGroupByOutputType[P]>;
        }
      >
    >;

  export type InvitationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      groupId?: boolean;
      invitedByUserId?: boolean;
      group?: boolean | GroupDefaultArgs<ExtArgs>;
      invitedByUser?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["invitation"]
  >;

  export type InvitationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      groupId?: boolean;
      invitedByUserId?: boolean;
      group?: boolean | GroupDefaultArgs<ExtArgs>;
      invitedByUser?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["invitation"]
  >;

  export type InvitationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      groupId?: boolean;
      invitedByUserId?: boolean;
      group?: boolean | GroupDefaultArgs<ExtArgs>;
      invitedByUser?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["invitation"]
  >;

  export type InvitationSelectScalar = {
    id?: boolean;
    email?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    groupId?: boolean;
    invitedByUserId?: boolean;
  };

  export type InvitationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "email" | "createdAt" | "updatedAt" | "groupId" | "invitedByUserId",
    ExtArgs["result"]["invitation"]
  >;
  export type InvitationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    group?: boolean | GroupDefaultArgs<ExtArgs>;
    invitedByUser?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type InvitationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    group?: boolean | GroupDefaultArgs<ExtArgs>;
    invitedByUser?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type InvitationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    group?: boolean | GroupDefaultArgs<ExtArgs>;
    invitedByUser?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $InvitationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Invitation";
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>;
      invitedByUser: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        groupId: string;
        invitedByUserId: string;
      },
      ExtArgs["result"]["invitation"]
    >;
    composites: {};
  };

  type InvitationGetPayload<
    S extends boolean | null | undefined | InvitationDefaultArgs,
  > = $Result.GetResult<Prisma.$InvitationPayload, S>;

  type InvitationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    InvitationFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: InvitationCountAggregateInputType | true;
  };

  export interface InvitationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Invitation"];
      meta: { name: "Invitation" };
    };
    /**
     * Find zero or one Invitation that matches the filter.
     * @param {InvitationFindUniqueArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvitationFindUniqueArgs>(
      args: SelectSubset<T, InvitationFindUniqueArgs<ExtArgs>>,
    ): Prisma__InvitationClient<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Invitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvitationFindUniqueOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvitationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, InvitationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__InvitationClient<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Invitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvitationFindFirstArgs>(
      args?: SelectSubset<T, InvitationFindFirstArgs<ExtArgs>>,
    ): Prisma__InvitationClient<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Invitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvitationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InvitationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__InvitationClient<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitation.findMany()
     *
     * // Get first 10 Invitations
     * const invitations = await prisma.invitation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const invitationWithIdOnly = await prisma.invitation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends InvitationFindManyArgs>(
      args?: SelectSubset<T, InvitationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Invitation.
     * @param {InvitationCreateArgs} args - Arguments to create a Invitation.
     * @example
     * // Create one Invitation
     * const Invitation = await prisma.invitation.create({
     *   data: {
     *     // ... data to create a Invitation
     *   }
     * })
     *
     */
    create<T extends InvitationCreateArgs>(
      args: SelectSubset<T, InvitationCreateArgs<ExtArgs>>,
    ): Prisma__InvitationClient<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Invitations.
     * @param {InvitationCreateManyArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InvitationCreateManyArgs>(
      args?: SelectSubset<T, InvitationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Invitations and returns the data saved in the database.
     * @param {InvitationCreateManyAndReturnArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends InvitationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, InvitationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Invitation.
     * @param {InvitationDeleteArgs} args - Arguments to delete one Invitation.
     * @example
     * // Delete one Invitation
     * const Invitation = await prisma.invitation.delete({
     *   where: {
     *     // ... filter to delete one Invitation
     *   }
     * })
     *
     */
    delete<T extends InvitationDeleteArgs>(
      args: SelectSubset<T, InvitationDeleteArgs<ExtArgs>>,
    ): Prisma__InvitationClient<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Invitation.
     * @param {InvitationUpdateArgs} args - Arguments to update one Invitation.
     * @example
     * // Update one Invitation
     * const invitation = await prisma.invitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InvitationUpdateArgs>(
      args: SelectSubset<T, InvitationUpdateArgs<ExtArgs>>,
    ): Prisma__InvitationClient<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Invitations.
     * @param {InvitationDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InvitationDeleteManyArgs>(
      args?: SelectSubset<T, InvitationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InvitationUpdateManyArgs>(
      args: SelectSubset<T, InvitationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Invitations and returns the data updated in the database.
     * @param {InvitationUpdateManyAndReturnArgs} args - Arguments to update many Invitations.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends InvitationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, InvitationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Invitation.
     * @param {InvitationUpsertArgs} args - Arguments to update or create a Invitation.
     * @example
     * // Update or create a Invitation
     * const invitation = await prisma.invitation.upsert({
     *   create: {
     *     // ... data to create a Invitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitation we want to update
     *   }
     * })
     */
    upsert<T extends InvitationUpsertArgs>(
      args: SelectSubset<T, InvitationUpsertArgs<ExtArgs>>,
    ): Prisma__InvitationClient<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitation.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
     **/
    count<T extends InvitationCountArgs>(
      args?: Subset<T, InvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], InvitationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends InvitationAggregateArgs>(
      args: Subset<T, InvitationAggregateArgs>,
    ): Prisma.PrismaPromise<GetInvitationAggregateType<T>>;

    /**
     * Group by Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends InvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationGroupByArgs["orderBy"] }
        : { orderBy?: InvitationGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, InvitationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetInvitationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Invitation model
     */
    readonly fields: InvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, GroupDefaultArgs<ExtArgs>>,
    ): Prisma__GroupClient<
      | $Result.GetResult<
          Prisma.$GroupPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    invitedByUser<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Invitation model
   */
  interface InvitationFieldRefs {
    readonly id: FieldRef<"Invitation", "String">;
    readonly email: FieldRef<"Invitation", "String">;
    readonly createdAt: FieldRef<"Invitation", "DateTime">;
    readonly updatedAt: FieldRef<"Invitation", "DateTime">;
    readonly groupId: FieldRef<"Invitation", "String">;
    readonly invitedByUserId: FieldRef<"Invitation", "String">;
  }

  // Custom InputTypes
  /**
   * Invitation findUnique
   */
  export type InvitationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput;
  };

  /**
   * Invitation findUniqueOrThrow
   */
  export type InvitationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput;
  };

  /**
   * Invitation findFirst
   */
  export type InvitationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invitations to fetch.
     */
    orderBy?:
      | InvitationOrderByWithRelationInput
      | InvitationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invitations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[];
  };

  /**
   * Invitation findFirstOrThrow
   */
  export type InvitationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invitations to fetch.
     */
    orderBy?:
      | InvitationOrderByWithRelationInput
      | InvitationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invitations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[];
  };

  /**
   * Invitation findMany
   */
  export type InvitationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invitations to fetch.
     */
    orderBy?:
      | InvitationOrderByWithRelationInput
      | InvitationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Invitations.
     */
    cursor?: InvitationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invitations.
     */
    skip?: number;
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[];
  };

  /**
   * Invitation create
   */
  export type InvitationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    /**
     * The data needed to create a Invitation.
     */
    data: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>;
  };

  /**
   * Invitation createMany
   */
  export type InvitationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Invitation createManyAndReturn
   */
  export type InvitationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Invitation update
   */
  export type InvitationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    /**
     * The data needed to update a Invitation.
     */
    data: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>;
    /**
     * Choose, which Invitation to update.
     */
    where: InvitationWhereUniqueInput;
  };

  /**
   * Invitation updateMany
   */
  export type InvitationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Invitations.
     */
    data: XOR<
      InvitationUpdateManyMutationInput,
      InvitationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput;
    /**
     * Limit how many Invitations to update.
     */
    limit?: number;
  };

  /**
   * Invitation updateManyAndReturn
   */
  export type InvitationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * The data used to update Invitations.
     */
    data: XOR<
      InvitationUpdateManyMutationInput,
      InvitationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput;
    /**
     * Limit how many Invitations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Invitation upsert
   */
  export type InvitationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    /**
     * The filter to search for the Invitation to update in case it exists.
     */
    where: InvitationWhereUniqueInput;
    /**
     * In case the Invitation found by the `where` argument doesn't exist, create a new Invitation with this data.
     */
    create: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>;
    /**
     * In case the Invitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>;
  };

  /**
   * Invitation delete
   */
  export type InvitationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    /**
     * Filter which Invitation to delete.
     */
    where: InvitationWhereUniqueInput;
  };

  /**
   * Invitation deleteMany
   */
  export type InvitationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Invitations to delete
     */
    where?: InvitationWhereInput;
    /**
     * Limit how many Invitations to delete.
     */
    limit?: number;
  };

  /**
   * Invitation without action
   */
  export type InvitationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: "id";
    email: "email";
    name: "name";
    passwordHash: "passwordHash";
    provider: "provider";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const GroupScalarFieldEnum: {
    id: "id";
    name: "name";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type GroupScalarFieldEnum =
    (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum];

  export const GroupMembershipScalarFieldEnum: {
    userId: "userId";
    groupId: "groupId";
    role: "role";
  };

  export type GroupMembershipScalarFieldEnum =
    (typeof GroupMembershipScalarFieldEnum)[keyof typeof GroupMembershipScalarFieldEnum];

  export const ShoppingListItemScalarFieldEnum: {
    id: "id";
    name: "name";
    completed: "completed";
    addedBy: "addedBy";
    createdAt: "createdAt";
    groupId: "groupId";
  };

  export type ShoppingListItemScalarFieldEnum =
    (typeof ShoppingListItemScalarFieldEnum)[keyof typeof ShoppingListItemScalarFieldEnum];

  export const NotificationScalarFieldEnum: {
    id: "id";
    message: "message";
    read: "read";
    createdAt: "createdAt";
    userId: "userId";
  };

  export type NotificationScalarFieldEnum =
    (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];

  export const InvitationScalarFieldEnum: {
    id: "id";
    email: "email";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    groupId: "groupId";
    invitedByUserId: "invitedByUserId";
  };

  export type InvitationScalarFieldEnum =
    (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Role"
  >;

  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Role[]"
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Boolean"
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<"User"> | string;
    email?: StringFilter<"User"> | string;
    name?: StringNullableFilter<"User"> | string | null;
    passwordHash?: StringNullableFilter<"User"> | string | null;
    provider?: StringFilter<"User"> | string;
    createdAt?: DateTimeFilter<"User"> | Date | string;
    updatedAt?: DateTimeFilter<"User"> | Date | string;
    memberships?: GroupMembershipListRelationFilter;
    notifications?: NotificationListRelationFilter;
    sentInvitations?: InvitationListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrderInput | SortOrder;
    passwordHash?: SortOrderInput | SortOrder;
    provider?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    memberships?: GroupMembershipOrderByRelationAggregateInput;
    notifications?: NotificationOrderByRelationAggregateInput;
    sentInvitations?: InvitationOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringNullableFilter<"User"> | string | null;
      passwordHash?: StringNullableFilter<"User"> | string | null;
      provider?: StringFilter<"User"> | string;
      createdAt?: DateTimeFilter<"User"> | Date | string;
      updatedAt?: DateTimeFilter<"User"> | Date | string;
      memberships?: GroupMembershipListRelationFilter;
      notifications?: NotificationListRelationFilter;
      sentInvitations?: InvitationListRelationFilter;
    },
    "id" | "email"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrderInput | SortOrder;
    passwordHash?: SortOrderInput | SortOrder;
    provider?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"User"> | string;
    email?: StringWithAggregatesFilter<"User"> | string;
    name?: StringNullableWithAggregatesFilter<"User"> | string | null;
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null;
    provider?: StringWithAggregatesFilter<"User"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
  };

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[];
    OR?: GroupWhereInput[];
    NOT?: GroupWhereInput | GroupWhereInput[];
    id?: StringFilter<"Group"> | string;
    name?: StringFilter<"Group"> | string;
    createdAt?: DateTimeFilter<"Group"> | Date | string;
    updatedAt?: DateTimeFilter<"Group"> | Date | string;
    members?: GroupMembershipListRelationFilter;
    shoppingItems?: ShoppingListItemListRelationFilter;
    invitations?: InvitationListRelationFilter;
  };

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    members?: GroupMembershipOrderByRelationAggregateInput;
    shoppingItems?: ShoppingListItemOrderByRelationAggregateInput;
    invitations?: InvitationOrderByRelationAggregateInput;
  };

  export type GroupWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: GroupWhereInput | GroupWhereInput[];
      OR?: GroupWhereInput[];
      NOT?: GroupWhereInput | GroupWhereInput[];
      name?: StringFilter<"Group"> | string;
      createdAt?: DateTimeFilter<"Group"> | Date | string;
      updatedAt?: DateTimeFilter<"Group"> | Date | string;
      members?: GroupMembershipListRelationFilter;
      shoppingItems?: ShoppingListItemListRelationFilter;
      invitations?: InvitationListRelationFilter;
    },
    "id"
  >;

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: GroupCountOrderByAggregateInput;
    _max?: GroupMaxOrderByAggregateInput;
    _min?: GroupMinOrderByAggregateInput;
  };

  export type GroupScalarWhereWithAggregatesInput = {
    AND?:
      | GroupScalarWhereWithAggregatesInput
      | GroupScalarWhereWithAggregatesInput[];
    OR?: GroupScalarWhereWithAggregatesInput[];
    NOT?:
      | GroupScalarWhereWithAggregatesInput
      | GroupScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Group"> | string;
    name?: StringWithAggregatesFilter<"Group"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string;
  };

  export type GroupMembershipWhereInput = {
    AND?: GroupMembershipWhereInput | GroupMembershipWhereInput[];
    OR?: GroupMembershipWhereInput[];
    NOT?: GroupMembershipWhereInput | GroupMembershipWhereInput[];
    userId?: StringFilter<"GroupMembership"> | string;
    groupId?: StringFilter<"GroupMembership"> | string;
    role?: EnumRoleFilter<"GroupMembership"> | $Enums.Role;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>;
  };

  export type GroupMembershipOrderByWithRelationInput = {
    userId?: SortOrder;
    groupId?: SortOrder;
    role?: SortOrder;
    user?: UserOrderByWithRelationInput;
    group?: GroupOrderByWithRelationInput;
  };

  export type GroupMembershipWhereUniqueInput = Prisma.AtLeast<
    {
      userId_groupId?: GroupMembershipUserIdGroupIdCompoundUniqueInput;
      AND?: GroupMembershipWhereInput | GroupMembershipWhereInput[];
      OR?: GroupMembershipWhereInput[];
      NOT?: GroupMembershipWhereInput | GroupMembershipWhereInput[];
      userId?: StringFilter<"GroupMembership"> | string;
      groupId?: StringFilter<"GroupMembership"> | string;
      role?: EnumRoleFilter<"GroupMembership"> | $Enums.Role;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      group?: XOR<GroupScalarRelationFilter, GroupWhereInput>;
    },
    "userId_groupId"
  >;

  export type GroupMembershipOrderByWithAggregationInput = {
    userId?: SortOrder;
    groupId?: SortOrder;
    role?: SortOrder;
    _count?: GroupMembershipCountOrderByAggregateInput;
    _max?: GroupMembershipMaxOrderByAggregateInput;
    _min?: GroupMembershipMinOrderByAggregateInput;
  };

  export type GroupMembershipScalarWhereWithAggregatesInput = {
    AND?:
      | GroupMembershipScalarWhereWithAggregatesInput
      | GroupMembershipScalarWhereWithAggregatesInput[];
    OR?: GroupMembershipScalarWhereWithAggregatesInput[];
    NOT?:
      | GroupMembershipScalarWhereWithAggregatesInput
      | GroupMembershipScalarWhereWithAggregatesInput[];
    userId?: StringWithAggregatesFilter<"GroupMembership"> | string;
    groupId?: StringWithAggregatesFilter<"GroupMembership"> | string;
    role?: EnumRoleWithAggregatesFilter<"GroupMembership"> | $Enums.Role;
  };

  export type ShoppingListItemWhereInput = {
    AND?: ShoppingListItemWhereInput | ShoppingListItemWhereInput[];
    OR?: ShoppingListItemWhereInput[];
    NOT?: ShoppingListItemWhereInput | ShoppingListItemWhereInput[];
    id?: StringFilter<"ShoppingListItem"> | string;
    name?: StringFilter<"ShoppingListItem"> | string;
    completed?: BoolFilter<"ShoppingListItem"> | boolean;
    addedBy?: StringNullableFilter<"ShoppingListItem"> | string | null;
    createdAt?: DateTimeFilter<"ShoppingListItem"> | Date | string;
    groupId?: StringFilter<"ShoppingListItem"> | string;
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>;
  };

  export type ShoppingListItemOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    completed?: SortOrder;
    addedBy?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    groupId?: SortOrder;
    group?: GroupOrderByWithRelationInput;
  };

  export type ShoppingListItemWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ShoppingListItemWhereInput | ShoppingListItemWhereInput[];
      OR?: ShoppingListItemWhereInput[];
      NOT?: ShoppingListItemWhereInput | ShoppingListItemWhereInput[];
      name?: StringFilter<"ShoppingListItem"> | string;
      completed?: BoolFilter<"ShoppingListItem"> | boolean;
      addedBy?: StringNullableFilter<"ShoppingListItem"> | string | null;
      createdAt?: DateTimeFilter<"ShoppingListItem"> | Date | string;
      groupId?: StringFilter<"ShoppingListItem"> | string;
      group?: XOR<GroupScalarRelationFilter, GroupWhereInput>;
    },
    "id"
  >;

  export type ShoppingListItemOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    completed?: SortOrder;
    addedBy?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    groupId?: SortOrder;
    _count?: ShoppingListItemCountOrderByAggregateInput;
    _max?: ShoppingListItemMaxOrderByAggregateInput;
    _min?: ShoppingListItemMinOrderByAggregateInput;
  };

  export type ShoppingListItemScalarWhereWithAggregatesInput = {
    AND?:
      | ShoppingListItemScalarWhereWithAggregatesInput
      | ShoppingListItemScalarWhereWithAggregatesInput[];
    OR?: ShoppingListItemScalarWhereWithAggregatesInput[];
    NOT?:
      | ShoppingListItemScalarWhereWithAggregatesInput
      | ShoppingListItemScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"ShoppingListItem"> | string;
    name?: StringWithAggregatesFilter<"ShoppingListItem"> | string;
    completed?: BoolWithAggregatesFilter<"ShoppingListItem"> | boolean;
    addedBy?:
      | StringNullableWithAggregatesFilter<"ShoppingListItem">
      | string
      | null;
    createdAt?:
      | DateTimeWithAggregatesFilter<"ShoppingListItem">
      | Date
      | string;
    groupId?: StringWithAggregatesFilter<"ShoppingListItem"> | string;
  };

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[];
    OR?: NotificationWhereInput[];
    NOT?: NotificationWhereInput | NotificationWhereInput[];
    id?: StringFilter<"Notification"> | string;
    message?: StringFilter<"Notification"> | string;
    read?: BoolFilter<"Notification"> | boolean;
    createdAt?: DateTimeFilter<"Notification"> | Date | string;
    userId?: StringFilter<"Notification"> | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder;
    message?: SortOrder;
    read?: SortOrder;
    createdAt?: SortOrder;
    userId?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type NotificationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: NotificationWhereInput | NotificationWhereInput[];
      OR?: NotificationWhereInput[];
      NOT?: NotificationWhereInput | NotificationWhereInput[];
      message?: StringFilter<"Notification"> | string;
      read?: BoolFilter<"Notification"> | boolean;
      createdAt?: DateTimeFilter<"Notification"> | Date | string;
      userId?: StringFilter<"Notification"> | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id"
  >;

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder;
    message?: SortOrder;
    read?: SortOrder;
    createdAt?: SortOrder;
    userId?: SortOrder;
    _count?: NotificationCountOrderByAggregateInput;
    _max?: NotificationMaxOrderByAggregateInput;
    _min?: NotificationMinOrderByAggregateInput;
  };

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?:
      | NotificationScalarWhereWithAggregatesInput
      | NotificationScalarWhereWithAggregatesInput[];
    OR?: NotificationScalarWhereWithAggregatesInput[];
    NOT?:
      | NotificationScalarWhereWithAggregatesInput
      | NotificationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Notification"> | string;
    message?: StringWithAggregatesFilter<"Notification"> | string;
    read?: BoolWithAggregatesFilter<"Notification"> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string;
    userId?: StringWithAggregatesFilter<"Notification"> | string;
  };

  export type InvitationWhereInput = {
    AND?: InvitationWhereInput | InvitationWhereInput[];
    OR?: InvitationWhereInput[];
    NOT?: InvitationWhereInput | InvitationWhereInput[];
    id?: StringFilter<"Invitation"> | string;
    email?: StringFilter<"Invitation"> | string;
    createdAt?: DateTimeFilter<"Invitation"> | Date | string;
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string;
    groupId?: StringFilter<"Invitation"> | string;
    invitedByUserId?: StringFilter<"Invitation"> | string;
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>;
    invitedByUser?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type InvitationOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    groupId?: SortOrder;
    invitedByUserId?: SortOrder;
    group?: GroupOrderByWithRelationInput;
    invitedByUser?: UserOrderByWithRelationInput;
  };

  export type InvitationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email_groupId?: InvitationEmailGroupIdCompoundUniqueInput;
      AND?: InvitationWhereInput | InvitationWhereInput[];
      OR?: InvitationWhereInput[];
      NOT?: InvitationWhereInput | InvitationWhereInput[];
      email?: StringFilter<"Invitation"> | string;
      createdAt?: DateTimeFilter<"Invitation"> | Date | string;
      updatedAt?: DateTimeFilter<"Invitation"> | Date | string;
      groupId?: StringFilter<"Invitation"> | string;
      invitedByUserId?: StringFilter<"Invitation"> | string;
      group?: XOR<GroupScalarRelationFilter, GroupWhereInput>;
      invitedByUser?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id" | "email_groupId"
  >;

  export type InvitationOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    groupId?: SortOrder;
    invitedByUserId?: SortOrder;
    _count?: InvitationCountOrderByAggregateInput;
    _max?: InvitationMaxOrderByAggregateInput;
    _min?: InvitationMinOrderByAggregateInput;
  };

  export type InvitationScalarWhereWithAggregatesInput = {
    AND?:
      | InvitationScalarWhereWithAggregatesInput
      | InvitationScalarWhereWithAggregatesInput[];
    OR?: InvitationScalarWhereWithAggregatesInput[];
    NOT?:
      | InvitationScalarWhereWithAggregatesInput
      | InvitationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Invitation"> | string;
    email?: StringWithAggregatesFilter<"Invitation"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string;
    groupId?: StringWithAggregatesFilter<"Invitation"> | string;
    invitedByUserId?: StringWithAggregatesFilter<"Invitation"> | string;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    name?: string | null;
    passwordHash?: string | null;
    provider?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: GroupMembershipCreateNestedManyWithoutUserInput;
    notifications?: NotificationCreateNestedManyWithoutUserInput;
    sentInvitations?: InvitationCreateNestedManyWithoutInvitedByUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    name?: string | null;
    passwordHash?: string | null;
    provider?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: GroupMembershipUncheckedCreateNestedManyWithoutUserInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
    sentInvitations?: InvitationUncheckedCreateNestedManyWithoutInvitedByUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: GroupMembershipUpdateManyWithoutUserNestedInput;
    notifications?: NotificationUpdateManyWithoutUserNestedInput;
    sentInvitations?: InvitationUpdateManyWithoutInvitedByUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: GroupMembershipUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput;
    sentInvitations?: InvitationUncheckedUpdateManyWithoutInvitedByUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    name?: string | null;
    passwordHash?: string | null;
    provider?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GroupCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: GroupMembershipCreateNestedManyWithoutGroupInput;
    shoppingItems?: ShoppingListItemCreateNestedManyWithoutGroupInput;
    invitations?: InvitationCreateNestedManyWithoutGroupInput;
  };

  export type GroupUncheckedCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: GroupMembershipUncheckedCreateNestedManyWithoutGroupInput;
    shoppingItems?: ShoppingListItemUncheckedCreateNestedManyWithoutGroupInput;
    invitations?: InvitationUncheckedCreateNestedManyWithoutGroupInput;
  };

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: GroupMembershipUpdateManyWithoutGroupNestedInput;
    shoppingItems?: ShoppingListItemUpdateManyWithoutGroupNestedInput;
    invitations?: InvitationUpdateManyWithoutGroupNestedInput;
  };

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: GroupMembershipUncheckedUpdateManyWithoutGroupNestedInput;
    shoppingItems?: ShoppingListItemUncheckedUpdateManyWithoutGroupNestedInput;
    invitations?: InvitationUncheckedUpdateManyWithoutGroupNestedInput;
  };

  export type GroupCreateManyInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GroupMembershipCreateInput = {
    role?: $Enums.Role;
    user: UserCreateNestedOneWithoutMembershipsInput;
    group: GroupCreateNestedOneWithoutMembersInput;
  };

  export type GroupMembershipUncheckedCreateInput = {
    userId: string;
    groupId: string;
    role?: $Enums.Role;
  };

  export type GroupMembershipUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput;
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput;
  };

  export type GroupMembershipUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    groupId?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
  };

  export type GroupMembershipCreateManyInput = {
    userId: string;
    groupId: string;
    role?: $Enums.Role;
  };

  export type GroupMembershipUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
  };

  export type GroupMembershipUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    groupId?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
  };

  export type ShoppingListItemCreateInput = {
    id?: string;
    name: string;
    completed?: boolean;
    addedBy?: string | null;
    createdAt?: Date | string;
    group: GroupCreateNestedOneWithoutShoppingItemsInput;
  };

  export type ShoppingListItemUncheckedCreateInput = {
    id?: string;
    name: string;
    completed?: boolean;
    addedBy?: string | null;
    createdAt?: Date | string;
    groupId: string;
  };

  export type ShoppingListItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    completed?: BoolFieldUpdateOperationsInput | boolean;
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    group?: GroupUpdateOneRequiredWithoutShoppingItemsNestedInput;
  };

  export type ShoppingListItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    completed?: BoolFieldUpdateOperationsInput | boolean;
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: StringFieldUpdateOperationsInput | string;
  };

  export type ShoppingListItemCreateManyInput = {
    id?: string;
    name: string;
    completed?: boolean;
    addedBy?: string | null;
    createdAt?: Date | string;
    groupId: string;
  };

  export type ShoppingListItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    completed?: BoolFieldUpdateOperationsInput | boolean;
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ShoppingListItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    completed?: BoolFieldUpdateOperationsInput | boolean;
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: StringFieldUpdateOperationsInput | string;
  };

  export type NotificationCreateInput = {
    id?: string;
    message: string;
    read?: boolean;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutNotificationsInput;
  };

  export type NotificationUncheckedCreateInput = {
    id?: string;
    message: string;
    read?: boolean;
    createdAt?: Date | string;
    userId: string;
  };

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    read?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput;
  };

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    read?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type NotificationCreateManyInput = {
    id?: string;
    message: string;
    read?: boolean;
    createdAt?: Date | string;
    userId: string;
  };

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    read?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    read?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type InvitationCreateInput = {
    id?: string;
    email: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    group: GroupCreateNestedOneWithoutInvitationsInput;
    invitedByUser: UserCreateNestedOneWithoutSentInvitationsInput;
  };

  export type InvitationUncheckedCreateInput = {
    id?: string;
    email: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    groupId: string;
    invitedByUserId: string;
  };

  export type InvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    group?: GroupUpdateOneRequiredWithoutInvitationsNestedInput;
    invitedByUser?: UserUpdateOneRequiredWithoutSentInvitationsNestedInput;
  };

  export type InvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: StringFieldUpdateOperationsInput | string;
    invitedByUserId?: StringFieldUpdateOperationsInput | string;
  };

  export type InvitationCreateManyInput = {
    id?: string;
    email: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    groupId: string;
    invitedByUserId: string;
  };

  export type InvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: StringFieldUpdateOperationsInput | string;
    invitedByUserId?: StringFieldUpdateOperationsInput | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type GroupMembershipListRelationFilter = {
    every?: GroupMembershipWhereInput;
    some?: GroupMembershipWhereInput;
    none?: GroupMembershipWhereInput;
  };

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput;
    some?: NotificationWhereInput;
    none?: NotificationWhereInput;
  };

  export type InvitationListRelationFilter = {
    every?: InvitationWhereInput;
    some?: InvitationWhereInput;
    none?: InvitationWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type GroupMembershipOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type InvitationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    passwordHash?: SortOrder;
    provider?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    passwordHash?: SortOrder;
    provider?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    passwordHash?: SortOrder;
    provider?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type ShoppingListItemListRelationFilter = {
    every?: ShoppingListItemWhereInput;
    some?: ShoppingListItemWhereInput;
    none?: ShoppingListItemWhereInput;
  };

  export type ShoppingListItemOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput;
    isNot?: GroupWhereInput;
  };

  export type GroupMembershipUserIdGroupIdCompoundUniqueInput = {
    userId: string;
    groupId: string;
  };

  export type GroupMembershipCountOrderByAggregateInput = {
    userId?: SortOrder;
    groupId?: SortOrder;
    role?: SortOrder;
  };

  export type GroupMembershipMaxOrderByAggregateInput = {
    userId?: SortOrder;
    groupId?: SortOrder;
    role?: SortOrder;
  };

  export type GroupMembershipMinOrderByAggregateInput = {
    userId?: SortOrder;
    groupId?: SortOrder;
    role?: SortOrder;
  };

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type ShoppingListItemCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    completed?: SortOrder;
    addedBy?: SortOrder;
    createdAt?: SortOrder;
    groupId?: SortOrder;
  };

  export type ShoppingListItemMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    completed?: SortOrder;
    addedBy?: SortOrder;
    createdAt?: SortOrder;
    groupId?: SortOrder;
  };

  export type ShoppingListItemMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    completed?: SortOrder;
    addedBy?: SortOrder;
    createdAt?: SortOrder;
    groupId?: SortOrder;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder;
    message?: SortOrder;
    read?: SortOrder;
    createdAt?: SortOrder;
    userId?: SortOrder;
  };

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder;
    message?: SortOrder;
    read?: SortOrder;
    createdAt?: SortOrder;
    userId?: SortOrder;
  };

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder;
    message?: SortOrder;
    read?: SortOrder;
    createdAt?: SortOrder;
    userId?: SortOrder;
  };

  export type InvitationEmailGroupIdCompoundUniqueInput = {
    email: string;
    groupId: string;
  };

  export type InvitationCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    groupId?: SortOrder;
    invitedByUserId?: SortOrder;
  };

  export type InvitationMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    groupId?: SortOrder;
    invitedByUserId?: SortOrder;
  };

  export type InvitationMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    groupId?: SortOrder;
    invitedByUserId?: SortOrder;
  };

  export type GroupMembershipCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          GroupMembershipCreateWithoutUserInput,
          GroupMembershipUncheckedCreateWithoutUserInput
        >
      | GroupMembershipCreateWithoutUserInput[]
      | GroupMembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | GroupMembershipCreateOrConnectWithoutUserInput
      | GroupMembershipCreateOrConnectWithoutUserInput[];
    createMany?: GroupMembershipCreateManyUserInputEnvelope;
    connect?:
      | GroupMembershipWhereUniqueInput
      | GroupMembershipWhereUniqueInput[];
  };

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          NotificationCreateWithoutUserInput,
          NotificationUncheckedCreateWithoutUserInput
        >
      | NotificationCreateWithoutUserInput[]
      | NotificationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutUserInput
      | NotificationCreateOrConnectWithoutUserInput[];
    createMany?: NotificationCreateManyUserInputEnvelope;
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
  };

  export type InvitationCreateNestedManyWithoutInvitedByUserInput = {
    create?:
      | XOR<
          InvitationCreateWithoutInvitedByUserInput,
          InvitationUncheckedCreateWithoutInvitedByUserInput
        >
      | InvitationCreateWithoutInvitedByUserInput[]
      | InvitationUncheckedCreateWithoutInvitedByUserInput[];
    connectOrCreate?:
      | InvitationCreateOrConnectWithoutInvitedByUserInput
      | InvitationCreateOrConnectWithoutInvitedByUserInput[];
    createMany?: InvitationCreateManyInvitedByUserInputEnvelope;
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
  };

  export type GroupMembershipUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          GroupMembershipCreateWithoutUserInput,
          GroupMembershipUncheckedCreateWithoutUserInput
        >
      | GroupMembershipCreateWithoutUserInput[]
      | GroupMembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | GroupMembershipCreateOrConnectWithoutUserInput
      | GroupMembershipCreateOrConnectWithoutUserInput[];
    createMany?: GroupMembershipCreateManyUserInputEnvelope;
    connect?:
      | GroupMembershipWhereUniqueInput
      | GroupMembershipWhereUniqueInput[];
  };

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          NotificationCreateWithoutUserInput,
          NotificationUncheckedCreateWithoutUserInput
        >
      | NotificationCreateWithoutUserInput[]
      | NotificationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutUserInput
      | NotificationCreateOrConnectWithoutUserInput[];
    createMany?: NotificationCreateManyUserInputEnvelope;
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
  };

  export type InvitationUncheckedCreateNestedManyWithoutInvitedByUserInput = {
    create?:
      | XOR<
          InvitationCreateWithoutInvitedByUserInput,
          InvitationUncheckedCreateWithoutInvitedByUserInput
        >
      | InvitationCreateWithoutInvitedByUserInput[]
      | InvitationUncheckedCreateWithoutInvitedByUserInput[];
    connectOrCreate?:
      | InvitationCreateOrConnectWithoutInvitedByUserInput
      | InvitationCreateOrConnectWithoutInvitedByUserInput[];
    createMany?: InvitationCreateManyInvitedByUserInputEnvelope;
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type GroupMembershipUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          GroupMembershipCreateWithoutUserInput,
          GroupMembershipUncheckedCreateWithoutUserInput
        >
      | GroupMembershipCreateWithoutUserInput[]
      | GroupMembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | GroupMembershipCreateOrConnectWithoutUserInput
      | GroupMembershipCreateOrConnectWithoutUserInput[];
    upsert?:
      | GroupMembershipUpsertWithWhereUniqueWithoutUserInput
      | GroupMembershipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: GroupMembershipCreateManyUserInputEnvelope;
    set?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[];
    disconnect?:
      | GroupMembershipWhereUniqueInput
      | GroupMembershipWhereUniqueInput[];
    delete?:
      | GroupMembershipWhereUniqueInput
      | GroupMembershipWhereUniqueInput[];
    connect?:
      | GroupMembershipWhereUniqueInput
      | GroupMembershipWhereUniqueInput[];
    update?:
      | GroupMembershipUpdateWithWhereUniqueWithoutUserInput
      | GroupMembershipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | GroupMembershipUpdateManyWithWhereWithoutUserInput
      | GroupMembershipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | GroupMembershipScalarWhereInput
      | GroupMembershipScalarWhereInput[];
  };

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          NotificationCreateWithoutUserInput,
          NotificationUncheckedCreateWithoutUserInput
        >
      | NotificationCreateWithoutUserInput[]
      | NotificationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutUserInput
      | NotificationCreateOrConnectWithoutUserInput[];
    upsert?:
      | NotificationUpsertWithWhereUniqueWithoutUserInput
      | NotificationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: NotificationCreateManyUserInputEnvelope;
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    update?:
      | NotificationUpdateWithWhereUniqueWithoutUserInput
      | NotificationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | NotificationUpdateManyWithWhereWithoutUserInput
      | NotificationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
  };

  export type InvitationUpdateManyWithoutInvitedByUserNestedInput = {
    create?:
      | XOR<
          InvitationCreateWithoutInvitedByUserInput,
          InvitationUncheckedCreateWithoutInvitedByUserInput
        >
      | InvitationCreateWithoutInvitedByUserInput[]
      | InvitationUncheckedCreateWithoutInvitedByUserInput[];
    connectOrCreate?:
      | InvitationCreateOrConnectWithoutInvitedByUserInput
      | InvitationCreateOrConnectWithoutInvitedByUserInput[];
    upsert?:
      | InvitationUpsertWithWhereUniqueWithoutInvitedByUserInput
      | InvitationUpsertWithWhereUniqueWithoutInvitedByUserInput[];
    createMany?: InvitationCreateManyInvitedByUserInputEnvelope;
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    update?:
      | InvitationUpdateWithWhereUniqueWithoutInvitedByUserInput
      | InvitationUpdateWithWhereUniqueWithoutInvitedByUserInput[];
    updateMany?:
      | InvitationUpdateManyWithWhereWithoutInvitedByUserInput
      | InvitationUpdateManyWithWhereWithoutInvitedByUserInput[];
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[];
  };

  export type GroupMembershipUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          GroupMembershipCreateWithoutUserInput,
          GroupMembershipUncheckedCreateWithoutUserInput
        >
      | GroupMembershipCreateWithoutUserInput[]
      | GroupMembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | GroupMembershipCreateOrConnectWithoutUserInput
      | GroupMembershipCreateOrConnectWithoutUserInput[];
    upsert?:
      | GroupMembershipUpsertWithWhereUniqueWithoutUserInput
      | GroupMembershipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: GroupMembershipCreateManyUserInputEnvelope;
    set?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[];
    disconnect?:
      | GroupMembershipWhereUniqueInput
      | GroupMembershipWhereUniqueInput[];
    delete?:
      | GroupMembershipWhereUniqueInput
      | GroupMembershipWhereUniqueInput[];
    connect?:
      | GroupMembershipWhereUniqueInput
      | GroupMembershipWhereUniqueInput[];
    update?:
      | GroupMembershipUpdateWithWhereUniqueWithoutUserInput
      | GroupMembershipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | GroupMembershipUpdateManyWithWhereWithoutUserInput
      | GroupMembershipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | GroupMembershipScalarWhereInput
      | GroupMembershipScalarWhereInput[];
  };

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          NotificationCreateWithoutUserInput,
          NotificationUncheckedCreateWithoutUserInput
        >
      | NotificationCreateWithoutUserInput[]
      | NotificationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutUserInput
      | NotificationCreateOrConnectWithoutUserInput[];
    upsert?:
      | NotificationUpsertWithWhereUniqueWithoutUserInput
      | NotificationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: NotificationCreateManyUserInputEnvelope;
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    update?:
      | NotificationUpdateWithWhereUniqueWithoutUserInput
      | NotificationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | NotificationUpdateManyWithWhereWithoutUserInput
      | NotificationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
  };

  export type InvitationUncheckedUpdateManyWithoutInvitedByUserNestedInput = {
    create?:
      | XOR<
          InvitationCreateWithoutInvitedByUserInput,
          InvitationUncheckedCreateWithoutInvitedByUserInput
        >
      | InvitationCreateWithoutInvitedByUserInput[]
      | InvitationUncheckedCreateWithoutInvitedByUserInput[];
    connectOrCreate?:
      | InvitationCreateOrConnectWithoutInvitedByUserInput
      | InvitationCreateOrConnectWithoutInvitedByUserInput[];
    upsert?:
      | InvitationUpsertWithWhereUniqueWithoutInvitedByUserInput
      | InvitationUpsertWithWhereUniqueWithoutInvitedByUserInput[];
    createMany?: InvitationCreateManyInvitedByUserInputEnvelope;
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    update?:
      | InvitationUpdateWithWhereUniqueWithoutInvitedByUserInput
      | InvitationUpdateWithWhereUniqueWithoutInvitedByUserInput[];
    updateMany?:
      | InvitationUpdateManyWithWhereWithoutInvitedByUserInput
      | InvitationUpdateManyWithWhereWithoutInvitedByUserInput[];
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[];
  };

  export type GroupMembershipCreateNestedManyWithoutGroupInput = {
    create?:
      | XOR<
          GroupMembershipCreateWithoutGroupInput,
          GroupMembershipUncheckedCreateWithoutGroupInput
        >
      | GroupMembershipCreateWithoutGroupInput[]
      | GroupMembershipUncheckedCreateWithoutGroupInput[];
    connectOrCreate?:
      | GroupMembershipCreateOrConnectWithoutGroupInput
      | GroupMembershipCreateOrConnectWithoutGroupInput[];
    createMany?: GroupMembershipCreateManyGroupInputEnvelope;
    connect?:
      | GroupMembershipWhereUniqueInput
      | GroupMembershipWhereUniqueInput[];
  };

  export type ShoppingListItemCreateNestedManyWithoutGroupInput = {
    create?:
      | XOR<
          ShoppingListItemCreateWithoutGroupInput,
          ShoppingListItemUncheckedCreateWithoutGroupInput
        >
      | ShoppingListItemCreateWithoutGroupInput[]
      | ShoppingListItemUncheckedCreateWithoutGroupInput[];
    connectOrCreate?:
      | ShoppingListItemCreateOrConnectWithoutGroupInput
      | ShoppingListItemCreateOrConnectWithoutGroupInput[];
    createMany?: ShoppingListItemCreateManyGroupInputEnvelope;
    connect?:
      | ShoppingListItemWhereUniqueInput
      | ShoppingListItemWhereUniqueInput[];
  };

  export type InvitationCreateNestedManyWithoutGroupInput = {
    create?:
      | XOR<
          InvitationCreateWithoutGroupInput,
          InvitationUncheckedCreateWithoutGroupInput
        >
      | InvitationCreateWithoutGroupInput[]
      | InvitationUncheckedCreateWithoutGroupInput[];
    connectOrCreate?:
      | InvitationCreateOrConnectWithoutGroupInput
      | InvitationCreateOrConnectWithoutGroupInput[];
    createMany?: InvitationCreateManyGroupInputEnvelope;
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
  };

  export type GroupMembershipUncheckedCreateNestedManyWithoutGroupInput = {
    create?:
      | XOR<
          GroupMembershipCreateWithoutGroupInput,
          GroupMembershipUncheckedCreateWithoutGroupInput
        >
      | GroupMembershipCreateWithoutGroupInput[]
      | GroupMembershipUncheckedCreateWithoutGroupInput[];
    connectOrCreate?:
      | GroupMembershipCreateOrConnectWithoutGroupInput
      | GroupMembershipCreateOrConnectWithoutGroupInput[];
    createMany?: GroupMembershipCreateManyGroupInputEnvelope;
    connect?:
      | GroupMembershipWhereUniqueInput
      | GroupMembershipWhereUniqueInput[];
  };

  export type ShoppingListItemUncheckedCreateNestedManyWithoutGroupInput = {
    create?:
      | XOR<
          ShoppingListItemCreateWithoutGroupInput,
          ShoppingListItemUncheckedCreateWithoutGroupInput
        >
      | ShoppingListItemCreateWithoutGroupInput[]
      | ShoppingListItemUncheckedCreateWithoutGroupInput[];
    connectOrCreate?:
      | ShoppingListItemCreateOrConnectWithoutGroupInput
      | ShoppingListItemCreateOrConnectWithoutGroupInput[];
    createMany?: ShoppingListItemCreateManyGroupInputEnvelope;
    connect?:
      | ShoppingListItemWhereUniqueInput
      | ShoppingListItemWhereUniqueInput[];
  };

  export type InvitationUncheckedCreateNestedManyWithoutGroupInput = {
    create?:
      | XOR<
          InvitationCreateWithoutGroupInput,
          InvitationUncheckedCreateWithoutGroupInput
        >
      | InvitationCreateWithoutGroupInput[]
      | InvitationUncheckedCreateWithoutGroupInput[];
    connectOrCreate?:
      | InvitationCreateOrConnectWithoutGroupInput
      | InvitationCreateOrConnectWithoutGroupInput[];
    createMany?: InvitationCreateManyGroupInputEnvelope;
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
  };

  export type GroupMembershipUpdateManyWithoutGroupNestedInput = {
    create?:
      | XOR<
          GroupMembershipCreateWithoutGroupInput,
          GroupMembershipUncheckedCreateWithoutGroupInput
        >
      | GroupMembershipCreateWithoutGroupInput[]
      | GroupMembershipUncheckedCreateWithoutGroupInput[];
    connectOrCreate?:
      | GroupMembershipCreateOrConnectWithoutGroupInput
      | GroupMembershipCreateOrConnectWithoutGroupInput[];
    upsert?:
      | GroupMembershipUpsertWithWhereUniqueWithoutGroupInput
      | GroupMembershipUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: GroupMembershipCreateManyGroupInputEnvelope;
    set?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[];
    disconnect?:
      | GroupMembershipWhereUniqueInput
      | GroupMembershipWhereUniqueInput[];
    delete?:
      | GroupMembershipWhereUniqueInput
      | GroupMembershipWhereUniqueInput[];
    connect?:
      | GroupMembershipWhereUniqueInput
      | GroupMembershipWhereUniqueInput[];
    update?:
      | GroupMembershipUpdateWithWhereUniqueWithoutGroupInput
      | GroupMembershipUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?:
      | GroupMembershipUpdateManyWithWhereWithoutGroupInput
      | GroupMembershipUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?:
      | GroupMembershipScalarWhereInput
      | GroupMembershipScalarWhereInput[];
  };

  export type ShoppingListItemUpdateManyWithoutGroupNestedInput = {
    create?:
      | XOR<
          ShoppingListItemCreateWithoutGroupInput,
          ShoppingListItemUncheckedCreateWithoutGroupInput
        >
      | ShoppingListItemCreateWithoutGroupInput[]
      | ShoppingListItemUncheckedCreateWithoutGroupInput[];
    connectOrCreate?:
      | ShoppingListItemCreateOrConnectWithoutGroupInput
      | ShoppingListItemCreateOrConnectWithoutGroupInput[];
    upsert?:
      | ShoppingListItemUpsertWithWhereUniqueWithoutGroupInput
      | ShoppingListItemUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: ShoppingListItemCreateManyGroupInputEnvelope;
    set?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[];
    disconnect?:
      | ShoppingListItemWhereUniqueInput
      | ShoppingListItemWhereUniqueInput[];
    delete?:
      | ShoppingListItemWhereUniqueInput
      | ShoppingListItemWhereUniqueInput[];
    connect?:
      | ShoppingListItemWhereUniqueInput
      | ShoppingListItemWhereUniqueInput[];
    update?:
      | ShoppingListItemUpdateWithWhereUniqueWithoutGroupInput
      | ShoppingListItemUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?:
      | ShoppingListItemUpdateManyWithWhereWithoutGroupInput
      | ShoppingListItemUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?:
      | ShoppingListItemScalarWhereInput
      | ShoppingListItemScalarWhereInput[];
  };

  export type InvitationUpdateManyWithoutGroupNestedInput = {
    create?:
      | XOR<
          InvitationCreateWithoutGroupInput,
          InvitationUncheckedCreateWithoutGroupInput
        >
      | InvitationCreateWithoutGroupInput[]
      | InvitationUncheckedCreateWithoutGroupInput[];
    connectOrCreate?:
      | InvitationCreateOrConnectWithoutGroupInput
      | InvitationCreateOrConnectWithoutGroupInput[];
    upsert?:
      | InvitationUpsertWithWhereUniqueWithoutGroupInput
      | InvitationUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: InvitationCreateManyGroupInputEnvelope;
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    update?:
      | InvitationUpdateWithWhereUniqueWithoutGroupInput
      | InvitationUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?:
      | InvitationUpdateManyWithWhereWithoutGroupInput
      | InvitationUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[];
  };

  export type GroupMembershipUncheckedUpdateManyWithoutGroupNestedInput = {
    create?:
      | XOR<
          GroupMembershipCreateWithoutGroupInput,
          GroupMembershipUncheckedCreateWithoutGroupInput
        >
      | GroupMembershipCreateWithoutGroupInput[]
      | GroupMembershipUncheckedCreateWithoutGroupInput[];
    connectOrCreate?:
      | GroupMembershipCreateOrConnectWithoutGroupInput
      | GroupMembershipCreateOrConnectWithoutGroupInput[];
    upsert?:
      | GroupMembershipUpsertWithWhereUniqueWithoutGroupInput
      | GroupMembershipUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: GroupMembershipCreateManyGroupInputEnvelope;
    set?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[];
    disconnect?:
      | GroupMembershipWhereUniqueInput
      | GroupMembershipWhereUniqueInput[];
    delete?:
      | GroupMembershipWhereUniqueInput
      | GroupMembershipWhereUniqueInput[];
    connect?:
      | GroupMembershipWhereUniqueInput
      | GroupMembershipWhereUniqueInput[];
    update?:
      | GroupMembershipUpdateWithWhereUniqueWithoutGroupInput
      | GroupMembershipUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?:
      | GroupMembershipUpdateManyWithWhereWithoutGroupInput
      | GroupMembershipUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?:
      | GroupMembershipScalarWhereInput
      | GroupMembershipScalarWhereInput[];
  };

  export type ShoppingListItemUncheckedUpdateManyWithoutGroupNestedInput = {
    create?:
      | XOR<
          ShoppingListItemCreateWithoutGroupInput,
          ShoppingListItemUncheckedCreateWithoutGroupInput
        >
      | ShoppingListItemCreateWithoutGroupInput[]
      | ShoppingListItemUncheckedCreateWithoutGroupInput[];
    connectOrCreate?:
      | ShoppingListItemCreateOrConnectWithoutGroupInput
      | ShoppingListItemCreateOrConnectWithoutGroupInput[];
    upsert?:
      | ShoppingListItemUpsertWithWhereUniqueWithoutGroupInput
      | ShoppingListItemUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: ShoppingListItemCreateManyGroupInputEnvelope;
    set?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[];
    disconnect?:
      | ShoppingListItemWhereUniqueInput
      | ShoppingListItemWhereUniqueInput[];
    delete?:
      | ShoppingListItemWhereUniqueInput
      | ShoppingListItemWhereUniqueInput[];
    connect?:
      | ShoppingListItemWhereUniqueInput
      | ShoppingListItemWhereUniqueInput[];
    update?:
      | ShoppingListItemUpdateWithWhereUniqueWithoutGroupInput
      | ShoppingListItemUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?:
      | ShoppingListItemUpdateManyWithWhereWithoutGroupInput
      | ShoppingListItemUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?:
      | ShoppingListItemScalarWhereInput
      | ShoppingListItemScalarWhereInput[];
  };

  export type InvitationUncheckedUpdateManyWithoutGroupNestedInput = {
    create?:
      | XOR<
          InvitationCreateWithoutGroupInput,
          InvitationUncheckedCreateWithoutGroupInput
        >
      | InvitationCreateWithoutGroupInput[]
      | InvitationUncheckedCreateWithoutGroupInput[];
    connectOrCreate?:
      | InvitationCreateOrConnectWithoutGroupInput
      | InvitationCreateOrConnectWithoutGroupInput[];
    upsert?:
      | InvitationUpsertWithWhereUniqueWithoutGroupInput
      | InvitationUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: InvitationCreateManyGroupInputEnvelope;
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    update?:
      | InvitationUpdateWithWhereUniqueWithoutGroupInput
      | InvitationUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?:
      | InvitationUpdateManyWithWhereWithoutGroupInput
      | InvitationUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<
      UserCreateWithoutMembershipsInput,
      UserUncheckedCreateWithoutMembershipsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput;
    connect?: UserWhereUniqueInput;
  };

  export type GroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<
      GroupCreateWithoutMembersInput,
      GroupUncheckedCreateWithoutMembersInput
    >;
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput;
    connect?: GroupWhereUniqueInput;
  };

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
  };

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<
      UserCreateWithoutMembershipsInput,
      UserUncheckedCreateWithoutMembershipsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput;
    upsert?: UserUpsertWithoutMembershipsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutMembershipsInput,
        UserUpdateWithoutMembershipsInput
      >,
      UserUncheckedUpdateWithoutMembershipsInput
    >;
  };

  export type GroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<
      GroupCreateWithoutMembersInput,
      GroupUncheckedCreateWithoutMembersInput
    >;
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput;
    upsert?: GroupUpsertWithoutMembersInput;
    connect?: GroupWhereUniqueInput;
    update?: XOR<
      XOR<
        GroupUpdateToOneWithWhereWithoutMembersInput,
        GroupUpdateWithoutMembersInput
      >,
      GroupUncheckedUpdateWithoutMembersInput
    >;
  };

  export type GroupCreateNestedOneWithoutShoppingItemsInput = {
    create?: XOR<
      GroupCreateWithoutShoppingItemsInput,
      GroupUncheckedCreateWithoutShoppingItemsInput
    >;
    connectOrCreate?: GroupCreateOrConnectWithoutShoppingItemsInput;
    connect?: GroupWhereUniqueInput;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type GroupUpdateOneRequiredWithoutShoppingItemsNestedInput = {
    create?: XOR<
      GroupCreateWithoutShoppingItemsInput,
      GroupUncheckedCreateWithoutShoppingItemsInput
    >;
    connectOrCreate?: GroupCreateOrConnectWithoutShoppingItemsInput;
    upsert?: GroupUpsertWithoutShoppingItemsInput;
    connect?: GroupWhereUniqueInput;
    update?: XOR<
      XOR<
        GroupUpdateToOneWithWhereWithoutShoppingItemsInput,
        GroupUpdateWithoutShoppingItemsInput
      >,
      GroupUncheckedUpdateWithoutShoppingItemsInput
    >;
  };

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<
      UserCreateWithoutNotificationsInput,
      UserUncheckedCreateWithoutNotificationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<
      UserCreateWithoutNotificationsInput,
      UserUncheckedCreateWithoutNotificationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput;
    upsert?: UserUpsertWithoutNotificationsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutNotificationsInput,
        UserUpdateWithoutNotificationsInput
      >,
      UserUncheckedUpdateWithoutNotificationsInput
    >;
  };

  export type GroupCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<
      GroupCreateWithoutInvitationsInput,
      GroupUncheckedCreateWithoutInvitationsInput
    >;
    connectOrCreate?: GroupCreateOrConnectWithoutInvitationsInput;
    connect?: GroupWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutSentInvitationsInput = {
    create?: XOR<
      UserCreateWithoutSentInvitationsInput,
      UserUncheckedCreateWithoutSentInvitationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSentInvitationsInput;
    connect?: UserWhereUniqueInput;
  };

  export type GroupUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<
      GroupCreateWithoutInvitationsInput,
      GroupUncheckedCreateWithoutInvitationsInput
    >;
    connectOrCreate?: GroupCreateOrConnectWithoutInvitationsInput;
    upsert?: GroupUpsertWithoutInvitationsInput;
    connect?: GroupWhereUniqueInput;
    update?: XOR<
      XOR<
        GroupUpdateToOneWithWhereWithoutInvitationsInput,
        GroupUpdateWithoutInvitationsInput
      >,
      GroupUncheckedUpdateWithoutInvitationsInput
    >;
  };

  export type UserUpdateOneRequiredWithoutSentInvitationsNestedInput = {
    create?: XOR<
      UserCreateWithoutSentInvitationsInput,
      UserUncheckedCreateWithoutSentInvitationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSentInvitationsInput;
    upsert?: UserUpsertWithoutSentInvitationsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutSentInvitationsInput,
        UserUpdateWithoutSentInvitationsInput
      >,
      UserUncheckedUpdateWithoutSentInvitationsInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type GroupMembershipCreateWithoutUserInput = {
    role?: $Enums.Role;
    group: GroupCreateNestedOneWithoutMembersInput;
  };

  export type GroupMembershipUncheckedCreateWithoutUserInput = {
    groupId: string;
    role?: $Enums.Role;
  };

  export type GroupMembershipCreateOrConnectWithoutUserInput = {
    where: GroupMembershipWhereUniqueInput;
    create: XOR<
      GroupMembershipCreateWithoutUserInput,
      GroupMembershipUncheckedCreateWithoutUserInput
    >;
  };

  export type GroupMembershipCreateManyUserInputEnvelope = {
    data:
      | GroupMembershipCreateManyUserInput
      | GroupMembershipCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type NotificationCreateWithoutUserInput = {
    id?: string;
    message: string;
    read?: boolean;
    createdAt?: Date | string;
  };

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string;
    message: string;
    read?: boolean;
    createdAt?: Date | string;
  };

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput;
    create: XOR<
      NotificationCreateWithoutUserInput,
      NotificationUncheckedCreateWithoutUserInput
    >;
  };

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type InvitationCreateWithoutInvitedByUserInput = {
    id?: string;
    email: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    group: GroupCreateNestedOneWithoutInvitationsInput;
  };

  export type InvitationUncheckedCreateWithoutInvitedByUserInput = {
    id?: string;
    email: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    groupId: string;
  };

  export type InvitationCreateOrConnectWithoutInvitedByUserInput = {
    where: InvitationWhereUniqueInput;
    create: XOR<
      InvitationCreateWithoutInvitedByUserInput,
      InvitationUncheckedCreateWithoutInvitedByUserInput
    >;
  };

  export type InvitationCreateManyInvitedByUserInputEnvelope = {
    data:
      | InvitationCreateManyInvitedByUserInput
      | InvitationCreateManyInvitedByUserInput[];
    skipDuplicates?: boolean;
  };

  export type GroupMembershipUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupMembershipWhereUniqueInput;
    update: XOR<
      GroupMembershipUpdateWithoutUserInput,
      GroupMembershipUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      GroupMembershipCreateWithoutUserInput,
      GroupMembershipUncheckedCreateWithoutUserInput
    >;
  };

  export type GroupMembershipUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupMembershipWhereUniqueInput;
    data: XOR<
      GroupMembershipUpdateWithoutUserInput,
      GroupMembershipUncheckedUpdateWithoutUserInput
    >;
  };

  export type GroupMembershipUpdateManyWithWhereWithoutUserInput = {
    where: GroupMembershipScalarWhereInput;
    data: XOR<
      GroupMembershipUpdateManyMutationInput,
      GroupMembershipUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type GroupMembershipScalarWhereInput = {
    AND?: GroupMembershipScalarWhereInput | GroupMembershipScalarWhereInput[];
    OR?: GroupMembershipScalarWhereInput[];
    NOT?: GroupMembershipScalarWhereInput | GroupMembershipScalarWhereInput[];
    userId?: StringFilter<"GroupMembership"> | string;
    groupId?: StringFilter<"GroupMembership"> | string;
    role?: EnumRoleFilter<"GroupMembership"> | $Enums.Role;
  };

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput;
    update: XOR<
      NotificationUpdateWithoutUserInput,
      NotificationUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      NotificationCreateWithoutUserInput,
      NotificationUncheckedCreateWithoutUserInput
    >;
  };

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput;
    data: XOR<
      NotificationUpdateWithoutUserInput,
      NotificationUncheckedUpdateWithoutUserInput
    >;
  };

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput;
    data: XOR<
      NotificationUpdateManyMutationInput,
      NotificationUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
    OR?: NotificationScalarWhereInput[];
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
    id?: StringFilter<"Notification"> | string;
    message?: StringFilter<"Notification"> | string;
    read?: BoolFilter<"Notification"> | boolean;
    createdAt?: DateTimeFilter<"Notification"> | Date | string;
    userId?: StringFilter<"Notification"> | string;
  };

  export type InvitationUpsertWithWhereUniqueWithoutInvitedByUserInput = {
    where: InvitationWhereUniqueInput;
    update: XOR<
      InvitationUpdateWithoutInvitedByUserInput,
      InvitationUncheckedUpdateWithoutInvitedByUserInput
    >;
    create: XOR<
      InvitationCreateWithoutInvitedByUserInput,
      InvitationUncheckedCreateWithoutInvitedByUserInput
    >;
  };

  export type InvitationUpdateWithWhereUniqueWithoutInvitedByUserInput = {
    where: InvitationWhereUniqueInput;
    data: XOR<
      InvitationUpdateWithoutInvitedByUserInput,
      InvitationUncheckedUpdateWithoutInvitedByUserInput
    >;
  };

  export type InvitationUpdateManyWithWhereWithoutInvitedByUserInput = {
    where: InvitationScalarWhereInput;
    data: XOR<
      InvitationUpdateManyMutationInput,
      InvitationUncheckedUpdateManyWithoutInvitedByUserInput
    >;
  };

  export type InvitationScalarWhereInput = {
    AND?: InvitationScalarWhereInput | InvitationScalarWhereInput[];
    OR?: InvitationScalarWhereInput[];
    NOT?: InvitationScalarWhereInput | InvitationScalarWhereInput[];
    id?: StringFilter<"Invitation"> | string;
    email?: StringFilter<"Invitation"> | string;
    createdAt?: DateTimeFilter<"Invitation"> | Date | string;
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string;
    groupId?: StringFilter<"Invitation"> | string;
    invitedByUserId?: StringFilter<"Invitation"> | string;
  };

  export type GroupMembershipCreateWithoutGroupInput = {
    role?: $Enums.Role;
    user: UserCreateNestedOneWithoutMembershipsInput;
  };

  export type GroupMembershipUncheckedCreateWithoutGroupInput = {
    userId: string;
    role?: $Enums.Role;
  };

  export type GroupMembershipCreateOrConnectWithoutGroupInput = {
    where: GroupMembershipWhereUniqueInput;
    create: XOR<
      GroupMembershipCreateWithoutGroupInput,
      GroupMembershipUncheckedCreateWithoutGroupInput
    >;
  };

  export type GroupMembershipCreateManyGroupInputEnvelope = {
    data:
      | GroupMembershipCreateManyGroupInput
      | GroupMembershipCreateManyGroupInput[];
    skipDuplicates?: boolean;
  };

  export type ShoppingListItemCreateWithoutGroupInput = {
    id?: string;
    name: string;
    completed?: boolean;
    addedBy?: string | null;
    createdAt?: Date | string;
  };

  export type ShoppingListItemUncheckedCreateWithoutGroupInput = {
    id?: string;
    name: string;
    completed?: boolean;
    addedBy?: string | null;
    createdAt?: Date | string;
  };

  export type ShoppingListItemCreateOrConnectWithoutGroupInput = {
    where: ShoppingListItemWhereUniqueInput;
    create: XOR<
      ShoppingListItemCreateWithoutGroupInput,
      ShoppingListItemUncheckedCreateWithoutGroupInput
    >;
  };

  export type ShoppingListItemCreateManyGroupInputEnvelope = {
    data:
      | ShoppingListItemCreateManyGroupInput
      | ShoppingListItemCreateManyGroupInput[];
    skipDuplicates?: boolean;
  };

  export type InvitationCreateWithoutGroupInput = {
    id?: string;
    email: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invitedByUser: UserCreateNestedOneWithoutSentInvitationsInput;
  };

  export type InvitationUncheckedCreateWithoutGroupInput = {
    id?: string;
    email: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invitedByUserId: string;
  };

  export type InvitationCreateOrConnectWithoutGroupInput = {
    where: InvitationWhereUniqueInput;
    create: XOR<
      InvitationCreateWithoutGroupInput,
      InvitationUncheckedCreateWithoutGroupInput
    >;
  };

  export type InvitationCreateManyGroupInputEnvelope = {
    data: InvitationCreateManyGroupInput | InvitationCreateManyGroupInput[];
    skipDuplicates?: boolean;
  };

  export type GroupMembershipUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMembershipWhereUniqueInput;
    update: XOR<
      GroupMembershipUpdateWithoutGroupInput,
      GroupMembershipUncheckedUpdateWithoutGroupInput
    >;
    create: XOR<
      GroupMembershipCreateWithoutGroupInput,
      GroupMembershipUncheckedCreateWithoutGroupInput
    >;
  };

  export type GroupMembershipUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMembershipWhereUniqueInput;
    data: XOR<
      GroupMembershipUpdateWithoutGroupInput,
      GroupMembershipUncheckedUpdateWithoutGroupInput
    >;
  };

  export type GroupMembershipUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMembershipScalarWhereInput;
    data: XOR<
      GroupMembershipUpdateManyMutationInput,
      GroupMembershipUncheckedUpdateManyWithoutGroupInput
    >;
  };

  export type ShoppingListItemUpsertWithWhereUniqueWithoutGroupInput = {
    where: ShoppingListItemWhereUniqueInput;
    update: XOR<
      ShoppingListItemUpdateWithoutGroupInput,
      ShoppingListItemUncheckedUpdateWithoutGroupInput
    >;
    create: XOR<
      ShoppingListItemCreateWithoutGroupInput,
      ShoppingListItemUncheckedCreateWithoutGroupInput
    >;
  };

  export type ShoppingListItemUpdateWithWhereUniqueWithoutGroupInput = {
    where: ShoppingListItemWhereUniqueInput;
    data: XOR<
      ShoppingListItemUpdateWithoutGroupInput,
      ShoppingListItemUncheckedUpdateWithoutGroupInput
    >;
  };

  export type ShoppingListItemUpdateManyWithWhereWithoutGroupInput = {
    where: ShoppingListItemScalarWhereInput;
    data: XOR<
      ShoppingListItemUpdateManyMutationInput,
      ShoppingListItemUncheckedUpdateManyWithoutGroupInput
    >;
  };

  export type ShoppingListItemScalarWhereInput = {
    AND?: ShoppingListItemScalarWhereInput | ShoppingListItemScalarWhereInput[];
    OR?: ShoppingListItemScalarWhereInput[];
    NOT?: ShoppingListItemScalarWhereInput | ShoppingListItemScalarWhereInput[];
    id?: StringFilter<"ShoppingListItem"> | string;
    name?: StringFilter<"ShoppingListItem"> | string;
    completed?: BoolFilter<"ShoppingListItem"> | boolean;
    addedBy?: StringNullableFilter<"ShoppingListItem"> | string | null;
    createdAt?: DateTimeFilter<"ShoppingListItem"> | Date | string;
    groupId?: StringFilter<"ShoppingListItem"> | string;
  };

  export type InvitationUpsertWithWhereUniqueWithoutGroupInput = {
    where: InvitationWhereUniqueInput;
    update: XOR<
      InvitationUpdateWithoutGroupInput,
      InvitationUncheckedUpdateWithoutGroupInput
    >;
    create: XOR<
      InvitationCreateWithoutGroupInput,
      InvitationUncheckedCreateWithoutGroupInput
    >;
  };

  export type InvitationUpdateWithWhereUniqueWithoutGroupInput = {
    where: InvitationWhereUniqueInput;
    data: XOR<
      InvitationUpdateWithoutGroupInput,
      InvitationUncheckedUpdateWithoutGroupInput
    >;
  };

  export type InvitationUpdateManyWithWhereWithoutGroupInput = {
    where: InvitationScalarWhereInput;
    data: XOR<
      InvitationUpdateManyMutationInput,
      InvitationUncheckedUpdateManyWithoutGroupInput
    >;
  };

  export type UserCreateWithoutMembershipsInput = {
    id?: string;
    email: string;
    name?: string | null;
    passwordHash?: string | null;
    provider?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notifications?: NotificationCreateNestedManyWithoutUserInput;
    sentInvitations?: InvitationCreateNestedManyWithoutInvitedByUserInput;
  };

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string;
    email: string;
    name?: string | null;
    passwordHash?: string | null;
    provider?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
    sentInvitations?: InvitationUncheckedCreateNestedManyWithoutInvitedByUserInput;
  };

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutMembershipsInput,
      UserUncheckedCreateWithoutMembershipsInput
    >;
  };

  export type GroupCreateWithoutMembersInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shoppingItems?: ShoppingListItemCreateNestedManyWithoutGroupInput;
    invitations?: InvitationCreateNestedManyWithoutGroupInput;
  };

  export type GroupUncheckedCreateWithoutMembersInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shoppingItems?: ShoppingListItemUncheckedCreateNestedManyWithoutGroupInput;
    invitations?: InvitationUncheckedCreateNestedManyWithoutGroupInput;
  };

  export type GroupCreateOrConnectWithoutMembersInput = {
    where: GroupWhereUniqueInput;
    create: XOR<
      GroupCreateWithoutMembersInput,
      GroupUncheckedCreateWithoutMembersInput
    >;
  };

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<
      UserUpdateWithoutMembershipsInput,
      UserUncheckedUpdateWithoutMembershipsInput
    >;
    create: XOR<
      UserCreateWithoutMembershipsInput,
      UserUncheckedCreateWithoutMembershipsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutMembershipsInput,
      UserUncheckedUpdateWithoutMembershipsInput
    >;
  };

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    notifications?: NotificationUpdateManyWithoutUserNestedInput;
    sentInvitations?: InvitationUpdateManyWithoutInvitedByUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput;
    sentInvitations?: InvitationUncheckedUpdateManyWithoutInvitedByUserNestedInput;
  };

  export type GroupUpsertWithoutMembersInput = {
    update: XOR<
      GroupUpdateWithoutMembersInput,
      GroupUncheckedUpdateWithoutMembersInput
    >;
    create: XOR<
      GroupCreateWithoutMembersInput,
      GroupUncheckedCreateWithoutMembersInput
    >;
    where?: GroupWhereInput;
  };

  export type GroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: GroupWhereInput;
    data: XOR<
      GroupUpdateWithoutMembersInput,
      GroupUncheckedUpdateWithoutMembersInput
    >;
  };

  export type GroupUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    shoppingItems?: ShoppingListItemUpdateManyWithoutGroupNestedInput;
    invitations?: InvitationUpdateManyWithoutGroupNestedInput;
  };

  export type GroupUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    shoppingItems?: ShoppingListItemUncheckedUpdateManyWithoutGroupNestedInput;
    invitations?: InvitationUncheckedUpdateManyWithoutGroupNestedInput;
  };

  export type GroupCreateWithoutShoppingItemsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: GroupMembershipCreateNestedManyWithoutGroupInput;
    invitations?: InvitationCreateNestedManyWithoutGroupInput;
  };

  export type GroupUncheckedCreateWithoutShoppingItemsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: GroupMembershipUncheckedCreateNestedManyWithoutGroupInput;
    invitations?: InvitationUncheckedCreateNestedManyWithoutGroupInput;
  };

  export type GroupCreateOrConnectWithoutShoppingItemsInput = {
    where: GroupWhereUniqueInput;
    create: XOR<
      GroupCreateWithoutShoppingItemsInput,
      GroupUncheckedCreateWithoutShoppingItemsInput
    >;
  };

  export type GroupUpsertWithoutShoppingItemsInput = {
    update: XOR<
      GroupUpdateWithoutShoppingItemsInput,
      GroupUncheckedUpdateWithoutShoppingItemsInput
    >;
    create: XOR<
      GroupCreateWithoutShoppingItemsInput,
      GroupUncheckedCreateWithoutShoppingItemsInput
    >;
    where?: GroupWhereInput;
  };

  export type GroupUpdateToOneWithWhereWithoutShoppingItemsInput = {
    where?: GroupWhereInput;
    data: XOR<
      GroupUpdateWithoutShoppingItemsInput,
      GroupUncheckedUpdateWithoutShoppingItemsInput
    >;
  };

  export type GroupUpdateWithoutShoppingItemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: GroupMembershipUpdateManyWithoutGroupNestedInput;
    invitations?: InvitationUpdateManyWithoutGroupNestedInput;
  };

  export type GroupUncheckedUpdateWithoutShoppingItemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: GroupMembershipUncheckedUpdateManyWithoutGroupNestedInput;
    invitations?: InvitationUncheckedUpdateManyWithoutGroupNestedInput;
  };

  export type UserCreateWithoutNotificationsInput = {
    id?: string;
    email: string;
    name?: string | null;
    passwordHash?: string | null;
    provider?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: GroupMembershipCreateNestedManyWithoutUserInput;
    sentInvitations?: InvitationCreateNestedManyWithoutInvitedByUserInput;
  };

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    email: string;
    name?: string | null;
    passwordHash?: string | null;
    provider?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: GroupMembershipUncheckedCreateNestedManyWithoutUserInput;
    sentInvitations?: InvitationUncheckedCreateNestedManyWithoutInvitedByUserInput;
  };

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutNotificationsInput,
      UserUncheckedCreateWithoutNotificationsInput
    >;
  };

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<
      UserUpdateWithoutNotificationsInput,
      UserUncheckedUpdateWithoutNotificationsInput
    >;
    create: XOR<
      UserCreateWithoutNotificationsInput,
      UserUncheckedCreateWithoutNotificationsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutNotificationsInput,
      UserUncheckedUpdateWithoutNotificationsInput
    >;
  };

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: GroupMembershipUpdateManyWithoutUserNestedInput;
    sentInvitations?: InvitationUpdateManyWithoutInvitedByUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: GroupMembershipUncheckedUpdateManyWithoutUserNestedInput;
    sentInvitations?: InvitationUncheckedUpdateManyWithoutInvitedByUserNestedInput;
  };

  export type GroupCreateWithoutInvitationsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: GroupMembershipCreateNestedManyWithoutGroupInput;
    shoppingItems?: ShoppingListItemCreateNestedManyWithoutGroupInput;
  };

  export type GroupUncheckedCreateWithoutInvitationsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: GroupMembershipUncheckedCreateNestedManyWithoutGroupInput;
    shoppingItems?: ShoppingListItemUncheckedCreateNestedManyWithoutGroupInput;
  };

  export type GroupCreateOrConnectWithoutInvitationsInput = {
    where: GroupWhereUniqueInput;
    create: XOR<
      GroupCreateWithoutInvitationsInput,
      GroupUncheckedCreateWithoutInvitationsInput
    >;
  };

  export type UserCreateWithoutSentInvitationsInput = {
    id?: string;
    email: string;
    name?: string | null;
    passwordHash?: string | null;
    provider?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: GroupMembershipCreateNestedManyWithoutUserInput;
    notifications?: NotificationCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutSentInvitationsInput = {
    id?: string;
    email: string;
    name?: string | null;
    passwordHash?: string | null;
    provider?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: GroupMembershipUncheckedCreateNestedManyWithoutUserInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutSentInvitationsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutSentInvitationsInput,
      UserUncheckedCreateWithoutSentInvitationsInput
    >;
  };

  export type GroupUpsertWithoutInvitationsInput = {
    update: XOR<
      GroupUpdateWithoutInvitationsInput,
      GroupUncheckedUpdateWithoutInvitationsInput
    >;
    create: XOR<
      GroupCreateWithoutInvitationsInput,
      GroupUncheckedCreateWithoutInvitationsInput
    >;
    where?: GroupWhereInput;
  };

  export type GroupUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: GroupWhereInput;
    data: XOR<
      GroupUpdateWithoutInvitationsInput,
      GroupUncheckedUpdateWithoutInvitationsInput
    >;
  };

  export type GroupUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: GroupMembershipUpdateManyWithoutGroupNestedInput;
    shoppingItems?: ShoppingListItemUpdateManyWithoutGroupNestedInput;
  };

  export type GroupUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: GroupMembershipUncheckedUpdateManyWithoutGroupNestedInput;
    shoppingItems?: ShoppingListItemUncheckedUpdateManyWithoutGroupNestedInput;
  };

  export type UserUpsertWithoutSentInvitationsInput = {
    update: XOR<
      UserUpdateWithoutSentInvitationsInput,
      UserUncheckedUpdateWithoutSentInvitationsInput
    >;
    create: XOR<
      UserCreateWithoutSentInvitationsInput,
      UserUncheckedCreateWithoutSentInvitationsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutSentInvitationsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutSentInvitationsInput,
      UserUncheckedUpdateWithoutSentInvitationsInput
    >;
  };

  export type UserUpdateWithoutSentInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: GroupMembershipUpdateManyWithoutUserNestedInput;
    notifications?: NotificationUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutSentInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: GroupMembershipUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type GroupMembershipCreateManyUserInput = {
    groupId: string;
    role?: $Enums.Role;
  };

  export type NotificationCreateManyUserInput = {
    id?: string;
    message: string;
    read?: boolean;
    createdAt?: Date | string;
  };

  export type InvitationCreateManyInvitedByUserInput = {
    id?: string;
    email: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    groupId: string;
  };

  export type GroupMembershipUpdateWithoutUserInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput;
  };

  export type GroupMembershipUncheckedUpdateWithoutUserInput = {
    groupId?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
  };

  export type GroupMembershipUncheckedUpdateManyWithoutUserInput = {
    groupId?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
  };

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    read?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    read?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    read?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InvitationUpdateWithoutInvitedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    group?: GroupUpdateOneRequiredWithoutInvitationsNestedInput;
  };

  export type InvitationUncheckedUpdateWithoutInvitedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: StringFieldUpdateOperationsInput | string;
  };

  export type InvitationUncheckedUpdateManyWithoutInvitedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: StringFieldUpdateOperationsInput | string;
  };

  export type GroupMembershipCreateManyGroupInput = {
    userId: string;
    role?: $Enums.Role;
  };

  export type ShoppingListItemCreateManyGroupInput = {
    id?: string;
    name: string;
    completed?: boolean;
    addedBy?: string | null;
    createdAt?: Date | string;
  };

  export type InvitationCreateManyGroupInput = {
    id?: string;
    email: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invitedByUserId: string;
  };

  export type GroupMembershipUpdateWithoutGroupInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput;
  };

  export type GroupMembershipUncheckedUpdateWithoutGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
  };

  export type GroupMembershipUncheckedUpdateManyWithoutGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
  };

  export type ShoppingListItemUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    completed?: BoolFieldUpdateOperationsInput | boolean;
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ShoppingListItemUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    completed?: BoolFieldUpdateOperationsInput | boolean;
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ShoppingListItemUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    completed?: BoolFieldUpdateOperationsInput | boolean;
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InvitationUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    invitedByUser?: UserUpdateOneRequiredWithoutSentInvitationsNestedInput;
  };

  export type InvitationUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    invitedByUserId?: StringFieldUpdateOperationsInput | string;
  };

  export type InvitationUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    invitedByUserId?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
