import { JsonSerializer } from "typescript-json-serializer";
import { Type } from "typescript-json-serializer/dist/helpers";


export class Serialize {
  private static readonly serializer = new JsonSerializer();

  public static serializeObject<T extends object>(obj: T): unknown {
    return this.serializer.serializeObject(obj);
  }

  public static deserializeObject<T extends object>(
    obj: T,
    type: T | Type<T>
  ): T | null {
    return this.serializer.deserializeObject(obj, type) ?? null;
  }

  public static serializeObjectArray<T extends object>(
    array: T[]
  ): unknown[] {
    return this.serializer.serializeObjectArray(array) as unknown[];
  }

  public static deserializeObjectArray<T extends object>(
    array: unknown[],
    type: T | Type<T>
  ): T[] {
    return this.serializer.deserializeObjectArray(array, type) as T[];
  }
  
}
