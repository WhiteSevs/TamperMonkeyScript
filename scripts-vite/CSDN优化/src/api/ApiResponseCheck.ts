import { utils } from "@/env";

export const ApiResponseCheck = {
  isSuccessResponse(data: any) {
    if (data == null) {
      return false;
    }
    if (typeof data === "string") {
      data = utils.toJSON(data);
    }
    return data?.code === 200;
  },
};
