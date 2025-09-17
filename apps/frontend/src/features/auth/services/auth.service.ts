import { authApi } from "../api/auth.api";
import { authResponseSchema } from "../../../../../../packages/validation-schemas/src/auth.schema";
import {
  type LoginDto,
  type RegisterDto,
} from "../../../../../../packages/validation-schemas/src/auth.schema";

export const authService = {
  login: async (values: LoginDto) => {
    const response = await authApi.login(values);
    const serverResponse = response.data;

    const validatedData = authResponseSchema.parse(serverResponse.data);

    return {
      ...serverResponse,
      data: validatedData,
    };
  },

  register: async (values: RegisterDto) => {
    const response = await authApi.register(values);
    const serverResponse = response.data;

    const validatedData = authResponseSchema.parse(serverResponse.data);

    return {
      ...serverResponse,
      data: validatedData,
    };
  },
};
