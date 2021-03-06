import { statusList } from "@/types";

export const statuses: statusList = {
  OK: 200,
  AUTHORIZED: 201,
  CREATED: 201,
  NOT_FOUND: 404,
  NO_BLOCKS: 400,
  NOT_AUTHORIZED: 401,
  NOT_ENTERED: 403,
  ALREADY_EXIST: 409,
  CONFLICT: 409,
  FAILED_DEPENDENCY: 424,
  SERVER_ERROR: 500,
};