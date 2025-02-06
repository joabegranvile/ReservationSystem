import { JsonObject, JsonProperty } from 'typescript-json-serializer';


@JsonObject()
export class User {
  @JsonProperty() id: string;
  @JsonProperty() name: string;
  @JsonProperty() email: string;

  constructor(params: Partial<User>) {
    if (!params) return;
    Object.assign(this, params);
  }
}
